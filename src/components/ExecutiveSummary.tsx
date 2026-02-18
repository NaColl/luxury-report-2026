import ScrollReveal from "./ScrollReveal";

const ExecutiveSummary = () => {
  return (
    <section className="py-32 px-6" id="market">
      <div className="max-w-3xl mx-auto">
        <ScrollReveal>
          <p className="font-sans-ui text-xs tracking-[0.3em] uppercase text-primary mb-6">
            01 — The State of Luxury
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.05] mb-10">
            More than a Cyclical Contraction
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="font-body text-xl md:text-2xl leading-relaxed text-secondary-foreground mb-8">
            The global personal luxury goods market is at an inflection point. After a decade of almost
            uninterrupted expansion, the industry saw its first meaningful contraction in 15 years,
            with the market stabilising at around <span className="text-primary font-medium">€358 billion</span> in 2025.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <p className="font-body text-lg leading-relaxed text-muted-foreground mb-12">
            Approximately 50 million luxury consumers have exited the market since 2022, effectively
            wiping out the aspirational buyer segment. Within this contraction, a brutal divergence has
            emerged: Hermès and Prada are gaining share, LVMH and Richemont remain resilient, and
            Kering is in structural crisis.
          </p>
        </ScrollReveal>

        {/* Key stats */}
        <ScrollReveal delay={0.4}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            {[
              { value: "~330M", label: "Active luxury consumers", sub: "down from 400M" },
              { value: "40-60%", label: "Price inflation", sub: "since 2020" },
              { value: "€35B", label: "Resale market", sub: "growing 10-11% annually" },
              { value: "50M", label: "Consumers lost", sub: "since 2022" },
            ].map((stat, i) => (
              <div key={i} className="border-t border-border pt-4">
                <p className="font-display text-2xl md:text-3xl text-primary">{stat.value}</p>
                <p className="font-sans-ui text-xs tracking-wide text-foreground mt-1">{stat.label}</p>
                <p className="font-sans-ui text-xs text-muted-foreground mt-0.5">{stat.sub}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Structural causes */}
        <ScrollReveal delay={0.2}>
          <div className="mt-20 space-y-6">
            <h3 className="font-display text-2xl text-foreground mb-8">The Structural Causes</h3>
            {[
              { title: "Aggressive Price Inflation", desc: "Cumulative price increases of 40–60% across the industry have priced out aspirational buyers, likely permanently." },
              { title: "Value-Perception Collapse", desc: "More than half of surveyed luxury consumers say quality no longer justifies the price." },
              { title: "Generational Shift", desc: "Gen Z advocacy for luxury brands continues to decline as spending rotates toward experiences, wellness, and cultural objects." },
              { title: "Resale Cannibalisation", desc: "A luxury resale market of roughly €35 billion, growing at 10–11% annually, offers a more accessible entry point." },
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="flex gap-6 py-4 border-b border-border">
                  <span className="font-sans-ui text-xs text-primary mt-1 shrink-0">0{i + 1}</span>
                  <div>
                    <p className="font-display text-lg text-foreground">{item.title}</p>
                    <p className="font-body text-base text-muted-foreground mt-1">{item.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ExecutiveSummary;
