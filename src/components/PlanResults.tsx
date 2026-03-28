import { ExternalLink, BookOpen, MessageSquare } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { ChatResponse } from "@/lib/api";

interface PlanResultsProps {
  data: ChatResponse;
}

const PlanResults = ({ data }: PlanResultsProps) => {
  return (
    <div className="space-y-10 animate-fade-in-up">
      {/* Answer */}
      <section className="space-y-3">
        <div className="flex items-center gap-2">
          <MessageSquare className="h-4 w-4 text-primary" />
          <h2 className="text-xl font-sans font-bold">Answer</h2>
        </div>
        <div className="rounded-2xl border bg-card p-5">
          <div className="whitespace-pre-wrap text-sm leading-relaxed text-foreground">
            {data.answer}
          </div>
        </div>
      </section>

      {/* Resources */}
      {data.resources && data.resources.length > 0 && (
        <section className="space-y-3">
          <div className="flex items-center gap-2">
            <BookOpen className="h-4 w-4 text-primary" />
            <h2 className="text-xl font-sans font-bold">Resources</h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {data.resources.map((r, i) => (
              <Card key={i} className="group rounded-2xl transition-all hover:shadow-md hover:-translate-y-0.5">
                <CardHeader className="pb-1.5">
                  <CardTitle className="flex items-start justify-between text-sm font-sans font-bold">
                    <span>{r.name}</span>
                    {r.url && (
                      <a
                        href={r.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="shrink-0 text-muted-foreground transition-colors hover:text-primary"
                      >
                        <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                    )}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xs leading-relaxed text-muted-foreground">{r.description}</p>
                  {r.type && (
                    <span className="mt-2.5 inline-block rounded-full bg-secondary px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-secondary-foreground">
                      {r.type.replace("_", " ")}
                    </span>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default PlanResults;
