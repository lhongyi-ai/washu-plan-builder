import { Link } from "react-router-dom";
import { ArrowRight, Compass, Zap, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const features = [
  {
    icon: Compass,
    title: "AI-Powered Guidance",
    description: "Turn vague career goals into actionable weekly plans tailored to your WashU experience.",
  },
  {
    icon: Zap,
    title: "Instant Resources",
    description: "Discover clubs, offices, and campus tools you didn't know existed — matched to your goal.",
  },
  {
    icon: Users,
    title: "Personalized to You",
    description: "Plans shaped by your major and year, so every recommendation actually makes sense.",
  },
];

const Index = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.06]">
          <img src={heroBg} alt="" className="h-full w-full object-cover" aria-hidden="true" />
        </div>
        <div className="container relative flex flex-col items-center py-24 text-center md:py-36">
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-primary animate-fade-in">
            For WashU McKelvey Engineering Students
          </span>
          <h1 className="max-w-3xl text-4xl leading-tight md:text-6xl md:leading-[1.1] animate-fade-in-up">
            WashU Engineering Resource AI<br />for your next step.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
            Tell us your goal and get relevant McKelvey resources with clear actions you can take right now.
          </p>
          <Link to="/plan" className="mt-10 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <Button size="lg" className="text-base font-semibold px-8">
              Get Your Plan
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="border-t bg-card">
        <div className="container grid gap-8 py-20 md:grid-cols-3 md:gap-12">
          {features.map((f) => (
            <div key={f.title} className="flex flex-col items-start">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
                <f.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="mb-2 text-lg font-sans font-semibold">{f.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{f.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary">
        <div className="container flex flex-col items-center py-16 text-center">
          <h2 className="text-3xl text-primary-foreground">Ready to take the first step?</h2>
          <p className="mt-3 text-primary-foreground/70">It takes 30 seconds to get a personalized action plan.</p>
          <Link to="/plan" className="mt-8">
            <Button size="lg" variant="secondary" className="text-base font-semibold px-8">
              Generate My Plan
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;
