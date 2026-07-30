# 曲智通 API 文档

## 统一响应格式

所有 API 均返回统一结构。

成功响应：

```json
{
  "success": true,
  "data": {},
  "meta": {
    "requestId": "qsa_xxx",
    "timestamp": "2026-07-29T00:00:00.000Z"
  }
}
```

失败响应：

```json
{
  "success": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "请求参数不正确。",
    "detail": "..."
  },
  "meta": {
    "requestId": "qsa_xxx",
    "timestamp": "2026-07-29T00:00:00.000Z"
  }
}
```

## 健康检查

```http
GET /api/health
```

用途：检查服务是否正常。

成功响应：

```json
{
  "success": true,
  "data": {
    "service": "qfnu-smart-campus-assistant",
    "status": "ok",
    "version": "0.2.0"
  }
}
```

## AI 聊天

```http
POST /api/ai/chat
Content-Type: application/json
```

用途：接收校园事务问题，返回结构化 AI 回答。

请求体：

```json
{
  "message": "学生证丢了怎么办？",
  "history": []
}
```

字段说明：

| 字段 | 类型 | 必填 | 说明 |
|---|---|---|---|
| `message` | string | 是 | 用户问题，最长 2000 字 |
| `history` | array | 否 | 最近对话历史，最多 12 条 |

响应字段：

| 字段 | 说明 |
|---|---|
| `intent` | 校园意图 |
| `title` | 回答标题 |
| `summary` | 摘要 |
| `steps` | 核验步骤或建议步骤 |
| `materials` | 材料提示 |
| `departmentHint` | 咨询渠道建议 |
| `cautions` | 注意事项 |
| `sources` | 来源引用 |
| `recommendations` | 推荐问题 |
| `isDemo` | 是否为演示级回答 |

支持意图：

- `campus_service`
- `freshman_guide`
- `scholarship`
- `academic_affairs`
- `library`
- `notice`
- `department`
- `faq`
- `out_of_scope`

## 知识库搜索

```http
POST /api/knowledge/search
Content-Type: application/json
```

用途：检索文件化知识库。

请求体：

```json
{
  "query": "学生证补办",
  "category": "campus-services",
  "limit": 5
}
```

字段说明：

| 字段 | 类型 | 必填 | 说明 |
|---|---|---|---|
| `query` | string | 是 | 检索关键词，最长 500 字 |
| `category` | string | 否 | 知识库分类 |
| `limit` | number | 否 | 返回数量，1 到 20 |

分类枚举：

- `campus-services`
- `freshman-guide`
- `scholarships`
- `academic-affairs`
- `library`
- `notices`
- `departments`
- `faq`

响应字段：

| 字段 | 说明 |
|---|---|
| `results` | 命中条目 |
| `total` | 命中数量 |
| `score` | 轻量评分 |
| `matchedKeywords` | 命中关键词 |

## 错误码

| 错误码 | 含义 |
|---|---|
| `VALIDATION_ERROR` | 请求参数错误 |
| `RATE_LIMITED` | 请求过于频繁 |
| `INTERNAL_ERROR` | 服务端异常 |
| `UNKNOWN_ERROR` | 未知异常 |

## 安全说明

- AI API Key 只在服务端读取。
- 前端不直接调用 Coze API。
- `/api/ai/chat` 已接入限流。
- 对成绩、课表、校园卡余额、宿舍电费、个人审批进度等问题触发拒答。
