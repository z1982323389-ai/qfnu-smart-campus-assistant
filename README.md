# 曲智通 QFNU Smart Campus Assistant

曲智通是面向曲阜师范大学师生的 AI 校园办事与信息服务平台。它的核心定位不是聊天机器人、AI 搜索或校园百科，而是帮助用户理解政策、找到流程、准备材料、联系部门，并完成校园事务前的决策与准备。

## 当前阶段

项目已完成最终版：公开资料增强、构建验证和本地生产部署。

当前已具备 Next.js 工程骨架、基础路由、设计系统、深浅色主题、Loading、Toast、404、500、Error Boundary、健康检查接口、环境变量模板、可演示 UI 原型、统一 API 响应、限流、错误处理、AI 服务适配层、校园 Workflow、文件化知识库、轻量检索服务、知识库搜索 API、聊天页与知识库页真实联动、后台知识库配置雏形、公开资料增强，以及比赛交付材料。

## 文档索引

- `docs/product/PRD.md`：产品需求分析、用户分析、定位、功能规划、页面规划
- `docs/architecture/Architecture.md`：系统架构、AI Workflow、知识库、API、安全与部署方案
- `docs/api/API.md`：API 文档
- `docs/workflow/Workflow.md`：AI Workflow 文档
- `docs/knowledge-base/Knowledge-Base.md`：知识库维护文档
- `docs/knowledge-base/Official-Sources.md`：官方资料来源清单
- `docs/deployment/Deployment.md`：工程部署文档
- `docs/deployment/China-Deployment.md`：国内服务器部署说明
- `docs/planning/Development-Plan.md`：开发阶段、项目目录、Git 规范、质量标准、风险分析
- `docs/planning/Phase-2-Summary.md`：第二阶段工程初始化说明
- `docs/planning/Phase-3-Summary.md`：第三阶段 UI 精修说明
- `docs/planning/Phase-4-Summary.md`：第四阶段 AI 与 API 基础层说明
- `docs/planning/Phase-5-Summary.md`：第五阶段知识库基础建设说明
- `docs/planning/Phase-6-Summary.md`：第六阶段前端真实联动说明
- `docs/planning/Phase-7-Summary.md`：第七阶段后台配置雏形说明
- `docs/competition/Competition-Delivery-Plan.md`：比赛定位、作品亮点、答辩材料、演示脚本规划
- `docs/competition/Work-Description.md`：作品说明书
- `docs/competition/Deployment-Guide.md`：部署说明
- `docs/competition/Demo-Script.md`：演示脚本
- `docs/competition/Defense-Speech.md`：答辩讲稿
- `docs/competition/PPT-Outline.md`：答辩 PPT 大纲
- `docs/competition/Final-UI-Delivery.md`：最终 UI 交付说明
- `docs/competition/Final-Delivery-Index.md`：最终交付索引
- `CONTRIBUTING.md`：贡献与维护规范
- `LICENSE`：许可证
- `CHANGELOG.md`：项目变更记录

## 第一阶段结论

曲智通第一版应聚焦“校园办事咨询 + 新生指南 + 奖助学金 + 教务政策 + 图书馆服务 + 通知解读 + 部门联系方式 + FAQ”。项目不接入学校内部系统，不查询成绩、课表、校园卡、宿舍电费等受限数据。AI 回答基于公开资料、示例知识库、Workflow 与服务端适配层生成。

## 下一阶段

下一阶段建议根据比赛时间继续补充更多学院、部门和办事流程的官方公开资料。

## 本地运行

网络可用时执行：

```bash
npm install
npm run dev
```

构建验证：

```bash
npm run typecheck
npm run build
```

生产运行：

```bash
npm run start
```

当前已验证 `npm install`、`npm run typecheck`、`npm run build` 和本地生产服务启动。
