import { ExternalLink, BookOpen, MessageSquare } from "lucide-react";
import ReactMarkdown from "react-markdown";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { ChatResponse } from "@/lib/api";

interface PlanResultsProps {
  data: ChatResponse;
}

const PlanResults = ({ data }: PlanResultsProps) => {
  return (
    <div className="space-y-10 animate-fade-in-up">
      {/* Answer */}
      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <MessageSquare className="h-5 w-5 text-primary" />
          <h2 className="text-2xl font-display font-bold">💡 Answer</h2>
        </div>
        <div className="rounded-2xl border bg-card p-6">
          <div className="prose prose-sm max-w-none text-foreground prose-headings:text-xl prose-headings:font-display prose-headings:font-bold prose-headings:mt-8 prose-headings:mb-4 prose-p:my-4 prose-li:my-2 prose-ul:my-4 prose-ol:my-4 prose-strong:text-foreground [&_p+p]:mt-4">
            <ReactMarkdown>{data.answer.replace(/\*?\*?URL\*?\*?:.*$/gm, '').replace(/\n(?=\*\*)/g, '\n\n').replace(/\n(?![\n*#-])/g, '\n\n')}</ReactMarkdown>
          </div>
        </div>
      </section>

      {/* Resources */}
      {data.resources && data.resources.length > 0 && (
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-primary" />
            <h2 className="text-2xl font-display font-bold">📚 Resources</h2>
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
