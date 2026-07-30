"use client";

import { FormEvent, useEffect, useState } from "react";
import type { ReactNode } from "react";
import { AlertCircle, BookOpen, CheckCircle2, ExternalLink, FileText, History, Link2, Loader2, MapPin, Send, ShieldCheck, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { postJson } from "@/lib/client/api";
import type { CampusAnswer } from "@/lib/ai/types";

type ChatApiData = CampusAnswer;

const suggestions = ["学生证丢了怎么办", "奖学金需要哪些材料", "新生报到要注意什么", "图书馆怎么使用电子资源"];

export function ChatWorkspace() {
  const [message, setMessage] = useState("学生证丢了怎么办？");
  const [currentQuestion, setCurrentQuestion] = useState("学生证丢了怎么办？");
  const [answer, setAnswer] = useState<CampusAnswer | null>(null);
  const [history, setHistory] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    void submit("学生证丢了怎么办？", { silentHistory: true });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function submit(nextMessage = message, options?: { silentHistory?: boolean }) {
    const trimmed = nextMessage.trim();
    if (!trimmed || loading) return;

    setMessage(trimmed);
    setCurrentQuestion(trimmed);
    setLoading(true);
    setError(null);

    try {
      const data = await postJson<ChatApiData, { message: string }>("/api/ai/chat", { message: trimmed });
      setAnswer(data);
      if (!options?.silentHistory) {
        setHistory((items) => [trimmed, ...items.filter((item) => item !== trimmed)].slice(0, 5));
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "请求失败，请稍后重试。");
    } finally {
      setLoading(false);
    }
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    void submit();
  }

  return (
    <section className="container grid gap-6 py-10 lg:grid-cols-[minmax(0,1fr)_360px]">
      <Card className="min-h-[680px] overflow-hidden">
        <CardHeader className="border-b bg-gradient-to-r from-primary/10 via-background to-accent/10">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div>
              <Badge className="w-fit">AI 聊天</Badge>
              <CardTitle className="mt-3 text-2xl">校园事务咨询</CardTitle>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">输入问题后，系统会识别意图、检索知识库，并输出步骤、材料、来源和边界提醒。</p>
            </div>
            <Badge className="w-fit border-primary/30 bg-primary/10 text-primary">{answer?.isDemo ? "演示级回答" : "知识库命中"}</Badge>
          </div>
        </CardHeader>
        <CardContent className="flex min-h-[560px] flex-col justify-between p-6">
          <div className="space-y-4">
            <div className="ml-auto max-w-xl rounded-3xl bg-primary p-5 leading-7 text-primary-foreground shadow-soft">{currentQuestion}</div>
            {error ? (
              <div className="flex max-w-2xl gap-3 rounded-3xl border border-destructive/30 bg-destructive/10 p-5 text-sm text-destructive">
                <AlertCircle className="mt-0.5 h-4 w-4" />
                {error}
              </div>
            ) : null}
            {loading ? (
              <div className="flex max-w-2xl items-center gap-3 rounded-3xl border bg-card p-5 text-muted-foreground shadow-soft">
                <Loader2 className="h-4 w-4 animate-spin text-primary" />
                正在识别意图、检索知识库并生成结构化回答
              </div>
            ) : null}
            {answer ? <AnswerCard answer={answer} onAsk={(question) => void submit(question)} /> : <EmptyAnswer />}
          </div>
          <form onSubmit={onSubmit} className="mt-6 rounded-3xl border bg-background p-3">
            <div className="flex items-center gap-3">
              <input
                className="min-h-12 flex-1 bg-transparent px-3 text-sm outline-none"
                placeholder="例如：学生证丢了应该怎么补办？"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
              />
              <Button disabled={loading} type="submit">
                {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Send className="mr-2 h-4 w-4" />}
                发送
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
      <aside className="space-y-4">
        <Card className="border-primary/20 bg-primary/5">
          <CardHeader>
            <ShieldCheck className="h-5 w-5 text-primary" />
            <CardTitle className="text-lg">回答可信边界</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm leading-6 text-muted-foreground">
            <p>可回答：公开政策、核验步骤、材料提示、图书馆和联系方式。</p>
            <p>拒绝：成绩、课表、校园卡余额、宿舍电费、个人审批进度。</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <Sparkles className="h-5 w-5 text-primary" />
            <CardTitle className="text-lg">推荐问题</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            {suggestions.map((item) => (
              <button
                key={item}
                className="w-full rounded-2xl border bg-background p-3 text-left text-sm transition hover:border-primary"
                onClick={() => void submit(item)}
              >
                {item}
              </button>
            ))}
          </CardContent>
        </Card>
        {history.length ? (
          <Card>
            <CardHeader>
              <History className="h-5 w-5 text-primary" />
              <CardTitle className="text-lg">最近提问</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {history.map((item) => (
                <button
                  key={item}
                  className="w-full rounded-2xl border bg-background p-3 text-left text-xs leading-5 text-muted-foreground transition hover:border-primary hover:text-foreground"
                  onClick={() => void submit(item)}
                >
                  {item}
                </button>
              ))}
            </CardContent>
          </Card>
        ) : null}
        <Card>
          <CardHeader>
            <FileText className="h-5 w-5 text-primary" />
            <CardTitle className="text-lg">回答结构</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm text-muted-foreground">
            {["意图识别", "知识库检索", "核验步骤", "材料提示", "咨询渠道", "来源引用", "相关推荐"].map((item) => (
              <div key={item} className="rounded-2xl border bg-background p-3">
                {item}
              </div>
            ))}
          </CardContent>
        </Card>
      </aside>
    </section>
  );
}

function EmptyAnswer() {
  return (
    <div className="max-w-3xl rounded-3xl border bg-card p-5 shadow-soft">
      <div className="mb-3 flex items-center gap-2">
        <Sparkles className="h-5 w-5 text-primary" />
        <h2 className="text-lg font-semibold">等待提问</h2>
      </div>
      <p className="leading-7 text-muted-foreground">输入校园事务问题后，系统会调用服务端 API，返回结构化办事答案和来源引用。</p>
    </div>
  );
}

function AnswerCard({ answer, onAsk }: { answer: CampusAnswer; onAsk: (question: string) => void }) {
  return (
    <div className="max-w-3xl rounded-3xl border bg-card p-5 shadow-soft">
      <div className="mb-4 flex flex-wrap items-center gap-2">
        <Sparkles className="h-5 w-5 text-primary" />
        <h2 className="text-lg font-semibold">{answer.title}</h2>
        <Badge>{answer.intent}</Badge>
        <Badge>{answer.isDemo ? "演示级" : "知识库来源"}</Badge>
      </div>
      <p className="leading-7 text-muted-foreground">{answer.summary}</p>
      <div className="mt-5 grid gap-4 md:grid-cols-2">
        <InfoBlock icon={<CheckCircle2 className="h-4 w-4 text-primary" />} title="核验步骤" items={answer.steps} />
        <InfoBlock icon={<FileText className="h-4 w-4 text-primary" />} title="材料提示" items={answer.materials.length ? answer.materials : ["暂无材料要求"]} />
        <div className="rounded-2xl bg-muted p-4">
          <div className="mb-3 flex items-center gap-2 font-medium">
            <MapPin className="h-4 w-4 text-primary" />
            咨询渠道
          </div>
          <p className="text-sm leading-6 text-muted-foreground">{answer.departmentHint}</p>
        </div>
        <div className="rounded-2xl bg-muted p-4">
          <div className="mb-3 flex items-center gap-2 font-medium">
            <Link2 className="h-4 w-4 text-primary" />
            来源引用
          </div>
          <div className="space-y-2 text-sm text-muted-foreground">
            {answer.sources.map((source) => (
              source.url ? (
                <a
                  key={`${source.title}-${source.updatedAt}`}
                  href={source.url}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-start gap-2 rounded-xl border bg-background p-3 transition hover:border-primary hover:text-foreground"
                >
                  <ExternalLink className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
                  <span>
                    {source.title}
                    {source.updatedAt ? ` · ${source.updatedAt}` : ""}
                  </span>
                </a>
              ) : (
                <p key={`${source.title}-${source.updatedAt}`}>
                  {source.title}
                  {source.updatedAt ? ` · ${source.updatedAt}` : ""}
                </p>
              )
            ))}
          </div>
        </div>
      </div>
      <div className="mt-5 rounded-2xl border border-primary/30 bg-primary/5 p-4 text-sm leading-6 text-muted-foreground">
        {answer.cautions.join("；")}
      </div>
      <div className="mt-5">
        <div className="mb-3 flex items-center gap-2 text-sm font-medium">
          <BookOpen className="h-4 w-4 text-primary" />
          你还可以继续问
        </div>
        <div className="flex flex-wrap gap-2">
          {answer.recommendations.map((item) => (
            <button
              key={item}
              onClick={() => onAsk(item)}
              className="rounded-full border bg-background px-3 py-1.5 text-xs text-muted-foreground transition hover:border-primary hover:text-foreground"
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

function InfoBlock({ icon, title, items }: { icon: ReactNode; title: string; items: string[] }) {
  return (
    <div className="rounded-2xl bg-muted p-4">
      <div className="mb-3 flex items-center gap-2 font-medium">
        {icon}
        {title}
      </div>
      <ol className="space-y-2 text-sm text-muted-foreground">
        {items.map((item, index) => (
          <li key={item}>
            {index + 1}. {item}
          </li>
        ))}
      </ol>
    </div>
  );
}
