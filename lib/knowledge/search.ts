import { knowledgeItems } from "@/lib/knowledge/sample-items";
import type { KnowledgeCategory, KnowledgeSearchResult } from "@/lib/knowledge/types";

export type KnowledgeSearchInput = {
  query: string;
  category?: KnowledgeCategory;
  limit?: number;
};

function tokenize(text: string) {
  return text
    .toLowerCase()
    .replace(/[^\u4e00-\u9fa5a-z0-9]+/gi, " ")
    .split(/\s+/)
    .filter(Boolean);
}

const campusKeywords = [
  "学生证",
  "补办",
  "奖学金",
  "助学金",
  "新生",
  "报到",
  "图书馆",
  "电子资源",
  "校历",
  "教务",
  "联系方式",
  "部门",
  "通知",
  "成绩单",
  "学籍证明"
];

export function searchKnowledge(input: KnowledgeSearchInput): KnowledgeSearchResult[] {
  const query = input.query.trim();
  const limit = input.limit ?? 5;

  if (!query) {
    return [];
  }

  const queryTokens = tokenize(query);
  const normalizedQuery = query.toLowerCase().replace(/\s+/g, "");
  const expandedTokens = Array.from(
    new Set([...queryTokens, ...campusKeywords.filter((keyword) => query.includes(keyword) || keyword.includes(query))])
  );

  return knowledgeItems
    .filter((item) => item.status === "active")
    .filter((item) => (input.category ? item.category === input.category : true))
    .map((item) => {
      const searchable = [item.title, item.category, item.sourceName, item.content, ...item.tags, ...item.audience].join(" ");
      const normalizedSearchable = searchable.toLowerCase().replace(/\s+/g, "");
      const matchedKeywords = expandedTokens.filter((token) => normalizedSearchable.includes(token.toLowerCase()));
      const directTitleHit = item.title.includes(query) || normalizedQuery.includes(item.title) ? 8 : 0;
      const directFullTextHit = normalizedSearchable.includes(normalizedQuery) ? 6 : 0;
      const tagHit = item.tags.filter((tag) => query.includes(tag) || tag.includes(query)).length * 4;
      const contentHit = item.content.includes(query) ? 3 : 0;
      const score = matchedKeywords.length + directTitleHit + directFullTextHit + tagHit + contentHit;

      return {
        ...item,
        score,
        matchedKeywords: Array.from(new Set(matchedKeywords))
      };
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit);
}
