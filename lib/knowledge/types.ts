export type KnowledgeCategory =
  | "campus-services"
  | "freshman-guide"
  | "scholarships"
  | "academic-affairs"
  | "library"
  | "notices"
  | "departments"
  | "faq";

export type KnowledgeStatus = "draft" | "active" | "archived";

export type KnowledgeItem = {
  id: string;
  title: string;
  category: KnowledgeCategory;
  tags: string[];
  audience: string[];
  campus: "曲阜校区" | "日照校区" | "全校";
  sourceType: "markdown" | "pdf" | "word" | "txt" | "web";
  sourceName: string;
  sourceUrl?: string;
  version: string;
  updatedAt: string;
  status: KnowledgeStatus;
  content: string;
};

export type KnowledgeSearchResult = KnowledgeItem & {
  score: number;
  matchedKeywords: string[];
};
