# 国内部署说明

## 推荐方案

由于曲智通包含服务端 API，例如 `/api/ai/chat` 和 `/api/knowledge/search`，不建议只用普通静态托管。国内最稳的交付方式是：

```text
云服务器 + Node.js + PM2 + Nginx
```

可选服务器：

- 腾讯云轻量应用服务器
- 阿里云 ECS
- 华为云 Flexus / ECS
- 校园内网服务器

## 服务器要求

推荐配置：

```text
CPU：1 核及以上
内存：1GB 及以上，推荐 2GB
系统：Ubuntu 22.04 LTS
Node.js：20 LTS
端口：80、443、3000
```

## 上传项目

将项目上传到服务器，例如：

```bash
/www/wwwroot/qfnu-smart-campus-assistant
```

如果使用宝塔面板，也可以直接把项目压缩包上传到网站目录后解压。

## 安装依赖

进入项目目录：

```bash
cd /www/wwwroot/qfnu-smart-campus-assistant
```

安装依赖：

```bash
npm install --no-audit --no-fund --registry=https://registry.npmmirror.com
```

## 构建项目

```bash
npm run build
```

## PM2 启动

安装 PM2：

```bash
npm install -g pm2 --registry=https://registry.npmmirror.com
```

启动项目：

```bash
pm2 start ecosystem.config.cjs
```

保存进程：

```bash
pm2 save
pm2 startup
```

查看状态：

```bash
pm2 list
pm2 logs qfnu-smart-campus-assistant
```

## Nginx 反向代理

项目已提供示例配置：

```text
deploy/nginx-qfnu-smart-campus.conf
```

需要把其中的：

```text
your-domain.com
```

改成你的真实域名。

核心代理目标是：

```text
http://127.0.0.1:3000
```

如果使用宝塔面板：

1. 新建 Node 项目或普通网站。
2. 网站域名填写你的域名。
3. 反向代理到 `http://127.0.0.1:3000`。
4. 申请 SSL 证书。

## Docker 部署

项目已提供 `Dockerfile`。

构建镜像：

```bash
docker build -t qfnu-smart-campus-assistant .
```

运行容器：

```bash
docker run -d \
  --name qfnu-smart-campus-assistant \
  -p 3000:3000 \
  --restart unless-stopped \
  qfnu-smart-campus-assistant
```

然后使用 Nginx 反向代理到：

```text
http://127.0.0.1:3000
```

## 环境变量

当前比赛演示版不强依赖真实 AI Key。如果后续接入真实 Coze API，可在服务器中配置：

```bash
COZE_API_KEY=你的 Coze API Key
COZE_BOT_ID=你的 Bot ID
COZE_BASE_URL=https://api.coze.cn
```

如果没有配置，系统仍可使用演示级 Workflow 和本地知识库完成演示。

## 验证地址

部署后访问：

```text
http://服务器IP
https://你的域名
```

接口验证：

```bash
curl http://127.0.0.1:3000/api/health
```

应返回 `success: true` 和服务状态。

## 比赛现场建议

国内网络下，建议同时准备：

- 国内服务器线上地址
- 本机 `http://localhost:3000`
- Vercel 地址作为备用
- 演示录屏或截图

这样即使现场网络不稳定，也不会影响答辩展示。
