export class AppError extends Error {
  code: string;
  status: number;
  detail?: string;

  constructor(code: string, message: string, status = 500, detail?: string) {
    super(message);
    this.name = "AppError";
    this.code = code;
    this.status = status;
    this.detail = detail;
  }
}

export function toAppError(error: unknown) {
  if (error instanceof AppError) {
    return error;
  }

  if (error instanceof Error) {
    return new AppError("INTERNAL_ERROR", "系统暂时不可用，请稍后重试。", 500, error.message);
  }

  return new AppError("UNKNOWN_ERROR", "系统遇到未知异常。", 500);
}
