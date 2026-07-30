import Link from "next/link";
import { PageShell } from "@/components/shared/page-shell";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { serviceModules } from "@/config/campus";

const items = [
  ["学生证补办", "校园办事咨询", "流程清晰，适合作为第一条演示问题"],
  ["奖学金申请", "奖助学金", "能展示政策解释与材料清单"],
  ["困难认定", "奖助学金", "能展示边界提醒和来源引用"],
  ["校历查询", "教务政策", "能展示公开资料检索"],
  ["图书馆服务", "图书馆服务", "适合新生和教师共同场景"],
  ["新生报到", "新生指南", "比赛评委容易理解"],
  ["部门电话", "部门联系方式", "体现办事导向"],
  ["通知解读", "校园通知解读", "最能体现 AI 理解能力"]
];

export default function PopularPage() {
  return (
    <PageShell
      eyebrow="热门办事"
      title="比赛演示优先打磨这些事项"
      description="热门办事用于快速进入高频场景，后续会与知识库和 AI Workflow 联动。"
    >
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {items.map(([title, module, reason]) => (
          <Card key={title} className="flex flex-col">
            <CardHeader>
              <Badge className="w-fit">高频</Badge>
              <CardTitle>{title}</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-1 flex-col justify-between gap-4">
              <div>
                <p className="text-sm text-muted-foreground">{module}</p>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{reason}</p>
              </div>
              <Button asChild variant="outline" className="w-full">
                <Link href="/chat">进入咨询</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="mt-8 rounded-3xl border bg-muted/40 p-6">
        <p className="text-sm font-medium text-primary">演示建议</p>
        <p className="mt-3 leading-7 text-muted-foreground">
          现场优先演示“学生证补办”“奖学金申请”“通知解读”三条链路，分别展示流程生成、政策解释和长文本理解能力。
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {serviceModules.slice(0, 6).map((module) => (
            <Badge key={module.slug}>{module.title}</Badge>
          ))}
        </div>
      </div>
    </PageShell>
  );
}
