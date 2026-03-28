import { GraduationCap } from "lucide-react";

const Footer = () => (
  <footer className="border-t bg-card">
    <div className="container flex flex-col items-center gap-4 py-10 md:flex-row md:justify-between">
      <div className="flex items-center gap-2">
        <GraduationCap className="h-5 w-5 text-primary" />
        <span className="text-sm font-semibold">WashU Engineering Resource AI</span>
      </div>
      <p className="text-sm text-muted-foreground">
        Built for WashU McKelvey engineering students. Not affiliated with Washington University in St. Louis.
      </p>
    </div>
  </footer>
);

export default Footer;
