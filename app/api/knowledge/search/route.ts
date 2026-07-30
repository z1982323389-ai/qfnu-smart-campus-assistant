import { z } from "zod";
import { AppError, toAppError } from "@/lib/api/errors";
import { createRequestId, errorResponse, successResponse } from "@/lib/api/response";
import { searchKnowledge } from "@/lib/knowledge/search";

const knowledgeSearchSchema = z.object({
  query: z.string().min(1, "请输入检索关键词").max(500, "检索关键词过长"),
  category: z
    .enum(["campus-services", "freshman-guide", "scholarships", "academic-affairs", "library", "notices", "departments", "faq"])
    .optional(),
  limit: z.number().int().min(1).max(20).optional()
});

export async function POST(request: Request) {
  const requestId = createRequestId();

  try {
    const json = await request.json();
    const parsed = knowledgeSearchSchema.safeParse(json);

    if (!parsed.success) {
      throw new AppError("VALIDATION_ERROR", "请求参数不正确。", 400, parsed.error.message);
    }

    const results = searchKnowledge(parsed.data);
    return successResponse({ results, total: results.length }, requestId);
  } catch (error) {
    const appError = toAppError(error);
    return errorResponse(
      {
        code: appError.code,
        message: appError.message,
        detail: appError.detail
      },
      requestId,
      appError.status
    );
  }
}
