# 第四阶段完成说明

## 当前目标

第四阶段目标是建立 AI 与 API 基础层，让前端后续可以通过统一接口调用校园 AI 能力。此阶段不建设真实知识库，也不承诺 Coze API 已完成最终业务解析，而是先完成服务端封装、请求校验、限流、错误处理和演示级 Workflow。

## 为什么这样设计

AI 能力必须放在服务端，不能让 API Key 暴露到前端。统一响应、统一错误和统一限流需要先完成，否则后续接知识库、Coze、日志和后台时会产生大量重复逻辑。演示级 Workflow 可以在无密钥或 AI 服务异常时保证比赛演示链路不中断。

## 完成内容

- 新增 `lib/api/response.ts`，统一成功与失败响应结构，并生成请求 ID。
- 新增 `lib/api/errors.ts`，提供应用错误类型和异常转换。
- 新增 `lib/api/rate-limit.ts`，提供基于 IP 的内存限流。
- 新增 `lib/ai/types.ts`，定义聊天消息、校园意图、来源引用和结构化回答类型。
- 新增 `lib/workflow/campus-workflow.ts`，实现演示级意图识别、拒答机制和结构化回答生成。
- 新增 `lib/ai/coze-client.ts`，封装 Coze API 适配层；未配置密钥或调用失败时返回演示级答案。
- 新增 `/api/ai/chat` Route Handler，支持 Zod 参数校验、限流、统一响应和错误包装。

## 当前接口

请求：

```http
POST /api/ai/chat
Content-Type: application/json
```

请求体：

```json
{
  "message": "学生证丢了怎么办？",
  "history": []
}
```

响应会返回：

- `intent`：校园意图
- `title`：回答标题
- `summary`：摘要
- `steps`：核验步骤或建议步骤
- `materials`：材料提示
- `departmentHint`：咨询渠道建议
- `cautions`：注意事项
- `sources`：来源引用
- `recommendations`：相关推荐
- `isDemo`：是否为演示级回答

## 自查结果

- API Key 只在服务端读取，前端无敏感信息。
- `/api/ai/chat` 已具备限流和参数校验。
- 内部系统和个人数据问题会进入拒答路径。
- Coze 未配置时不会导致接口失败，会返回演示级结构化答案。
- 依赖安装仍受 npm 网络状态影响，需网络正常后运行安装、类型检查和构建。

## Git Commit

当前环境未识别到 `git` 命令，无法实际提交。建议后续执行：

```bash
git checkout -b feature/ai-api-foundation
git add .
git commit -m "feat: add ai api foundation and campus workflow"
```

## 下一阶段计划

第五阶段将进入知识库基础建设。目标是建立文件化知识库目录、知识条目元数据、检索 API、示例校园资料和引用返回结构，让 AI 回答从演示级逐步过渡到基于资料的可信回答。
