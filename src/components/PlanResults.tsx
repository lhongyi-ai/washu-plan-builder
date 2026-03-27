import { ExternalLink, BookOpen, MessageSquare } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { PlanResponse } from "@/lib/api";

interface PlanResultsProps {
  data: PlanResponse;
}

const PlanResults = ({ data }: PlanResultsProps) => {
  return (
    <div className="space-y-10 animate-fade-in-up">
      {/* AI Answer */}
      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <MessageSquare className="h-5 w-5 text-primary" />
          <h2 className="text-2xl">Your Personalized Plan</h2>
        </div>
        <Card className="bg-surface-warm">
          <CardContent className="pt-5">
            <div className="prose prose-sm max-w-none text-foreground whitespace-pre-wrap leading-relaxed">
              {data.answer}
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Resources */}
      {data.resources.length > 0 && (
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-primary" />
            <h2 className="text-2xl">Recommended Resources</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {data.resources.map((r, i) => (
              <Card key={i} className="group transition-shadow hover:shadow-md">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-start justify-between text-base">
                    <span>{r.name}</span>
                    {r.url && (
                      <a
                        href={r.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="shrink-0 text-muted-foreground transition-colors hover:text-primary"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    )}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{r.description}</p>
                  {r.type && (
                    <span className="mt-3 inline-block rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium text-secondary-foreground capitalize">
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
