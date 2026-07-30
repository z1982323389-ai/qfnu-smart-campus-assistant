# 曲智通工程部署文档

## 本地开发

安装依赖：

```bash
npm install
```

启动开发服务器：

```bash
npm run dev
```

访问：

```text
http://localhost:3000
```

## 构建

类型检查：

```bash
npm run typecheck
```

生产构建：

```bash
npm run build
```

启动生产服务：

```bash
npm run start
```

## 环境变量

创建 `.env.local`：

```powershell
Copy-Item .env.example .env.local
```

变量说明：

| 变量 | 说明 |
|---|---|
| `COZE_API_KEY` | Coze API Key |
| `COZE_BOT_ID` | Coze Bot ID |
| `COZE_API_BASE_URL` | Coze API 地址 |
| `NEXT_PUBLIC_APP_NAME` | 应用名称 |
| `NEXT_PUBLIC_APP_URL` | 应用访问地址 |
| `AI_RATE_LIMIT_PER_MINUTE` | AI 接口每分钟限流 |

## Vercel 部署

1. 推送代码到 Git 仓库。
2. 在 Vercel 导入仓库。
3. 选择 Next.js 框架。
4. 配置环境变量。
5. 部署。

构建命令：

```text
npm run build
```

## 运行检查

部署后检查：

- `/`
- `/chat`
- `/knowledge`
- `/services`
- `/admin`
- `/api/health`

## 故障处理

### npm install 长时间无输出

可能原因：

- npm registry 无法访问
- 网络代理异常
- 校园网限制
- DNS 解析异常

可尝试：

```bash
npm install --no-audit --no-fund
```

或切换 registry：

```bash
npm config set registry https://registry.npmmirror.com
npm install
```

### AI 无真实回答

如果未配置 Coze API Key，系统会返回演示级结构化答案。这是设计行为，用于保证比赛演示链路不中断。

### 知识库无结果

检查：

- 查询关键词是否过窄
- 知识条目状态是否为 `active`
- 分类是否选择错误
- 示例数据是否存在于 `lib/knowledge/sample-items.ts`
