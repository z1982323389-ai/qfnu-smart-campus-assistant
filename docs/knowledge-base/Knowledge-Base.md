# 曲智通知识库维护文档

## 目标

知识库用于支撑曲智通的可信回答。AI 不应凭空生成校园政策，而应基于知识库资料生成流程、材料、注意事项和来源引用。

## 当前实现

当前项目采用轻量文件化知识库：

- 示例数据：`lib/knowledge/sample-items.ts`
- 类型定义：`lib/knowledge/types.ts`
- 检索服务：`lib/knowledge/search.ts`
- 文件目录：`content/knowledge-base`

## 支持资料类型

- Markdown
- PDF
- Word
- TXT
- Web 公开页面

当前阶段优先使用 Markdown 和结构化元数据。PDF、Word、TXT 可在后续通过转换工具提取文本后入库。

## 分类规范

| 分类 | 说明 |
|---|---|
| `campus-services` | 校园办事咨询 |
| `freshman-guide` | 新生指南 |
| `scholarships` | 奖助学金 |
| `academic-affairs` | 教务政策 |
| `library` | 图书馆服务 |
| `notices` | 校园通知解读 |
| `departments` | 部门联系方式 |
| `faq` | 高频问题 |

## 元数据规范

每条知识条目需要包含：

| 字段 | 说明 |
|---|---|
| `id` | 唯一标识 |
| `title` | 标题 |
| `category` | 分类 |
| `tags` | 标签 |
| `audience` | 适用对象 |
| `campus` | 校区范围 |
| `sourceType` | 来源类型 |
| `sourceName` | 来源名称 |
| `sourceUrl` | 来源链接 |
| `version` | 版本 |
| `updatedAt` | 更新时间 |
| `status` | 状态 |
| `content` | 正文 |

## 状态规范

| 状态 | 说明 |
|---|---|
| `draft` | 草稿，不参与回答 |
| `active` | 启用，可参与检索 |
| `archived` | 归档，不参与回答 |

## 更新流程

1. 收集学校或学院公开资料。
2. 判断资料是否属于公开信息。
3. 提取标题、来源、发布时间和正文。
4. 标注分类、标签、适用对象和校区范围。
5. 添加或更新知识条目。
6. 将状态设为 `active`。
7. 使用 `/knowledge` 页面检索验证。
8. 使用 `/chat` 页面提问验证 AI 回答。

## 不收录内容

- 个人成绩
- 个人课表
- 校园卡余额
- 宿舍电费
- 个人审批进度
- 身份证号、学号、手机号等敏感信息
- 未公开的内部系统数据

## 后续扩展

可以继续扩展：

- Markdown 文件自动解析
- PDF / Word 文本提取
- 后台增删改查
- 向量检索
- 多来源版本对比
- 资料过期提醒
