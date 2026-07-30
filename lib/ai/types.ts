export type ChatMessage = {
  role: "user" | "assistant" | "system";
  content: string;
};

export type ChatRequest = {
  message: string;
  history?: ChatMessage[];
};

export type CampusIntent =
  | "campus_service"
  | "freshman_guide"
  | "scholarship"
  | "academic_affairs"
  | "library"
  | "notice"
  | "department"
  | "faq"
  | "out_of_scope";

export type SourceReference = {
  title: string;
  type: "knowledge" | "notice" | "department" | "demo";
  updatedAt?: string;
  url?: string;
};

export type CampusAnswer = {
  intent: CampusIntent;
  title: string;
  summary: string;
  steps: string[];
  materials: string[];
  departmentHint: string;
  cautions: string[];
  sources: SourceReference[];
  recommendations: string[];
  isDemo: boolean;
};
