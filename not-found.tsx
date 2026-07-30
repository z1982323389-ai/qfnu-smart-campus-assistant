import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="container flex min-h-[70vh] flex-col items-center justify-center text-center">
      <p className="text-sm font-medium text-primary">404</p>
      <h1 className="mt-3 text-4xl font-semibold tracking-tight">页面不存在</h1>
      <p className="mt-4 max-w-md leading-7 text-muted-foreground">
        你访问的页面可能已经移动或尚未创建。可以返回首页，或进入 AI 聊天继续咨询校园事务。
      </p>
      <div className="mt-8 flex gap-3">
        <Button asChild>
          <Link href="/">返回首页</Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/chat">进入 AI 聊天</Link>
        </Button>
      </div>
    </section>
  );
}
