import { useState } from "react";
import { Loader2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MAJORS, YEARS } from "@/lib/api";

interface PlanFormProps {
  onSubmit: (data: { goal: string; major: string; year: string }) => void;
  isLoading: boolean;
}

const PlanForm = ({ onSubmit, isLoading }: PlanFormProps) => {
  const [goal, setGoal] = useState("");
  const [major, setMajor] = useState("");
  const [year, setYear] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (goal && major && year) {
      onSubmit({ goal, major, year });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <label className="text-sm font-medium text-foreground">
          What's your goal?
        </label>
        <Textarea
          placeholder="e.g. I want to land a software engineering internship this summer, but I don't know where to start..."
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
          className="min-h-[120px] resize-none bg-background text-base"
          required
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">Major</label>
          <Select value={major} onValueChange={setMajor} required>
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
          <Select value={year} onValueChange={setYear} required>
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

      <Button
        type="submit"
        size="lg"
        className="w-full text-base font-semibold"
        disabled={isLoading || !goal || !major || !year}
      >
        {isLoading ? (
          <>
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            Generating your plan...
          </>
        ) : (
          <>
            <Sparkles className="mr-2 h-5 w-5" />
            Generate My Plan
          </>
        )}
      </Button>
    </form>
  );
};

export default PlanForm;
