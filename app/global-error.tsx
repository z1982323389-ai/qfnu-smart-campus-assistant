"use client";

export default function GlobalError({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <html lang="zh-CN">
      <body>
        <main style={{ minHeight: "100vh", display: "grid", placeItems: "center", fontFamily: "sans-serif" }}>
          <section style={{ maxWidth: 480, textAlign: "center", padding: 24 }}>
            <p style={{ color: "#dc2626", fontSize: 14, fontWeight: 600 }}>500</p>
            <h1 style={{ fontSize: 36, margin: "12px 0" }}>系统出现异常</h1>
            <p style={{ color: "#64748b", lineHeight: 1.8 }}>全局错误边界已捕获异常，请尝试重新加载页面。</p>
            <button
              onClick={reset}
              style={{
                marginTop: 24,
                border: 0,
                borderRadius: 999,
                background: "#2563eb",
                color: "#fff",
                padding: "12px 20px",
                cursor: "pointer"
              }}
            >
              重新加载
            </button>
          </section>
        </main>
      </body>
    </html>
  );
}
