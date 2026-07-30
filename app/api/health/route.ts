import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json({
    success: true,
    data: {
      service: "qfnu-smart-campus-assistant",
      status: "ok",
      version: "1.0.0"
    },
    meta: {
      timestamp: new Date().toISOString()
    }
  });
}
