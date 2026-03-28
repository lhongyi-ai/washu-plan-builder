import { useState } from "react";
import { Loader2, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MAJORS, YEARS, type ChatRequest } from "@/lib/api";

interface PlanFormProps {
  onSubmit: (data: ChatRequest) => void;
  isLoading: boolean;
  hasResult?: boolean;
}

const PlanForm = ({ onSubmit, isLoading }: PlanFormProps) => {
  const [question, setQuestion] = useState("");
  const [major, setMajor] = useState("");
  const [year, setYear] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (question && major && year) {
      onSubmit({ question, major, year });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Major</label>
          <Select value={major} onValueChange={setMajor}>
            <SelectTrigger className="bg-background h-11">
              <SelectValue placeholder="Select major" />
            </SelectTrigger>
            <SelectContent>
              {MAJORS.map((m) => (
                <SelectItem key={m} value={m}>{m}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-1.5">
          <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Year</label>
          <Select value={year} onValueChange={setYear}>
            <SelectTrigger className="bg-background h-11">
              <SelectValue placeholder="Select year" />
            </SelectTrigger>
            <SelectContent>
              {YEARS.map((y) => (
                <SelectItem key={y} value={y}>{y}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-1.5">
        <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          Your Question
        </label>
        <Textarea
          placeholder="e.g. I want to land a software engineering internship this summer — where should I start?"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          className="min-h-[130px] resize-none bg-background text-sm leading-relaxed"
          required
        />
      </div>

      <Button
        type="submit"
        size="lg"
        className="w-full rounded-xl text-sm font-semibold h-12"
        disabled={isLoading || !question || !major || !year}
      >
        {isLoading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Thinking…
          </>
        ) : (
          <>
            <Send className="mr-2 h-4 w-4" />
            Send
          </>
        )}
      </Button>
    </form>
  );
};

export default PlanForm;
