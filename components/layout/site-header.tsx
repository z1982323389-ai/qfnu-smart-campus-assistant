import Link from "next/link";
import { Sparkles } from "lucide-react";
import { navigationItems, siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-xl">
      <div className="container flex h-16 items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
            <Sparkles className="h-4 w-4" />
          </span>
          <span>{siteConfig.name}</span>
        </Link>
        <nav className="hidden items-center gap-1 lg:flex">
          {navigationItems.map((item) => (
            <Button key={item.href} asChild variant="ghost" size="sm">
              <Link href={item.href}>{item.title}</Link>
            </Button>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button asChild size="sm">
            <Link href="/chat">立即提问</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
