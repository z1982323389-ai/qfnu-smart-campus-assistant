export type ApiResponse<T> =
  | {
      success: true;
      data: T;
      meta: {
        requestId: string;
        timestamp: string;
      };
    }
  | {
      success: false;
      error: {
        code: string;
        message: string;
        detail?: string;
      };
      meta: {
        requestId: string;
        timestamp: string;
      };
    };

export async function postJson<TResponse, TBody>(url: string, body: TBody): Promise<TResponse> {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
  });

  const payload = (await response.json()) as ApiResponse<TResponse>;

  if (!payload.success) {
    throw new Error(payload.error.message);
  }

  return payload.data;
}
