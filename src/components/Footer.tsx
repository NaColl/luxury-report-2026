import ScrollReveal from "./ScrollReveal";

const Footer = () => {
  return (
    <footer className="py-24 px-6 border-t border-border">
      <div className="max-w-3xl mx-auto text-center">
        <ScrollReveal>
          <p className="font-display text-3xl md:text-4xl text-foreground mb-4">
            2026 Luxury Landscape
          </p>
          <p className="font-body text-lg text-muted-foreground mb-8">
            by Jurgis Pocius
          </p>
          <div className="divider-gold mx-auto mb-8" />
          <p className="font-sans-ui text-xs text-muted-foreground tracking-wider">
            Originally published on{" "}
            <a
              href="https://theinterneteconomy.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-gold-light transition-colors"
            >
              The Internet Economy
            </a>
          </p>
        </ScrollReveal>
      </div>
    </footer>
  );
};

export default Footer;
