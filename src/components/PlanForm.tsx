import { useState } from "react";
import { Loader2, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MAJORS, YEARS, type ChatRequest } from "@/lib/api";

interface PlanFormProps {
  onSubmit: (data: ChatRequest) => void;
  isLoading: boolean;
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
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">Major</label>
          <Select value={major} onValueChange={setMajor}>
            <SelectTrigger className="bg-background">
              <SelectValue placeholder="Select your major" />
            </SelectTrigger>
            <SelectContent>
              {MAJORS.map((m) => (
                <SelectItem key={m} value={m}>{m}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">Year</label>
          <Select value={year} onValueChange={setYear}>
            <SelectTrigger className="bg-background">
              <SelectValue placeholder="Select your year" />
            </SelectTrigger>
            <SelectContent>
              {YEARS.map((y) => (
                <SelectItem key={y} value={y}>{y}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-foreground">
          What's your question?
        </label>
        <Textarea
          placeholder="e.g. I want to land a software engineering internship this summer, where should I start?"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          className="min-h-[120px] resize-none bg-background text-base"
          required
        />
      </div>

      <Button
        type="submit"
        size="lg"
        className="w-full text-base font-semibold"
        disabled={isLoading || !question || !major || !year}
      >
        {isLoading ? (
          <>
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            Thinking...
          </>
        ) : (
          <>
            <Send className="mr-2 h-5 w-5" />
            Send
          </>
        )}
      </Button>
    </form>
  );
};

export default PlanForm;
