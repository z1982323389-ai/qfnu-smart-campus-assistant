import { Database, ExternalLink, FileText, Settings, ShieldCheck } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { knowledgeItems } from "@/lib/knowledge/sample-items";

const promptTemplates = [
  ["意图识别", "判断用户问题属于办事、新生、奖助、教务、图书馆、通知、联系方式、FAQ 或拒答范围。"],
  ["知识库回答", "只基于命中的知识库资料生成结构化答案，并显示来源。"],
  ["拒答机制", "遇到成绩、课表、校园卡余额、宿舍电费、个人审批进度等问题时拒答并引导官方渠道。"]
];

export function KnowledgeAdminPanel() {
  const activeItems = knowledgeItems.filter((item) => item.status === "active");
  const officialSources = knowledgeItems.filter((item) => item.sourceType === "web");

  return (
    <div className="mt-8 grid gap-4 lg:grid-cols-[1fr_360px]">
      <Card>
        <CardHeader className="border-b bg-gradient-to-r from-primary/10 via-background to-accent/10">
          <CardTitle>知识库条目管理</CardTitle>
          <p className="text-sm leading-6 text-muted-foreground">展示当前可参与 AI 回答的公开资料条目，后续可升级为真实后台增删改查。</p>
        </CardHeader>
        <CardContent className="space-y-3">
          {knowledgeItems.map((item) => (
            <div key={item.id} className="rounded-3xl border bg-background p-4 transition hover:border-primary/40">
              <div className="grid gap-3 md:grid-cols-[1fr_auto] md:items-start">
                <div>
                  <p className="font-medium">{item.title}</p>
                  <p className="mt-1 text-sm leading-6 text-muted-foreground">{item.sourceName}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge>{item.status === "active" ? "启用" : item.status}</Badge>
                  <Badge>{item.version}</Badge>
                </div>
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                <Badge>{item.category}</Badge>
                <Badge>{item.updatedAt}</Badge>
                {item.tags.map((tag) => (
                  <Badge key={tag}>{tag}</Badge>
                ))}
              </div>
              {item.sourceUrl ? (
                <a
                  href={item.sourceUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-flex items-center gap-2 rounded-full border bg-muted/40 px-3 py-1.5 text-xs text-muted-foreground transition hover:border-primary hover:text-foreground"
                >
                  查看官方来源
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              ) : null}
            </div>
          ))}
        </CardContent>
      </Card>
      <div className="space-y-4">
        <Card>
          <CardHeader>
            <Database className="h-5 w-5 text-primary" />
            <CardTitle>维护指标</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-3 text-sm text-muted-foreground">
            <Metric label="知识条目" value={`${knowledgeItems.length}`} />
            <Metric label="启用条目" value={`${activeItems.length}`} />
            <Metric label="资料分类" value={`${new Set(knowledgeItems.map((item) => item.category)).size}`} />
            <Metric label="官方来源" value={`${officialSources.length}`} />
          </CardContent>
        </Card>
        <Card className="border-primary/20 bg-primary/5">
          <CardHeader>
            <ShieldCheck className="h-5 w-5 text-primary" />
            <CardTitle>治理规则</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm leading-6 text-muted-foreground">
            <p>只收录公开资料，不录入个人隐私和内部系统数据。</p>
            <p>来源失效或政策过期时，应先归档旧条目，再发布新版本。</p>
            <p>AI 回答应优先显示来源，无法确认时进入拒答或官方渠道引导。</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <Settings className="h-5 w-5 text-primary" />
            <CardTitle>Prompt 模板</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {promptTemplates.map(([title, desc]) => (
              <div key={title} className="rounded-2xl border bg-background p-3">
                <div className="flex items-center gap-2">
                  <FileText className="h-4 w-4 text-primary" />
                  <p className="text-sm font-medium">{title}</p>
                </div>
                <p className="mt-2 text-xs leading-5 text-muted-foreground">{desc}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between rounded-2xl border bg-background p-3">
      <span>{label}</span>
      <span className="font-semibold text-foreground">{value}</span>
    </div>
  );
}
