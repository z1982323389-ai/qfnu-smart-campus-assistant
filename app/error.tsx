"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="container flex min-h-[70vh] flex-col items-center justify-center text-center">
      <p className="text-sm font-medium text-destructive">500</p>
      <h1 className="mt-3 text-4xl font-semibold tracking-tight">系统暂时不可用</h1>
      <p className="mt-4 max-w-md leading-7 text-muted-foreground">
        页面加载时出现异常。你可以重试，或返回首页继续浏览其他功能。
      </p>
      <Button className="mt-8" onClick={reset}>
        重新加载
      </Button>
    </section>
  );
}
