import Link from "next/link";
import { ArrowRight, BookOpen, CheckCircle2, GraduationCap, MessageSquareText, ShieldCheck, type LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { coreModules, siteConfig } from "@/config/site";

const featureCards: Array<{ icon: LucideIcon; label: string }> = [
  { icon: GraduationCap, label: "新生指南" },
  { icon: BookOpen, label: "图书馆服务" },
  { icon: ShieldCheck, label: "可信来源" },
  { icon: MessageSquareText, label: "通知解读" }
];

export function HeroSection() {
  return (
    <section className="hero-grid relative overflow-hidden">
      <div className="container grid gap-10 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:py-28">
        <div className="flex flex-col justify-center">
          <Badge className="mb-5 w-fit">智创曲园 · 应用驱动新突破</Badge>
          <h1 className="max-w-4xl text-4xl font-semibold tracking-tight md:text-6xl">
            {siteConfig.name}
            <span className="block text-primary">AI 校园办事平台</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
            面向曲阜师范大学师生，基于公开资料、知识库和 AI Workflow，把政策、通知和办事说明转化为可追溯的流程、材料提示和部门引导。
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/chat">
                问一句校园事务
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/services">浏览办事大厅</Link>
            </Button>
          </div>
          <div className="mt-8 grid max-w-2xl gap-3 text-sm text-muted-foreground sm:grid-cols-3">
            {["不查个人数据", "引用公开来源", "适合继续扩展"].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                {item}
              </div>
            ))}
          </div>
        </div>
        <Card className="bg-card/85 backdrop-blur-xl">
          <CardContent className="p-6">
            <div className="rounded-3xl border bg-background p-4">
              <div className="mb-4 flex items-center gap-2 text-sm text-muted-foreground">
                <MessageSquareText className="h-4 w-4" />
                AI 校园办事助手
              </div>
              <div className="space-y-3">
                <div className="rounded-2xl bg-muted p-4 text-sm">学生证丢了，应该怎么补办？</div>
                <div className="rounded-2xl bg-primary p-4 text-sm leading-6 text-primary-foreground">
                  可以先核验公开要求，再查看材料提示并确认咨询渠道。回答将包含核验步骤、材料提示、注意事项和来源引用。
                </div>
              </div>
            </div>
            <div className="mt-5 grid grid-cols-2 gap-3">
              {featureCards.map((item) => (
                <div key={item.label} className="rounded-2xl border bg-background p-4">
                  <item.icon className="mb-3 h-5 w-5 text-primary" />
                  <p className="text-sm font-medium">{item.label}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="container pb-14">
        <div className="flex flex-wrap gap-2">
          {coreModules.map((module) => (
            <Badge key={module}>{module}</Badge>
          ))}
        </div>
      </div>
    </section>
  );
}
