import { Link } from "react-router-dom";
import { ArrowRight, Compass, Zap, Users, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: Compass,
    title: "Smart Discovery",
    description: "Uncover clubs, offices, and campus resources matched to your specific goals.",
  },
  {
    icon: Zap,
    title: "Instant Action Plans",
    description: "Get step-by-step next moves — not generic advice, but tailored actions.",
  },
  {
    icon: Users,
    title: "Built for McKelvey",
    description: "Every recommendation is shaped by your engineering major and year.",
  },
];

const Index = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        {/* Abstract background shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-primary/[0.04] animate-float" />
          <div className="absolute -bottom-20 -left-20 h-[300px] w-[300px] rounded-full bg-primary/[0.03]" style={{ animationDelay: "3s" }} />
        </div>

        <div className="container relative flex flex-col items-center py-28 text-center md:py-40">
          <div className="mb-6 flex items-center gap-2 rounded-full border bg-card px-4 py-1.5 text-xs font-semibold text-muted-foreground animate-fade-in">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            For WashU McKelvey Engineering Students
          </div>

          <h1 className="max-w-3xl text-4xl leading-[1.1] md:text-6xl lg:text-7xl animate-fade-in-up">
            Turn your goals into{" "}
            <span className="text-primary">action.</span>
          </h1>

          <p className="mt-6 max-w-lg text-base text-muted-foreground md:text-lg animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            Tell our AI what you want to achieve and get personalized campus resources with clear next steps.
          </p>

          <Link to="/plan" className="mt-10 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <Button size="lg" className="group text-sm font-semibold px-8 rounded-full">
              Get Started
              <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="border-t">
        <div className="container grid gap-6 py-20 md:grid-cols-3 md:gap-10">
          {features.map((f, i) => (
            <div
              key={f.title}
              className="group rounded-2xl border bg-card p-6 transition-all hover:shadow-lg hover:-translate-y-1 animate-fade-in-up"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20">
                <f.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="mb-2 text-base font-sans font-bold">{f.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{f.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t">
        <div className="container flex flex-col items-center py-20 text-center">
          <h2 className="text-3xl md:text-4xl">
            Ready to find your path?
          </h2>
          <p className="mt-3 text-muted-foreground">
            30 seconds. One personalized action plan.
          </p>
          <Link to="/plan" className="mt-8">
            <Button size="lg" className="group rounded-full text-sm font-semibold px-8">
              Ask the AI
              <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;
