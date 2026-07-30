import { z } from "zod";
import { AppError, toAppError } from "@/lib/api/errors";
import { assertRateLimit, getClientIp } from "@/lib/api/rate-limit";
import { createRequestId, errorResponse, successResponse } from "@/lib/api/response";
import { createCampusChatCompletion } from "@/lib/ai/coze-client";

const chatMessageSchema = z.object({
  role: z.enum(["user", "assistant", "system"]),
  content: z.string().min(1).max(4000)
});

const chatRequestSchema = z.object({
  message: z.string().min(1, "请输入问题").max(2000, "问题过长，请精简后再试"),
  history: z.array(chatMessageSchema).max(12).optional()
});

export async function POST(request: Request) {
  const requestId = createRequestId();

  try {
    const clientIp = getClientIp(request);
    assertRateLimit(`ai-chat:${clientIp}`);

    const json = await request.json();
    const parsed = chatRequestSchema.safeParse(json);

    if (!parsed.success) {
      throw new AppError("VALIDATION_ERROR", "请求参数不正确。", 400, parsed.error.message);
    }

    const answer = await createCampusChatCompletion(parsed.data);
    return successResponse(answer, requestId);
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
