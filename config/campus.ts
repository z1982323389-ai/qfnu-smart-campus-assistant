export type ServiceModule = {
  slug: string;
  title: string;
  audience: string;
  summary: string;
  question: string;
  answerShape: string[];
  tags: string[];
  source: string;
};

export const serviceModules: ServiceModule[] = [
  {
    slug: "campus-service",
    title: "校园办事咨询",
    audience: "本科生 / 研究生 / 教师",
    summary: "把公开办事信息整理成可核验的步骤、材料和咨询建议。",
    question: "学生证丢了，应该怎么补办？",
    answerShape: ["适用对象", "建议步骤", "材料提示", "咨询渠道", "来源引用"],
    tags: ["流程", "材料", "部门"],
    source: "学校公开办事说明"
  },
  {
    slug: "freshman-guide",
    title: "新生指南",
    audience: "新生 / 家长 / 辅导员",
    summary: "围绕报到准备、校园服务和常用入口形成入学前查询引导。",
    question: "新生报到前需要准备什么？",
    answerShape: ["报到准备", "材料清单", "校园服务", "常见问题", "下一步建议"],
    tags: ["入学", "生活", "报到"],
    source: "学校官网、招生网与学院公开通知"
  },
  {
    slug: "scholarship",
    title: "奖助学金",
    audience: "本科生 / 研究生 / 辅导员",
    summary: "解释奖学金、助学金、困难认定等公开通知中的流程和材料口径。",
    question: "奖学金申请通常要准备哪些材料？",
    answerShape: ["政策说明", "申请条件", "材料清单", "时间提醒", "注意事项"],
    tags: ["奖学金", "助学金", "困难认定"],
    source: "学生工作相关公开文件"
  },
  {
    slug: "academic-affairs",
    title: "教务政策",
    audience: "学生 / 教师",
    summary: "将校历、考试、学籍、转专业等公开通知转为易懂说明。",
    question: "校历和考试安排在哪里看？",
    answerShape: ["规则解释", "适用场景", "办理流程", "风险提醒", "来源引用"],
    tags: ["校历", "考试", "学籍"],
    source: "教务公开通知与政策"
  },
  {
    slug: "library",
    title: "图书馆服务",
    audience: "学生 / 教师 / 新生",
    summary: "说明图书馆官网公开的数据库、检索入口和综合服务入口。",
    question: "图书馆电子资源怎么使用？",
    answerShape: ["服务说明", "使用步骤", "适用对象", "注意事项", "相关服务"],
    tags: ["借阅", "电子资源", "空间"],
    source: "图书馆公开服务说明"
  },
  {
    slug: "notice",
    title: "校园通知解读",
    audience: "全体师生",
    summary: "把通知转成摘要、关键时间、影响对象和需要行动。",
    question: "这条通知对我有什么影响？",
    answerShape: ["一句话摘要", "影响对象", "关键时间", "需要行动", "风险提醒"],
    tags: ["摘要", "时间", "待办"],
    source: "学校与学院公开通知"
  },
  {
    slug: "department",
    title: "部门联系方式",
    audience: "学生 / 教师 / 辅导员",
    summary: "根据问题类型提示可能的公开咨询渠道和查询入口。",
    question: "这个问题应该联系哪个部门？",
    answerShape: ["可能渠道", "职责线索", "公开联系方式", "咨询前准备", "边界说明"],
    tags: ["部门", "电话", "地点"],
    source: "学校部门公开页面"
  },
  {
    slug: "faq",
    title: "FAQ",
    audience: "全体用户",
    summary: "沉淀高频问题，辅助 AI 生成相关推荐和快速入口。",
    question: "有哪些新生最常问的问题？",
    answerShape: ["问题分类", "简要回答", "相关入口", "追问建议", "更新说明"],
    tags: ["高频", "推荐", "入口"],
    source: "知识库高频问题"
  }
];

export const demoNotice = {
  title: "关于近期校园事务安排的通知",
  summary: "系统会把长通知拆解为影响对象、关键时间、需要行动和材料要求。",
  fields: ["通知摘要", "影响对象", "关键时间", "需要行动", "材料要求", "风险提醒"]
};

export const workflowSteps = [
  "输入清洗",
  "意图识别",
  "知识库检索",
  "结构化回答",
  "来源引用",
  "相关推荐",
  "拒答与官方渠道引导"
];
