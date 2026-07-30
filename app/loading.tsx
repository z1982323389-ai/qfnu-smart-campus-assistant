export default function Loading() {
  return (
    <div className="container flex min-h-[60vh] items-center justify-center">
      <div className="rounded-3xl border bg-card p-6 text-center shadow-soft">
        <div className="mx-auto mb-4 h-8 w-8 animate-spin rounded-full border-2 border-primary border-t-transparent" />
        <p className="text-sm text-muted-foreground">正在加载曲智通页面</p>
      </div>
    </div>
  );
}
