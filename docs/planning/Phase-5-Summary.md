# 第五阶段完成说明

## 当前目标

第五阶段目标是建立轻量知识库基础，让曲智通从纯演示回答升级为能够引用示例资料的校园事务问答。此阶段仍不引入数据库，优先使用文件化知识库和结构化元数据，符合比赛“轻量化、可落地、可维护”的要求。

## 为什么这样设计

首版项目不应把复杂度放在数据库、爬虫或权限系统上。文件化知识库更容易被团队维护，也更适合比赛现场展示。通过统一元数据、检索服务和搜索 API，后续可以平滑替换为向量检索或后台管理数据库。

## 完成内容

- 创建 `content/knowledge-base` 分类目录。
- 新增知识库说明文档 `content/knowledge-base/README.md`。
- 新增知识库类型定义 `lib/knowledge/types.ts`。
- 新增示例知识条目 `lib/knowledge/sample-items.ts`。
- 新增轻量检索服务 `lib/knowledge/search.ts`。
- 新增 `/api/knowledge/search` 搜索接口。
- 修改校园 Workflow，使 AI 回答可以引用知识库检索结果。
- 命中知识库时，回答会返回来源标题、更新时间和知识库类型。
- 未命中知识库时，仍保留演示级结构化回答，避免演示链路中断。

## 当前知识库分类

```text
campus-services
freshman-guide
scholarships
academic-affairs
library
notices
departments
faq
```

## 当前接口

请求：

```http
POST /api/knowledge/search
Content-Type: application/json
```

请求体：

```json
{
  "query": "学生证补办",
  "category": "campus-services",
  "limit": 5
}
```

响应返回：

- `results`：知识库命中结果
- `total`：命中数量
- `score`：轻量评分
- `matchedKeywords`：命中关键词

## 自查结果

- 知识库只收录公开资料示例，不包含任何个人隐私或内部系统数据。
- 检索服务支持分类过滤和结果数量限制。
- AI Workflow 已接入知识库检索结果。
- 命中来源时 `isDemo` 会变为 `false`。
- 仍需在依赖安装恢复后运行类型检查和构建。

## Git Commit

当前环境未识别到 `git` 命令，无法实际提交。建议后续执行：

```bash
git checkout -b feature/knowledge-base
git add .
git commit -m "feat: add lightweight knowledge base search"
```

## 下一阶段计划

第六阶段将进入前端真实联动。目标是让 AI 聊天页调用 `/api/ai/chat`，让知识库页调用 `/api/knowledge/search`，并完善 Loading、错误提示、空状态和来源展示。
