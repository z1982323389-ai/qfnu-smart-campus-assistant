# Changelog

## v1.0.3-china-deployment

日期：2026-07-30

### Added

- 新增 `Dockerfile`，支持 Docker 部署。
- 新增 `.dockerignore`。
- 新增 `ecosystem.config.cjs`，支持 PM2 常驻运行。
- 新增 `deploy/nginx-qfnu-smart-campus.conf`，提供 Nginx 反向代理示例。
- 新增 `docs/deployment/China-Deployment.md`，说明国内云服务器部署方式。

### Changed

- Next.js 配置启用 `output: "standalone"`，便于服务器和 Docker 部署。
- README 和最终交付索引加入国内部署文档入口。

## v1.0.2-content-delivery-polish

日期：2026-07-29

### Changed

- 全面收紧交付口径，将“办理步骤、部门建议、正式上线”等表述调整为“核验步骤、咨询渠道、可演示扩展”。
- 修正知识库条目内容，避免把公开新闻或搜索结果表述为确定性政策依据。
- 修正 AI Workflow 默认回答，使其输出公开资料摘要、核验建议和边界提醒。
- 修正首页、聊天页、后台页、README、PRD、架构文档、答辩讲稿、PPT 大纲和演示脚本中的过度承诺表述。
- 最终交付索引补充“比赛演示与咨询辅助，不替代学校正式系统”的边界说明。

### Verification

- 已完成全局内容扫描，清理过度承诺和不稳表述。

## v1.0.1-final-ui-delivery

日期：2026-07-29

### Added

- 新增最终 UI 交付说明 `docs/competition/Final-UI-Delivery.md`。
- 聊天页新增自动示例回答、最近提问、可信边界和推荐追问。
- 知识库页新增自动检索、结果统计、匹配词和来源链接。
- 后台页新增官方来源链接和治理规则。
- 首页新增最终版统计和交付说明区块。

### Changed

- 优化 AI 聊天页布局、状态提示、来源引用和推荐交互。
- 优化知识库检索页结果卡片和分类筛选体验。
- 优化后台配置页资料管理展示。
- 更新 README 和最终交付索引。

### Verification

- `npm run typecheck` 通过。
- `npm run build` 通过。
- `npm run start` 已启动最终 UI 生产服务。
- `/api/health`、`/api/knowledge/search`、`/api/ai/chat` 已验证。

## v1.0.0-final-release

日期：2026-07-29

### Added

- 补充曲阜师范大学官网、教务处、学工处、图书馆等公开来源资料。
- 新增文件化知识库 Markdown 资料。
- 新增官方资料来源清单 `docs/knowledge-base/Official-Sources.md`。

### Changed

- 项目版本提升至 `1.0.0`。
- 健康检查接口版本同步为 `1.0.0`。
- 固定并瘦身 npm 依赖，提升安装和构建稳定性。
- 增强知识库中文检索逻辑，支持更稳定的中文短语命中。
- README 和最终交付索引更新为最终部署状态。

### Verification

- `npm install --no-audit --no-fund --registry=https://registry.npmmirror.com` 通过。
- `npm run typecheck` 通过。
- `npm run build` 通过。
- `npm run start` 已启动本地生产服务。
- `/api/health`、`/api/knowledge/search`、`/api/ai/chat` 已验证。

## v0.9.0-final-polish

日期：2026-07-29

### Added

- 新增 API 文档 `docs/api/API.md`。
- 新增 Workflow 文档 `docs/workflow/Workflow.md`。
- 新增知识库维护文档 `docs/knowledge-base/Knowledge-Base.md`。
- 新增工程部署文档 `docs/deployment/Deployment.md`。
- 新增 MIT 许可证 `LICENSE`。
- 新增贡献规范 `CONTRIBUTING.md`。

### Changed

- 更新最终交付索引，补充工程文档、许可证和贡献规范。
- 更新 README 文档索引和依赖安装说明。

### Verification

- 再次尝试 `npm install --no-audit --no-fund --registry=https://registry.npmmirror.com`，仍长时间无输出，判断为当前网络或 registry 连接阻塞。
- 已完成静态文件结构自查。

## v0.8.0-competition-delivery

日期：2026-07-29

### Added

- 新增作品说明书 `docs/competition/Work-Description.md`。
- 新增部署说明 `docs/competition/Deployment-Guide.md`。
- 新增演示脚本 `docs/competition/Demo-Script.md`。
- 新增答辩讲稿 `docs/competition/Defense-Speech.md`。
- 新增答辩 PPT 大纲 `docs/competition/PPT-Outline.md`。
- 新增最终交付索引 `docs/competition/Final-Delivery-Index.md`。

### Changed

- README 当前阶段更新为第八阶段完成。
- 项目从开发演示状态推进到比赛材料可提交状态。

### Verification

- 已检查比赛材料目录、代码目录、阶段文档目录和核心接口文件。
- 构建验证仍等待 npm 依赖安装恢复。

## v0.7.0-admin-preview

日期：2026-07-29

### Added

- 新增后台知识库管理组件 `components/admin/knowledge-admin-panel.tsx`。
- 后台页面展示真实示例知识条目、状态、版本、分类、标签和来源。
- 新增维护指标展示。
- 新增 Prompt 模板说明。
- 新增第七阶段完成说明 `docs/planning/Phase-7-Summary.md`。

### Changed

- `/admin` 页面从早期静态预览升级为知识库配置雏形。
- README 当前阶段更新为第七阶段完成。

### Verification

- 已检查后台组件、知识库数据引用和页面结构。
- 构建验证仍等待 npm 依赖安装恢复。

