import { PageShell } from "@/components/shared/page-shell";
import { ServiceModuleCard } from "@/components/shared/service-module-card";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { serviceModules } from "@/config/campus";

export default function ServicesPage() {
  return (
    <PageShell
      eyebrow="校园办事大厅"
      title="按场景找到校园事务入口"
      description="首版聚焦八个高频模块，先把公开资料办事链路做稳，再扩展更多场景。"
    >
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {serviceModules.map((module) => (
          <ServiceModuleCard key={module.slug} module={module} />
        ))}
      </div>
      <Card className="mt-8">
        <CardHeader>
          <CardTitle>模块回答结构预览</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4 md:grid-cols-2">
          {serviceModules.slice(0, 4).map((module) => (
            <div key={module.slug} className="rounded-3xl border bg-background p-4">
              <p className="font-medium">{module.title}</p>
              <div className="mt-3 flex flex-wrap gap-2 text-xs text-muted-foreground">
                {module.answerShape.map((shape) => (
                  <span key={shape} className="rounded-full bg-muted px-3 py-1">
                    {shape}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </PageShell>
  );
}
