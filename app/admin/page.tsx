import { Database, FileText, Settings, type LucideIcon } from "lucide-react";
import { KnowledgeAdminPanel } from "@/components/admin/knowledge-admin-panel";
import { PageShell } from "@/components/shared/page-shell";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const adminModules: Array<{ title: string; desc: string; icon: LucideIcon }> = [
  { title: "知识条目", desc: "维护公开资料、分类、标签、来源和版本。", icon: FileText },
  { title: "Prompt 配置", desc: "管理意图识别、回答生成和拒答模板。", icon: Settings },
  { title: "运行日志", desc: "查看 AI 请求耗时、错误类型和健康状态。", icon: Database }
];

export default function AdminPage() {
  return (
    <PageShell
      eyebrow="后台配置"
      title="轻量后台证明项目可维护"
      description="首版后台聚焦知识库和 Prompt 维护，不做复杂权限系统，优先证明项目具备持续更新能力。"
    >
      <div className="grid gap-4 md:grid-cols-3">
        {adminModules.map((item) => (
          <Card key={item.title}>
            <CardHeader>
              <Badge className="w-fit">规划中</Badge>
              <item.icon className="h-6 w-6 text-primary" />
              <CardTitle>{item.title}</CardTitle>
            </CardHeader>
            <CardContent className="leading-7 text-muted-foreground">{item.desc}</CardContent>
          </Card>
        ))}
      </div>
      <KnowledgeAdminPanel />
    </PageShell>
  );
}
