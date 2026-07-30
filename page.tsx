import Link from "next/link";
import { ArrowRight, BrainCircuit, FileCheck2, Rocket, ShieldCheck, type LucideIcon } from "lucide-react";
import { HeroSection } from "@/components/home/hero-section";
import { WorkflowPreview } from "@/components/home/workflow-preview";
import { SectionHeading } from "@/components/shared/section-heading";
import { ServiceModuleCard } from "@/components/shared/service-module-card";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { serviceModules } from "@/config/campus";

const valueCards: Array<{ icon: LucideIcon; title: string; desc: string }> = [
  { icon: ShieldCheck, title: "可信边界", desc: "不接入内部系统，不查询个人隐私数据，无法确认时明确拒答。" },
  { icon: BrainCircuit, title: "AI 增强", desc: "用 Workflow 约束模型，把校园资料转成摘要、核验建议和来源引用。" },
  { icon: FileCheck2, title: "资料可追溯", desc: "知识条目保留分类、标签、来源、版本和更新时间。" },
  { icon: Rocket, title: "可部署演示", desc: "Next.js 路线轻量，适合比赛现场演示和后续扩展。" }
];

const deliveryStats = [
  ["8", "首版服务模块"],
  ["3", "核心 API"],
  ["多类", "公开来源"],
  ["1.0", "最终交付版本"]
];

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <section className="container py-16">
        <div className="mb-10 grid gap-4 md:grid-cols-4">
          {deliveryStats.map(([value, label]) => (
            <Card key={label} className="bg-gradient-to-br from-card to-primary/5">
              <CardContent className="p-6">
                <p className="text-3xl font-semibold text-primary">{value}</p>
                <p className="mt-2 text-sm text-muted-foreground">{label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="首版模块"
            title="先把八个真实场景做稳"
            description="首版不追求大而全，优先覆盖学生最常问、辅导员最常答、评委最容易理解的校园事务。"
          />
          <Button asChild variant="outline">
            <Link href="/services">
              查看办事大厅
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {serviceModules.slice(0, 4).map((module) => (
            <ServiceModuleCard key={module.slug} module={module} />
          ))}
        </div>
      </section>
      <section className="border-y bg-muted/40">
        <div className="container py-16">
          <SectionHeading
            eyebrow="AI Workflow"
            title="让模型按校园咨询逻辑工作"
            description="曲智通的核心不是自由聊天，而是把意图识别、知识库检索、来源引用和拒答机制串成稳定链路。"
          />
          <div className="mt-8">
            <WorkflowPreview />
          </div>
        </div>
      </section>
      <section className="container py-16">
        <div className="grid gap-6 md:grid-cols-4">
          {valueCards.map((item) => (
            <Card key={item.title}>
              <CardHeader>
                <item.icon className="h-6 w-6 text-primary" />
                <CardTitle className="text-lg">{item.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <CardDescription>{item.desc}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
        <Card className="mt-8 overflow-hidden border-primary/20">
          <CardContent className="grid gap-6 p-6 md:grid-cols-[1fr_1fr] md:p-8">
            <div>
              <p className="text-sm font-medium text-primary">最终版说明</p>
              <h2 className="mt-3 text-2xl font-semibold">从公开资料到可演示咨询闭环</h2>
              <p className="mt-4 leading-7 text-muted-foreground">
                当前版本已完成本地生产构建、API 验证、知识库检索、AI 问答、后台配置预览和比赛材料整理，适合用于现场演示与作品提交。
              </p>
            </div>
            <div className="grid gap-3 text-sm">
              {["官方公开来源增强", "知识库中文检索优化", "AI 回答展示来源引用", "生产构建与本地部署通过"].map((item) => (
                <div key={item} className="rounded-2xl border bg-muted/40 p-4">
                  {item}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>
    </>
  );
}
