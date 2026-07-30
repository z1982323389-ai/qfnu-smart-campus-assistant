# 贡献规范

## 开发原则

曲智通坚持真实、轻量、可维护、可部署。任何新增功能都必须符合以下原则：

- 不接入未授权的学校内部系统。
- 不处理个人隐私数据。
- 不编造校园政策。
- 优先基于公开资料和知识库回答。
- 功能必须能在比赛现场稳定演示。

## 分支规范

推荐分支：

- `main`：稳定版本
- `develop`：开发集成
- `feature/*`：功能开发
- `fix/*`：问题修复
- `release/*`：发布准备

## Commit 规范

使用 Conventional Commits：

```text
feat: add knowledge search api
fix: handle empty chat response
docs: update deployment guide
refactor: split workflow module
test: add api validation tests
chore: update dependencies
```

## 知识库更新

新增资料前需要确认：

- 来源是否公开
- 是否包含个人隐私
- 分类是否正确
- 标签是否准确
- 是否标注更新时间和版本

## 安全边界

禁止提交：

- `.env`
- API Key
- 学号、手机号、身份证号等个人信息
- 学校内部系统数据
- 未公开文件
