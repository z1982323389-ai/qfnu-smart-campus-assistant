import { PageShell } from "@/components/shared/page-shell";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function HelpPage() {
  return (
    <PageShell
      eyebrow="帮助中心"
      title="如何使用曲智通"
      description="你可以直接描述校园事务，也可以从办事大厅进入具体场景。系统会在后续阶段接入来源引用和相关推荐。"
    >
      <div className="grid gap-4 md:grid-cols-3">
        {[
          ["问清楚", "尽量说明你的身份和场景，例如新生、本科生、研究生或教师。"],
          ["看来源", "涉及政策和通知时，以系统展示的公开来源和学校最新通知为准。"],
          ["知边界", "系统不会查询成绩、课表、校园卡余额、宿舍电费等个人数据。"]
        ].map(([title, desc]) => (
          <Card key={title}>
            <CardHeader>
              <CardTitle>{title}</CardTitle>
            </CardHeader>
            <CardContent className="leading-7 text-muted-foreground">{desc}</CardContent>
          </Card>
        ))}
      </div>
    </PageShell>
  );
}
