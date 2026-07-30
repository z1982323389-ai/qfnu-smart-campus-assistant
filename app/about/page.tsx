import { PageShell } from "@/components/shared/page-shell";
import { Card, CardContent } from "@/components/ui/card";
import { siteConfig } from "@/config/site";

export default function AboutPage() {
  return (
    <PageShell
      eyebrow="关于我们"
      title={siteConfig.englishName}
      description="曲智通面向曲阜师范大学首届 AI 应用创新开发大赛，目标是交付一个真实可部署、可演示、可持续维护的校园 AI 产品。"
    >
      <Card>
        <CardContent className="space-y-4 p-6 leading-8 text-muted-foreground">
          <p>
            项目坚持公开资料优先，不接入学校内部数据库，不处理个人隐私数据。首版重点让师生更快理解政策、找到流程、准备材料并联系正确部门。
          </p>
          <p>
            后续版本将在获得正式授权的前提下，评估与学校内部系统的安全对接可能。在此之前，曲智通只做可信的信息服务和办事前引导。
          </p>
        </CardContent>
      </Card>
    </PageShell>
  );
}
