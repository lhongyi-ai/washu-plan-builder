import { ExternalLink, Calendar, Target, Mail, BookOpen } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { PlanResponse } from "@/lib/api";

interface PlanResultsProps {
  data: PlanResponse;
}

const PlanResults = ({ data }: PlanResultsProps) => {
  return (
    <div className="space-y-10 animate-fade-in-up">
      {/* Resources */}
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
                {r.category && (
                  <span className="mt-3 inline-block rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium text-secondary-foreground">
                    {r.category}
                  </span>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Weekly Plan */}
      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <Calendar className="h-5 w-5 text-primary" />
          <h2 className="text-2xl">Weekly Action Plan</h2>
        </div>
        <div className="space-y-3">
          {data.weekly_plan.map((week) => (
            <Card key={week.week}>
              <CardContent className="pt-5">
                <h3 className="mb-2 text-sm font-semibold text-primary font-sans">
                  Week {week.week}
                </h3>
                <ul className="space-y-1.5">
                  {week.tasks.map((task, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/40" />
                      {task}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* 30-Day Plan */}
      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <Target className="h-5 w-5 text-primary" />
          <h2 className="text-2xl">30-Day Plan</h2>
        </div>
        <Card>
          <CardContent className="pt-5">
            <ol className="space-y-2">
              {data.thirty_day_plan.map((step, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
                    {i + 1}
                  </span>
                  {step}
                </li>
              ))}
            </ol>
          </CardContent>
        </Card>
      </section>

      {/* Email Template */}
      {data.email_template && (
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Mail className="h-5 w-5 text-primary" />
            <h2 className="text-2xl">Email Template</h2>
          </div>
          <Card className="bg-surface-warm">
            <CardContent className="pt-5">
              <pre className="whitespace-pre-wrap font-sans text-sm text-foreground leading-relaxed">
                {data.email_template}
              </pre>
            </CardContent>
          </Card>
        </section>
      )}
    </div>
  );
};

export default PlanResults;
