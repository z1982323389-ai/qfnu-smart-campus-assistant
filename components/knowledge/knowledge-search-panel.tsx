"use client";

import { FormEvent, useEffect, useState } from "react";
import { AlertCircle, ExternalLink, FileSearch, Loader2, Search } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { postJson } from "@/lib/client/api";
import type { KnowledgeCategory, KnowledgeSearchResult } from "@/lib/knowledge/types";

type SearchResponse = {
  results: KnowledgeSearchResult[];
  total: number;
};

const categories: Array<{ label: string; value?: KnowledgeCategory }> = [
  { label: "全部" },
  { label: "校园办事", value: "campus-services" },
  { label: "新生指南", value: "freshman-guide" },
  { label: "奖助学金", value: "scholarships" },
  { label: "教务政策", value: "academic-affairs" },
  { label: "图书馆", value: "library" },
  { label: "通知", value: "notices" }
];

export function KnowledgeSearchPanel() {
  const [query, setQuery] = useState("学生证补办");
  const [category, setCategory] = useState<KnowledgeCategory | undefined>();
  const [results, setResults] = useState<KnowledgeSearchResult[]>([]);
  const [searched, setSearched] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    void search("学生证补办");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function search(nextQuery = query, nextCategory = category) {
    const trimmed = nextQuery.trim();
    if (!trimmed || loading) return;

    setLoading(true);
    setError(null);
    setSearched(true);

    try {
      const data = await postJson<SearchResponse, { query: string; category?: KnowledgeCategory; limit: number }>(
        "/api/knowledge/search",
        {
          query: trimmed,
          category: nextCategory,
          limit: 8
        }
      );
      setResults(data.results);
    } catch (err) {
      setError(err instanceof Error ? err.message : "检索失败，请稍后重试。");
    } finally {
      setLoading(false);
    }
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    void search();
  }

  return (
    <Card className="mt-8">
      <CardHeader className="border-b bg-gradient-to-r from-primary/10 via-background to-accent/10">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <CardTitle>知识库实时检索</CardTitle>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">检索公开资料、来源、标签和更新时间，验证 AI 回答的来源依据。</p>
          </div>
          <Badge className="w-fit border-primary/30 bg-primary/10 text-primary">{searched ? `${results.length} 条命中` : "等待检索"}</Badge>
        </div>
      </CardHeader>
      <CardContent>
        <form onSubmit={onSubmit} className="rounded-3xl border bg-background p-3">
          <div className="flex flex-col gap-3 md:flex-row">
            <input
              className="min-h-12 flex-1 bg-transparent px-3 text-sm outline-none"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="输入关键词，例如：奖学金材料、图书馆电子资源"
            />
            <Button disabled={loading} type="submit">
              {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Search className="mr-2 h-4 w-4" />}
              检索
            </Button>
          </div>
        </form>
        <div className="mt-4 flex flex-wrap gap-2">
          {categories.map((item) => (
            <button
              key={item.label}
              className={`rounded-full border px-3 py-1 text-xs transition ${
                category === item.value ? "border-primary bg-primary text-primary-foreground" : "bg-background text-muted-foreground"
              }`}
              onClick={() => {
                setCategory(item.value);
                void search(query, item.value);
              }}
            >
              {item.label}
            </button>
          ))}
        </div>
        {error ? (
          <div className="mt-5 flex gap-3 rounded-2xl border border-destructive/30 bg-destructive/10 p-4 text-sm text-destructive">
            <AlertCircle className="h-4 w-4" />
            {error}
          </div>
        ) : null}
        {loading ? (
          <div className="mt-5 flex items-center gap-3 rounded-2xl border bg-muted p-4 text-sm text-muted-foreground">
            <Loader2 className="h-4 w-4 animate-spin text-primary" />
            正在检索知识库
          </div>
        ) : null}
        {!loading && searched && results.length === 0 ? (
          <div className="mt-5 rounded-2xl border bg-muted p-5 text-sm text-muted-foreground">
            暂未命中知识库。可以换一个关键词，或在后续后台配置中补充资料。
          </div>
        ) : null}
        {results.length ? (
          <div className="mt-5 grid gap-3 rounded-3xl border bg-muted/40 p-4 md:grid-cols-3">
            <Stat label="命中条目" value={`${results.length}`} />
            <Stat label="最高评分" value={`${Math.max(...results.map((item) => item.score))}`} />
            <Stat label="资料分类" value={`${new Set(results.map((item) => item.category)).size}`} />
          </div>
        ) : null}
        <div className="mt-5 grid gap-4">
          {results.map((item) => (
            <div key={item.id} className="rounded-3xl border bg-background p-5 transition hover:-translate-y-0.5 hover:border-primary/40">
              <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <FileSearch className="h-4 w-4 text-primary" />
                    <h3 className="font-semibold">{item.title}</h3>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.content}</p>
                </div>
                <Badge className="w-fit">score {item.score}</Badge>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                <Badge>{item.category}</Badge>
                <Badge>{item.updatedAt}</Badge>
                {item.tags.map((tag) => (
                  <Badge key={tag}>{tag}</Badge>
                ))}
              </div>
              <div className="mt-4 flex flex-col gap-3 rounded-2xl border bg-muted/40 p-4 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="font-medium text-foreground">来源：{item.sourceName}</p>
                  <p className="mt-1 text-xs">匹配词：{item.matchedKeywords.length ? item.matchedKeywords.join("、") : "标题或全文命中"}</p>
                </div>
                {item.sourceUrl ? (
                  <a
                    href={item.sourceUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border bg-background px-3 py-2 text-xs transition hover:border-primary hover:text-foreground"
                  >
                    查看来源
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border bg-background p-4">
      <p className="text-xs text-muted-foreground">{label}</p>
      <p className="mt-1 text-2xl font-semibold">{value}</p>
    </div>
  );
}