## v0.6.0-frontend-api-integration

日期：2026-07-29

### Added

- 新增前端 API 工具 `lib/client/api.ts`。
- 新增交互式聊天组件 `components/chat/chat-workspace.tsx`。
- 新增知识库搜索组件 `components/knowledge/knowledge-search-panel.tsx`。
- 新增第六阶段完成说明 `docs/planning/Phase-6-Summary.md`。

### Changed

- `/chat` 页面已接入 `/api/ai/chat`。
- `/knowledge` 页面已接入 `/api/knowledge/search`。
- README 当前阶段更新为第六阶段完成。

### Verification

- 已检查页面引用、客户端组件边界和 API 调用路径。
- 构建验证仍等待 npm 依赖安装恢复。

## v0.5.0-knowledge-base

日期：2026-07-29

### Added

- 新增文件化知识库目录 `content/knowledge-base`。
- 新增知识库目录说明文档。
- 新增知识库类型定义 `lib/knowledge/types.ts`。
- 新增示例知识条目 `lib/knowledge/sample-items.ts`。
- 新增轻量知识库检索服务 `lib/knowledge/search.ts`。
- 新增 `/api/knowledge/search` 搜索接口。
- 新增第五阶段完成说明 `docs/planning/Phase-5-Summary.md`。

### Changed

- 校园 Workflow 已接入知识库检索结果。
- AI 回答命中知识库时会返回来源标题、更新时间和知识库类型。
- README 当前阶段更新为第五阶段完成。

### Verification

- 已检查知识库分类、元数据、检索 API 和 Workflow 引用路径。
- 构建验证仍等待 npm 依赖安装恢复。

## v0.4.0-ai-api-foundation

日期：2026-07-29

### Added

- 新增统一 API 响应模块 `lib/api/response.ts`。
- 新增应用错误封装 `lib/api/errors.ts`。
- 新增内存限流模块 `lib/api/rate-limit.ts`。
- 新增 AI 类型定义 `lib/ai/types.ts`。
- 新增校园 Workflow `lib/workflow/campus-workflow.ts`。
- 新增 Coze 服务适配层 `lib/ai/coze-client.ts`。
- 新增 `/api/ai/chat` 接口，支持参数校验、限流、错误处理和演示级结构化回答。
- 新增第四阶段完成说明 `docs/planning/Phase-4-Summary.md`。

### Changed

- README 当前阶段更新为第四阶段完成。
- AI 调用策略调整为稳定优先：未配置密钥或服务异常时返回演示级答案。

### Verification

- 静态检查 API 文件结构、导入路径和产品边界。
- 构建验证仍等待 npm 依赖安装恢复。

## v0.3.0-ui-shell

日期：2026-07-29

### Added

- 新增统一校园服务数据源 `config/campus.ts`。
- 新增 `WorkflowPreview` 和 `ServiceModuleCard` 可复用组件。
- 首页新增模块预览、AI Workflow 链路和比赛价值说明。
- AI 聊天页升级为结构化办事答案原型。
- 办事大厅新增回答结构预览。
- 热门办事页新增演示价值说明。
- 知识库页新增知识条目示例和可信回答规则。
- 后台配置页新增知识库管理预览。
- 新增第三阶段完成说明 `docs/planning/Phase-3-Summary.md`。

### Changed

- README 当前阶段更新为第三阶段完成。
- 页面表达从普通应用骨架升级为比赛演示导向的产品原型。

### Verification

- 已做静态文件自查，修复图标数组和后台模块数组的 TypeScript 推断隐患。
- 依赖安装仍需在 npm 网络可用时重新执行。

## v0.2.0-project-bootstrap

日期：2026-07-29

### Added

- 创建 Next.js + TypeScript 工程骨架。
- 接入 TailwindCSS、shadcn/ui 配置、基础 UI 组件和路径别名。
- 新增首页、AI 聊天、校园办事大厅、热门办事、知识库介绍、帮助中心、关于我们、更新日志、后台配置页面。
- 新增全局布局、导航栏、页脚、深浅色主题切换。
- 新增 Loading、Toast、404、500、Global Error Boundary。
- 新增 `/api/health` 健康检查接口。
- 新增 `.env.example`，预留 Coze API 和限流配置。

### Verification

- Node.js 与 npm 环境已确认可用。
- 依赖安装过程长时间无输出，已停止等待；需要在网络或 npm registry 可用时重新执行 `npm install`、`npm run typecheck` 和 `npm run build`。

### Not included

- 本阶段未接入 Coze API。
- 本阶段未实现知识库检索。
- 本阶段未实现真实后台数据增删改查。
- 本阶段未接入学校内部系统或个人数据查询能力。

## v0.1.0-docs-phase-1

日期：2026-07-29

### Added

- 完成曲智通项目第一阶段产品方案。
- 新增产品需求文档，包含产品定位、用户分析、竞品分析、功能规划和页面规划。
- 新增系统架构方案，包含前端架构、后端架构、AI Workflow、知识库设计、安全和部署方案。
- 新增开发计划，包含阶段划分、推荐目录、Git 规范、质量标准、测试计划和风险分析。
- 新增比赛交付方案，包含作品简介、创新点、项目亮点、技术路线、应用价值、推广价值、答辩 PPT、讲稿和演示脚本规划。
- 新增项目 README，说明当前阶段、文档结构和下一阶段计划。

### Not included

- 本阶段未创建 Next.js 项目。
- 本阶段未编写前端、后端、AI 接口或部署代码。
- 本阶段未接入学校内部系统或任何个人数据查询能力。
