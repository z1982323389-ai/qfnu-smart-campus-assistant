import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { ServiceModule } from "@/config/campus";

export function ServiceModuleCard({ module }: { module: ServiceModule }) {
  return (
    <Card className="group h-full transition hover:-translate-y-1 hover:border-primary/50">
      <CardHeader>
        <div className="flex flex-wrap gap-2">
          {module.tags.map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>
        <CardTitle className="pt-2">{module.title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-5">
        <p className="min-h-14 text-sm leading-7 text-muted-foreground">{module.summary}</p>
        <div className="rounded-2xl bg-muted p-4">
          <p className="text-xs text-muted-foreground">示例问题</p>
          <p className="mt-1 text-sm font-medium">{module.question}</p>
        </div>
        <Button asChild variant="outline" className="w-full">
          <Link href="/chat">
            进入咨询
            <ArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-1" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}
