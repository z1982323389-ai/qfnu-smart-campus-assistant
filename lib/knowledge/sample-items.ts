import type { KnowledgeItem } from "@/lib/knowledge/types";

export const knowledgeItems: KnowledgeItem[] = [
  {
    id: "kb-campus-student-card",
    title: "学生证补办咨询口径",
    category: "campus-services",
    tags: ["学生证", "补办", "材料", "流程"],
    audience: ["本科生", "研究生"],
    campus: "全校",
    sourceType: "web",
    sourceName: "曲阜师范大学教务处 学籍管理",
    sourceUrl: "https://jwc.qfnu.edu.cn/xjgl/9.htm",
    version: "0.2.0",
    updatedAt: "2026-07-29",
    status: "active",
    content:
      "学生证遗失、换发等事项通常需要以学院通知和教务处学籍管理相关栏目为准。公开页面显示教务处设有学籍管理、学籍办事指南等栏目，并在部分学籍事项说明中提到学生证换发需按补办程序办理。系统只提供咨询前准备建议，不替代学校部门办理。"
  },
  {
    id: "kb-scholarship-materials",
    title: "奖助学金申请信息核验",
    category: "scholarships",
    tags: ["奖学金", "助学金", "材料", "申请"],
    audience: ["本科生", "研究生", "辅导员"],
    campus: "全校",
    sourceType: "web",
    sourceName: "曲阜师范大学学生工作处 奖助学金公开信息",
    sourceUrl: "https://xg.qfnu.edu.cn/ssjg.jsp?currentnum=1&searchScope=0&wbtreeid=1021",
    version: "0.2.0",
    updatedAt: "2026-07-29",
    status: "active",
    content:
      "学生工作处公开页面可检索到国家奖学金、学生奖励资助经费管理使用办法、学生资助管理等相关信息。奖助学金申请需按具体项目通知核验申请条件、评定范围、学院推荐、学校审核、公示和材料提交要求，系统不判断个人是否符合条件。"
  },
  {
    id: "kb-freshman-checklist",
    title: "新生报到信息核验建议",
    category: "freshman-guide",
    tags: ["新生", "报到", "入学", "材料"],
    audience: ["新生"],
    campus: "全校",
    sourceType: "web",
    sourceName: "曲阜师范大学 2025级新同学迎新新闻",
    sourceUrl: "https://www.qfnu.edu.cn/info/1034/57393.htm",
    version: "0.2.0",
    updatedAt: "2026-07-29",
    status: "active",
    content:
      "学校官网公开新闻可作为了解迎新工作的背景信息，但具体报到时间、材料、校区、住宿、缴费、档案和党团组织关系等要求，应以当年招生网、迎新系统、录取通知书和学院通知为准。系统只做信息核验提示，不生成确定性报到清单。"
  },
  {
    id: "kb-library-resource",
    title: "图书馆电子资源入口说明",
    category: "library",
    tags: ["图书馆", "电子资源", "借阅", "检索"],
    audience: ["本科生", "研究生", "教师"],
    campus: "全校",
    sourceType: "web",
    sourceName: "曲阜师范大学图书馆 数据库与综合服务",
    sourceUrl: "https://lib.qfnu.edu.cn/",
    version: "0.2.0",
    updatedAt: "2026-07-29",
    status: "active",
    content:
      "图书馆官网提供数据库、馆藏目录、CALIS资源、中文数据库、外文数据库、特色OA库、试用数据库等入口，也提供论文提交、空间预约、读者荐购、资源讲座等综合服务链接。具体访问权限、校外访问方式和账号要求应以图书馆页面提示为准。"
  },
  {
    id: "kb-notice-reading",
    title: "校园通知解读口径",
    category: "notices",
    tags: ["通知", "解读", "时间", "对象"],
    audience: ["全体师生"],
    campus: "全校",
    sourceType: "web",
    sourceName: "曲阜师范大学教务处 通知公告",
    sourceUrl: "https://jwc.qfnu.edu.cn/index.htm",
    version: "0.2.0",
    updatedAt: "2026-07-29",
    status: "active",
    content:
      "教务处首页包含重要通知、部门公告、规章制度等公开栏目。解读校园通知时，应提取发布部门、影响对象、关键时间、用户需要自行完成的动作、附件材料和联系方式。涉及选课、考试、教材、学籍等事项时，应以原通知和后续补充通知为准。"
  },
  {
    id: "kb-academic-calendar",
    title: "校历查询入口说明",
    category: "academic-affairs",
    tags: ["校历", "教务", "学期", "时间安排"],
    audience: ["本科生", "研究生", "教师"],
    campus: "全校",
    sourceType: "web",
    sourceName: "曲阜师范大学教务处 2025-2026学年校历",
    sourceUrl: "https://jwc.qfnu.edu.cn/info/1091/7292.htm",
    version: "0.1.0",
    updatedAt: "2026-07-29",
    status: "active",
    content:
      "曲阜师范大学教务处公开发布校历页面并提供附件下载入口。查询上课周次、考试周、寒暑假等安排时，应以教务处发布的校历附件和后续通知为准；系统不对临时调课、学院单独安排作确定性判断。"
  },
  {
    id: "kb-department-contact",
    title: "学校公开联系方式查询",
    category: "departments",
    tags: ["联系方式", "部门", "电话", "地址"],
    audience: ["全体师生", "家长", "访客"],
    campus: "全校",
    sourceType: "web",
    sourceName: "曲阜师范大学 联系学校",
    sourceUrl: "https://www.qfnu.edu.cn/ljxx/lxxx.htm",
    version: "0.1.0",
    updatedAt: "2026-07-29",
    status: "active",
    content:
      "学校官网联系学校页面公开了学校办公室、书记校长信箱、信访办公室、本科招生、研究生招生、人事处、科研部门、档案馆等联系方式，并列出曲阜校区、日照校区地址。具体问题是否由某部门负责，应以学校公开页面和部门答复为准。"
  },
  {
    id: "kb-electronic-proof",
    title: "电子可信证明公开通知说明",
    category: "academic-affairs",
    tags: ["电子证明", "成绩单", "学籍证明", "教务"],
    audience: ["本科生"],
    campus: "全校",
    sourceType: "web",
    sourceName: "曲阜师范大学教务处 关于启用电子可信证明的通知",
    sourceUrl: "https://jwc.qfnu.edu.cn/info/1111/6721.htm",
    version: "0.1.0",
    updatedAt: "2026-07-29",
    status: "active",
    content:
      "教务处公开页面曾发布关于启用电子可信证明的通知，涉及本科在校生可申请的部分证明材料类型。由于证明申请涉及个人身份和教务系统，曲智通只解释公开通知口径，不代查、不代办、不处理个人账号信息。"
  }
];
