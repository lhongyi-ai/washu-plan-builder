import { useState } from "react";
import { AlertCircle, Sparkles } from "lucide-react";
import PlanForm from "@/components/PlanForm";
import PlanResults from "@/components/PlanResults";
import { sendChat, type ChatRequest, type ChatResponse } from "@/lib/api";

const PlanPage = () => {
  const [result, setResult] = useState<ChatResponse | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (data: ChatRequest) => {
    setIsLoading(true);
    setError(null);

    try {
      const res = await sendChat(data);
      setResult(res);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container max-w-2xl py-12 md:py-20">
      <div className="mb-10 text-center animate-fade-in">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">
          <Sparkles className="h-6 w-6 text-primary" />
        </div>
        <h1 className="text-3xl md:text-4xl">Ask the AI</h1>
        <p className="mt-3 text-muted-foreground">
          Select your major and year, describe your goal, and get actionable next steps.
        </p>
      </div>

      <div className="rounded-2xl border bg-card p-6 shadow-sm md:p-8 animate-fade-in-up">
        <PlanForm onSubmit={handleSubmit} isLoading={isLoading} />
      </div>

      {error && (
        <div className="mt-8 flex items-start gap-3 rounded-xl border border-destructive/20 bg-destructive/5 p-4 animate-fade-in">
          <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-destructive" />
          <div>
            <p className="text-sm font-semibold text-destructive">Request failed</p>
            <p className="mt-1 text-sm text-muted-foreground">{error}</p>
          </div>
        </div>
      )}

      {isLoading && (
        <div className="mt-14 flex flex-col items-center gap-4 animate-fade-in">
          <div className="relative h-10 w-10">
            <div className="absolute inset-0 rounded-full border-2 border-primary/20" />
            <div className="absolute inset-0 animate-spin rounded-full border-2 border-transparent border-t-primary" />
          </div>
          <p className="text-sm text-muted-foreground animate-pulse-subtle">
            Finding the best resources for you…
          </p>
        </div>
      )}

      {result && (
        <div className="mt-12">
          <PlanResults data={result} />
        </div>
      )}
    </div>
  );
};

export default PlanPage;
