# 曲智通最终交付索引

## 项目代码

- `app`：Next.js 页面、API Route Handler、错误页和布局
- `components`：UI 组件、页面组件、后台组件、聊天组件、知识库组件
- `config`：站点配置和校园服务模块数据
- `lib`：API 基础层、AI 适配层、Workflow、知识库检索、前端请求工具
- `content/knowledge-base`：文件化知识库目录
- `LICENSE`：开源许可证
- `CONTRIBUTING.md`：贡献与维护规范

## 核心页面

- `/`：首页
- `/chat`：AI 校园事务咨询
- `/services`：校园办事大厅
- `/popular`：热门办事
- `/knowledge`：知识库介绍与实时检索
- `/help`：帮助中心
- `/about`：关于我们
- `/changelog`：更新日志
- `/admin`：后台配置

## 核心接口

- `GET /api/health`
- `POST /api/ai/chat`
- `POST /api/knowledge/search`

## 产品与工程文档

- `docs/product/PRD.md`
- `docs/architecture/Architecture.md`
- `docs/api/API.md`
- `docs/workflow/Workflow.md`
- `docs/knowledge-base/Knowledge-Base.md`
- `docs/knowledge-base/Official-Sources.md`
- `docs/deployment/Deployment.md`
- `docs/deployment/China-Deployment.md`
- `docs/planning/Development-Plan.md`
- `docs/planning/Phase-2-Summary.md`
- `docs/planning/Phase-3-Summary.md`
- `docs/planning/Phase-4-Summary.md`
- `docs/planning/Phase-5-Summary.md`
- `docs/planning/Phase-6-Summary.md`
- `docs/planning/Phase-7-Summary.md`

## 比赛材料

- `docs/competition/Competition-Delivery-Plan.md`
- `docs/competition/Work-Description.md`
- `docs/competition/Deployment-Guide.md`
- `docs/competition/Demo-Script.md`
- `docs/competition/Defense-Speech.md`
- `docs/competition/PPT-Outline.md`
- `docs/competition/Final-UI-Delivery.md`
- `docs/competition/Final-Delivery-Index.md`

## 演示推荐路径

```text
首页 → AI 聊天 → 知识库检索 → 办事大厅 → 后台配置
```

## 推荐演示问题

- 学生证丢了怎么办？
- 奖学金需要哪些材料？
- 新生报到要注意什么？
- 图书馆电子资源怎么使用？
- 帮我查一下成绩

最后一个问题用于展示拒答机制和数据边界。

## 当前限制

- 当前未完成真实 Coze Workflow 编排，只完成服务端适配层和演示级 Workflow。
- 当前知识库已补充部分学校公开资料，后续仍可继续扩充更多学院和部门页面。
- 当前后台为配置雏形，不含数据库持久化和登录权限。
- 当前已完成依赖安装、类型检查、生产构建和本地生产服务启动验证。
- 当前版本定位为比赛演示与咨询辅助，不替代学校任何正式业务系统或部门解释。

## 构建前命令

```bash
npm install
npm run typecheck
npm run build
npm run start
```

当前本地生产服务地址：

```text
http://localhost:3000
```
