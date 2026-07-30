# 曲智通部署说明

## 环境要求

- Node.js 18.18 或更高版本
- npm 9 或更高版本
- 可访问 npm registry 的网络环境
- 可选：Vercel 账号

## 本地运行

在项目根目录执行：

```bash
npm install
npm run dev
```

默认访问：

```text
http://localhost:3000
```

健康检查：

```text
http://localhost:3000/api/health
```

## 环境变量

复制 `.env.example` 为 `.env.local`：

```bash
cp .env.example .env.local
```

Windows PowerShell 可手动复制文件，或执行：

```powershell
Copy-Item .env.example .env.local
```

当前环境变量：

```text
COZE_API_KEY=
COZE_BOT_ID=
COZE_API_BASE_URL=https://api.coze.cn
NEXT_PUBLIC_APP_NAME=曲智通
NEXT_PUBLIC_APP_URL=http://localhost:3000
AI_RATE_LIMIT_PER_MINUTE=20
```

如果未配置 Coze API Key，系统仍会返回演示级结构化答案，保证比赛演示链路可用。

## 构建检查

```bash
npm run typecheck
npm run build
```

如果 `npm install` 长时间无输出，请检查：

- npm registry 是否可访问
- 网络代理是否正确
- 是否存在公司或校园网限制
- 是否需要切换到稳定镜像源

## Vercel 部署

推荐部署方式：

1. 将项目推送到 Git 仓库。
2. 在 Vercel 中导入项目。
3. Framework Preset 选择 Next.js。
4. 配置环境变量。
5. 执行部署。

Vercel 构建命令：

```text
npm run build
```

输出目录保持默认即可。

## 演示前检查

演示前需要确认：

- 首页可打开
- `/chat` 可以提交问题并返回回答
- `/knowledge` 可以检索“学生证补办”
- `/admin` 可以展示知识库条目和 Prompt 模板
- `/api/health` 返回 `success: true`
- 移动端布局没有明显溢出
- 深色模式可以切换

## 备用方案

如果现场网络不稳定：

- 使用本地运行版本演示
- 使用未配置 Coze Key 的演示级答案
- 准备截图或录屏作为备用材料
- 优先演示首页、聊天页、知识库页和后台页

## 安全说明

项目不会在前端暴露 Coze API Key。所有敏感配置均通过服务端环境变量读取。项目不接入学校内部系统，不查询个人成绩、课表、校园卡余额、宿舍电费或审批进度。
