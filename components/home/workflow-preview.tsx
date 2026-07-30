import { ArrowRight } from "lucide-react";
import { workflowSteps } from "@/config/campus";

export function WorkflowPreview() {
  return (
    <div className="grid gap-3 md:grid-cols-7">
      {workflowSteps.map((step, index) => (
        <div key={step} className="relative rounded-3xl border bg-card p-4 text-center shadow-soft">
          <p className="text-sm font-medium">{step}</p>
          {index < workflowSteps.length - 1 ? (
            <ArrowRight className="absolute -right-4 top-1/2 z-10 hidden h-5 w-5 -translate-y-1/2 text-muted-foreground md:block" />
          ) : null}
        </div>
      ))}
    </div>
  );
}
