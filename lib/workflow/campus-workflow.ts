import { serviceModules } from "@/config/campus";
import type { CampusAnswer, CampusIntent } from "@/lib/ai/types";
import { searchKnowledge } from "@/lib/knowledge/search";
import type { KnowledgeCategory } from "@/lib/knowledge/types";

const intentKeywords: Array<{ intent: CampusIntent; keywords: string[] }> = [
  { intent: "scholarship", keywords: ["奖学金", "助学金", "困难认定", "助学贷款"] },
  { intent: "freshman_guide", keywords: ["新生", "报到", "入学", "宿舍", "军训"] },
  { intent: "academic_affairs", keywords: ["教务", "校历", "考试", "缓考", "补考", "学籍", "转专业"] },
  { intent: "library", keywords: ["图书馆", "借书", "电子资源", "阅览室"] },
  { intent: "notice", keywords: ["通知", "解读", "影响", "安排"] },
  { intent: "department", keywords: ["电话", "部门", "联系", "办公室", "找谁"] },
  { intent: "faq", keywords: ["常见问题", "FAQ", "高频"] },
  { intent: "campus_service", keywords: ["学生证", "办理", "补办", "流程", "材料"] }
];

const blockedKeywords = ["成绩", "课表", "校园卡余额", "电费", "宿舍电费", "个人信息", "身份证号", "学号查询"];

const intentCategoryMap: Partial<Record<CampusIntent, KnowledgeCategory>> = {
  campus_service: "campus-services",
  freshman_guide: "freshman-guide",
  scholarship: "scholarships",
  academic_affairs: "academic-affairs",
  library: "library",
  notice: "notices",
  department: "departments",
  faq: "faq"
};

export function detectCampusIntent(message: string): CampusIntent {
  if (blockedKeywords.some((keyword) => message.includes(keyword))) {
    return "out_of_scope";
  }

  return intentKeywords.find((item) => item.keywords.some((keyword) => message.includes(keyword)))?.intent ?? "campus_service";
}

export function generateDemoCampusAnswer(message: string): CampusAnswer {
  const intent = detectCampusIntent(message);

  if (intent === "out_of_scope") {
    return {
      intent,
      title: "该问题暂不支持查询",
      summary: "曲智通首版不接入学校内部系统，也不查询个人成绩、课表、校园卡余额、宿舍电费或个人审批进度。",
      steps: ["请通过学校官方系统或对应部门查询个人数据", "如需政策说明，可以改问公开政策或办理流程"],
      materials: [],
      departmentHint: "建议联系学校公开渠道或相关职能部门确认。",
      cautions: ["不要在对话中输入身份证号、学号、手机号等敏感信息。"],
      sources: [{ title: "曲智通产品边界规则", type: "demo", updatedAt: "2026-07-29" }],
      recommendations: ["学生证补办需要先核验哪些信息", "奖学金申请材料以哪里为准", "这条校园通知怎么理解"],
      isDemo: true
    };
  }

  const module = serviceModules.find((item) => {
    if (intent === "campus_service") return item.slug === "campus-service";
    if (intent === "freshman_guide") return item.slug === "freshman-guide";
    if (intent === "scholarship") return item.slug === "scholarship";
    if (intent === "academic_affairs") return item.slug === "academic-affairs";
    if (intent === "library") return item.slug === "library";
    if (intent === "notice") return item.slug === "notice";
    if (intent === "department") return item.slug === "department";
    return item.slug === "faq";
  });
  const category = intentCategoryMap[intent];
  const knowledgeResults = searchKnowledge({
    query: message,
    category,
    limit: 3
  });
  const primaryKnowledge = knowledgeResults[0];

  return {
    intent,
    title: module?.title ?? "校园办事咨询",
    summary: primaryKnowledge
      ? `已参考知识库“${primaryKnowledge.title}”整理公开信息摘要：${primaryKnowledge.content}`
      : `已识别为“${module?.title ?? "校园办事咨询"}”场景。当前未命中可引用资料，仅提供通用查询建议。`,
    steps: primaryKnowledge
      ? ["先阅读命中的公开来源", "核验是否适用于自己的年级、校区和学院", "按原通知确认材料、时间和入口", "必要时向学院或相关职能部门确认", "保留原通知链接，避免使用过期资料"]
      : ["识别问题所属场景", "优先到学校官网或部门官网核验", "确认是否涉及个人数据或内部系统", "只根据公开资料整理咨询建议", "无法确认时不编造结论"],
    materials: primaryKnowledge ? ["原通知或来源页面", "学院或部门要求的表格与材料", "个人材料仅在官方系统或线下部门提交"] : ["公开政策或通知原文", "学院或部门补充通知", "官方系统或公开联系方式"],
    departmentHint: primaryKnowledge ? "知识库已命中公开资料。具体办理口径仍建议向学院或相关职能部门确认。" : "未命中可信来源时，建议优先查看学校官网、部门官网或咨询学院老师。",
    cautions: ["以学校和学院最新公开通知为准", "涉及个人数据的问题需前往官方系统查询", "本回答不替代学校部门最终解释"],
    sources: primaryKnowledge
      ? knowledgeResults.map((item) => ({
          title: item.title,
          type: "knowledge" as const,
          updatedAt: item.updatedAt,
          url: item.sourceUrl
        }))
      : [{ title: module?.source ?? "演示知识库来源", type: "demo", updatedAt: "2026-07-29" }],
    recommendations: serviceModules
      .filter((item) => item.slug !== module?.slug)
      .slice(0, 3)
      .map((item) => item.question),
    isDemo: !primaryKnowledge
  };
}
