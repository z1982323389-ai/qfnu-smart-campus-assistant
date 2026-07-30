"use client";

import * as React from "react";
import * as ToastPrimitives from "@radix-ui/react-toast";

export function Toaster() {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const timer = window.setTimeout(() => setOpen(true), 800);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <ToastPrimitives.Provider swipeDirection="right">
      <ToastPrimitives.Root
        open={open}
        onOpenChange={setOpen}
        className="fixed bottom-6 right-6 z-[100] w-[320px] rounded-2xl border bg-card p-4 text-card-foreground shadow-soft"
      >
        <ToastPrimitives.Title className="text-sm font-semibold">曲智通工程骨架已就绪</ToastPrimitives.Title>
        <ToastPrimitives.Description className="mt-1 text-sm text-muted-foreground">
          当前阶段已支持基础路由、主题和错误边界。
        </ToastPrimitives.Description>
      </ToastPrimitives.Root>
      <ToastPrimitives.Viewport />
    </ToastPrimitives.Provider>
  );
}
