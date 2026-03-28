import { useState } from "react";
import { AlertCircle } from "lucide-react";
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
    setResult(null);

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
      <div className="mb-10 text-center">
        <h1 className="text-3xl md:text-4xl">Ask WashU Engineering Resource AI</h1>
        <p className="mt-3 text-muted-foreground">
          For McKelvey undergrads: select your major and year, ask your goal question, and get actionable next steps.
        </p>
      </div>

      <div className="rounded-2xl border bg-card p-6 shadow-sm md:p-8">
        <PlanForm onSubmit={handleSubmit} isLoading={isLoading} />
      </div>

      {error && (
        <div className="mt-8 flex items-start gap-3 rounded-xl border border-destructive/20 bg-destructive/5 p-4 animate-fade-in">
          <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-destructive" />
          <div>
            <p className="text-sm font-medium text-destructive">Request failed</p>
            <p className="mt-1 text-sm text-muted-foreground">{error}</p>
          </div>
        </div>
      )}

      {isLoading && (
        <div className="mt-12 flex flex-col items-center gap-4 animate-fade-in">
          <div className="h-10 w-10 animate-spin rounded-full border-4 border-primary/20 border-t-primary" />
          <p className="text-sm text-muted-foreground animate-pulse-subtle">
            Finding the best WashU resources for you...
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
