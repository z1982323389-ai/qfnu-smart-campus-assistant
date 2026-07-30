import Link from "next/link";
import { siteConfig } from "@/config/site";

export function SiteFooter() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="container flex flex-col gap-4 py-8 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
        <p>
          {siteConfig.name} · {siteConfig.description}
        </p>
        <div className="flex gap-4">
          <Link href="/knowledge">知识库</Link>
          <Link href="/help">帮助中心</Link>
          <Link href="/changelog">更新日志</Link>
        </div>
      </div>
    </footer>
  );
}
