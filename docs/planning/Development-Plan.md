# 曲智通开发计划

## 当前目标

第一阶段只完成产品和研发方案设计，不编写业务代码。目标是让后续工程初始化、页面开发、AI 接入、知识库建设和比赛材料生成都有明确边界，避免项目在开发中失控。

## 开发策略

项目应采用“先打通核心链路，再提升视觉与材料”的顺序。比赛作品最容易失败的地方不是技术栈不先进，而是功能太多、链路不通、演示不稳定。因此首版开发必须围绕一条主线：用户提出校园事务问题，系统检索可信资料，生成结构化回答，给出来源和下一步建议。

## 阶段划分

| 阶段 | 目标 | 主要产出 |
|---|---|---|
| 第一阶段 | 产品与研发方案 | PRD、架构、计划、比赛交付方案 |
| 第二阶段 | 工程初始化 | Next.js 项目、TypeScript、TailwindCSS、shadcn/ui、基础路由、主题 |
| 第三阶段 | UI 骨架 | 首页、聊天页、办事大厅、知识库介绍、帮助中心、关于、更新日志、错误页 |
| 第四阶段 | AI 与 API | `/api/ai/chat`、Coze API 封装、统一错误、Loading、Retry、限流 |
| 第五阶段 | 知识库 | 文件结构、元数据、检索接口、示例资料、引用来源 |
| 第六阶段 | Workflow | 意图识别、回答生成、相关推荐、拒答机制、通知解读 |
| 第七阶段 | 后台配置 | 知识条目管理、分类标签、版本状态、Prompt 配置 |
| 第八阶段 | 测试与优化 | 响应式、深色模式、错误边界、性能、问答质量、演示稳定性 |
| 第九阶段 | 比赛交付 | README、部署文档、作品说明书、答辩 PPT、讲稿、演示脚本 |

## 推荐项目目录

后续开发建议采用以下目录结构：

```text
qfnu-smart-campus-assistant/
  app/
    page.tsx
    chat/
    services/
    popular/
    knowledge/
    help/
    about/
    changelog/
    admin/
    api/
      ai/
      knowledge/
      logs/
      health/
    not-found.tsx
    error.tsx
    global-error.tsx
  components/
    ui/
    layout/
    home/
    chat/
    services/
    knowledge/
    admin/
    shared/
  lib/
    ai/
    api/
    knowledge/
    workflow/
    rate-limit/
    logger/
    validators/
    utils/
  config/
    site.ts
    navigation.ts
    prompts.ts
  content/
    knowledge-base/
    faq/
  docs/
    product/
    architecture/
    workflow/
    api/
    deployment/
    competition/
  public/
    images/
    icons/
  tests/
    unit/
    integration/
    e2e/
```

这个目录把页面、组件、服务、知识库、文档和测试分开，适合比赛项目继续扩展。`content/knowledge-base` 用于首版文件化知识库，`docs` 用于长期维护产品和工程文档。

## 页面开发顺序

| 优先级 | 页面 | 原因 |
|---|---|---|
| P0 | 首页 | 决定评委第一印象，也是所有功能入口 |
| P0 | AI 聊天 | 产品核心链路，必须最早打通 |
| P0 | 校园办事大厅 | 证明产品不是普通聊天工具 |
| P1 | 热门办事 | 提升演示效率 |
| P1 | 知识库介绍 | 建立可信来源和边界认知 |
| P1 | 后台配置 | 证明可持续维护 |
| P2 | 帮助中心、关于我们、更新日志 | 完善产品质感 |
| P2 | 404、500、Error Boundary | 提升工程完整度 |

## Git 规范

建议分支：

| 分支 | 用途 |
|---|---|
| `main` | 稳定可演示版本 |
| `develop` | 日常集成 |
| `feature/docs-phase-1` | 第一阶段文档 |
| `feature/project-bootstrap` | 工程初始化 |
| `feature/ui-shell` | 页面与设计系统 |
| `feature/ai-workflow` | AI 与 Workflow |
| `feature/knowledge-base` | 知识库 |
| `release/v1.0.0` | 比赛提交版本 |

