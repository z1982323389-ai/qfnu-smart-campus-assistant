import { AppError } from "@/lib/api/errors";

type Bucket = {
  count: number;
  resetAt: number;
};

const buckets = new Map<string, Bucket>();

export function getClientIp(request: Request) {
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) {
    return forwardedFor.split(",")[0]?.trim() ?? "unknown";
  }

  return request.headers.get("x-real-ip") ?? "unknown";
}

export function assertRateLimit(key: string, limit = Number(process.env.AI_RATE_LIMIT_PER_MINUTE ?? 20)) {
  const now = Date.now();
  const windowMs = 60 * 1000;
  const current = buckets.get(key);

  if (!current || current.resetAt <= now) {
    buckets.set(key, { count: 1, resetAt: now + windowMs });
    return;
  }

  if (current.count >= limit) {
    throw new AppError("RATE_LIMITED", "请求过于频繁，请稍后再试。", 429);
  }

  current.count += 1;
}
