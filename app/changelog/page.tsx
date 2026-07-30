import { PageShell } from "@/components/shared/page-shell";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ChangelogPage() {
  return (
    <PageShell
      eyebrow="更新日志"
      title="项目持续维护记录"
      description="更新日志用于向评委和后续维护者展示项目版本演进。"
    >
      <Card>
        <CardHeader>
          <CardTitle>v0.2.0 · 工程初始化</CardTitle>
        </CardHeader>
        <CardContent className="leading-7 text-muted-foreground">
          完成 Next.js 工程骨架、基础路由、设计系统、深浅色主题、错误页、环境变量模板和健康检查接口。
        </CardContent>
      </Card>
    </PageShell>
  );
}