Commit Message 建议采用 Conventional Commits：

| 类型 | 用途 | 示例 |
|---|---|---|
| `docs` | 文档 | `docs: add phase one product and architecture plan` |
| `feat` | 新功能 | `feat: add campus service hall page` |
| `fix` | 修复问题 | `fix: handle empty knowledge search result` |
| `refactor` | 重构 | `refactor: split ai service layer` |
| `test` | 测试 | `test: add chat api validation tests` |
| `chore` | 工程事务 | `chore: configure lint and format scripts` |

版本建议：

| 版本 | 含义 |
|---|---|
| `v0.1.0` | 文档与工程初始化完成 |
| `v0.2.0` | 页面骨架完成 |
| `v0.3.0` | AI 基础问答完成 |
| `v0.4.0` | 知识库和引用完成 |
| `v0.5.0` | 后台配置完成 |
| `v1.0.0` | 比赛可提交版本 |

## 质量标准

首版质量标准不追求大型平台复杂度，而追求演示稳定性和可信体验。

| 维度 | 标准 |
|---|---|
| 视觉 | PC、Pad、Mobile 主要页面无布局崩坏，深浅色都可用 |
| 性能 | 首屏加载小于 2 秒，主要交互反馈小于 200 毫秒 |
| AI | 高频问题能返回结构化答案，无法回答时不编造 |
| 来源 | 知识库答案显示来源、分类、更新时间 |
| 安全 | API Key 不出现在前端，AI 接口有限流 |
| 稳定 | 404、500、Error Boundary、Loading、Toast 均可用 |
| 文档 | README、PRD、架构、Workflow、部署、API、比赛材料齐全 |

## 测试计划

| 测试类型 | 范围 |
|---|---|
| 单元测试 | 输入校验、Workflow 判断、知识库检索函数 |
| API 测试 | AI 接口、知识库接口、错误返回、限流 |
| UI 测试 | 首页、聊天页、办事大厅、后台配置 |
| 响应式测试 | PC、Pad、Mobile |
| AI 质量测试 | 高频问题、边界问题、拒答问题、通知解读 |
| 演示测试 | 断网降级、本地运行、线上部署、备用问题 |

## 风险分析

| 风险 | 影响 | 应对 |
|---|---|---|
| 功能范围过大 | 开发延期，演示链路不完整 | 首版只做八个核心模块，后续能力放入 Roadmap |
| 学校资料分散 | 知识库质量不稳定 | 先整理高频公开资料，每条保留来源和版本 |
| AI 幻觉 | 回答不可信 | 强制知识库检索、来源引用、拒答机制 |
| Coze API 不稳定 | 演示失败 | 增加错误提示、重试、预置演示问题和备用静态答案 |
| UI 时间不足 | 产品观感一般 | 优先打磨首页、聊天页、办事大厅三页 |
| 后台过重 | 占用开发时间 | 首版只做轻量配置，不做复杂权限 |
| 部署环境问题 | 比赛现场不可访问 | 准备 Vercel 线上地址、本地运行方案和截图材料 |
| 敏感数据问题 | 安全与合规风险 | 不接入个人数据，不记录敏感信息，不处理内部系统查询 |

## 阶段一完成内容

本阶段完成了产品定位、用户分析、竞品分析、功能规划、页面规划、系统架构、AI Workflow、知识库设计、开发计划、项目目录、Git 规范、质量标准和风险分析。

## 建议 Git Commit

```text
docs: add phase one product architecture and delivery plan
```

## 下一阶段计划

确认阶段一方案后，第二阶段进入工程初始化。第二阶段只做项目基础，不开发复杂业务：创建 Next.js 项目，接入 TypeScript、TailwindCSS、shadcn/ui、基础布局、主题、路由、错误页、环境变量模板和代码规范。
