import type { ReactNode } from "react";
import { SectionHeading } from "@/components/shared/section-heading";

type PageShellProps = {
  eyebrow?: string;
  title: string;
  description: string;
  children: ReactNode;
};

export function PageShell({ eyebrow, title, description, children }: PageShellProps) {
  return (
    <section className="container py-14">
      <SectionHeading eyebrow={eyebrow} title={title} description={description} />
      <div className="mt-8">{children}</div>
    </section>
  );
}
