import { KnowledgeSearchPanel } from "@/components/knowledge/knowledge-search-panel";
import { PageShell } from "@/components/shared/page-shell";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { serviceModules } from "@/config/campus";

const rules = [
  ["资料类型", "支持 Markdown、PDF、Word、TXT，后续统一转换为可检索文本。"],
  ["分类标签", "按办事、奖助、教务、图书馆、通知、部门、FAQ 分类。"],
  ["来源引用", "回答尽量显示来源名称、公开链接、更新时间和版本。"],
  ["更新机制", "后台维护知识条目状态，保留草稿、启用和停用。"]
];

export default function KnowledgePage() {
  return (
    <PageShell
      eyebrow="知识库介绍"
      title="可信回答来自可维护的资料库"
      description="曲智通不会凭空生成校园政策，首版以公开资料和人工维护知识库作为回答依据。"
    >
      <div className="grid gap-4 md:grid-cols-2">
        {rules.map(([title, desc]) => (
          <Card key={title}>
            <CardHeader>
              <CardTitle>{title}</CardTitle>
            </CardHeader>
            <CardContent className="leading-7 text-muted-foreground">{desc}</CardContent>
          </Card>
        ))}
      </div>
      <div className="mt-8 grid gap-4 lg:grid-cols-[1fr_360px]">
        <Card>
          <CardHeader>
            <CardTitle>知识条目示例</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {serviceModules.slice(0, 5).map((module) => (
              <div key={module.slug} className="rounded-3xl border bg-background p-4">
                <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                  <div>
                    <p className="font-medium">{module.title}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{module.source}</p>
                  </div>
                  <Badge>v0.1</Badge>
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {module.tags.map((tag) => (
                    <Badge key={tag}>{tag}</Badge>
                  ))}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>可信回答规则</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm leading-6 text-muted-foreground">
            <p>有来源时，回答显示资料名称、分类、更新时间和引用片段。</p>
            <p>无来源时，系统不编造政策，改为提示用户联系公开部门或查看学校官网。</p>
            <p>涉及成绩、课表、校园卡、电费和个人审批进度时，触发拒答机制。</p>
          </CardContent>
        </Card>
      </div>
      <KnowledgeSearchPanel />
    </PageShell>
  );
}
