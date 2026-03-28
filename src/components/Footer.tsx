const Footer = () => (
  <footer className="border-t">
    <div className="container flex items-center justify-between py-6">
      <p className="text-xs text-muted-foreground">
        © {new Date().getFullYear()} WashU Engineering Resource AI
      </p>
      <p className="text-xs text-muted-foreground">
        Not affiliated with Washington University in St. Louis.
      </p>
    </div>
  </footer>
);

export default Footer;
