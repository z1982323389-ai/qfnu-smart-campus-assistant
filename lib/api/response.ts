import { NextResponse } from "next/server";

export type ApiErrorPayload = {
  code: string;
  message: string;
  detail?: string;
};

export type ApiMeta = {
  requestId: string;
  timestamp: string;
};

export function createRequestId() {
  return `qsa_${Date.now()}_${Math.random().toString(36).slice(2, 10)}`;
}

export function successResponse<T>(data: T, requestId: string, init?: ResponseInit) {
  return NextResponse.json(
    {
      success: true,
      data,
      meta: {
        requestId,
        timestamp: new Date().toISOString()
      } satisfies ApiMeta
    },
    init
  );
}

export function errorResponse(error: ApiErrorPayload, requestId: string, status = 500) {
  return NextResponse.json(
    {
      success: false,
      error,
      meta: {
        requestId,
        timestamp: new Date().toISOString()
      } satisfies ApiMeta
    },
    { status }
  );
}
