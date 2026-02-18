import ScrollReveal from "./ScrollReveal";
import { motion } from "framer-motion";

const houses = [
  { name: "Hermès", margin: 41, growth: "+13%", status: "leader", color: "bg-primary" },
  { name: "Richemont", margin: 25, growth: "+10%", status: "strong", color: "bg-primary/80" },
  { name: "Prada", margin: 23.6, growth: "+17%", status: "strong", color: "bg-primary/70" },
  { name: "Moncler", margin: 30, growth: "~0%", status: "stable", color: "bg-primary/60" },
  { name: "Chanel", margin: 24, growth: "Flat", status: "stable", color: "bg-primary/50" },
  { name: "LVMH", margin: 26, growth: "-2%", status: "slowing", color: "bg-primary/40" },
  { name: "Kering", margin: 14, growth: "-13%", status: "crisis", color: "bg-destructive/60" },
];

const PerformanceSection = () => {
  return (
    <section className="py-32 px-6 bg-section-alt" id="performance">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <p className="font-sans-ui text-xs tracking-[0.3em] uppercase text-primary mb-6">
            02 — Performance
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="font-display text-4xl md:text-5xl font-medium mb-6">
            The Situation
          </h2>
          <p className="font-body text-xl text-muted-foreground max-w-3xl mb-16">
            Hermès and Richemont are the clear winners — the only major names whose share prices are in
            positive territory since January 2023. Revenue growth tells the more interesting story.
          </p>
        </ScrollReveal>

        {/* Operating margins visualization */}
        <ScrollReveal delay={0.2}>
          <div className="mb-6">
            <p className="font-sans-ui text-xs tracking-widest uppercase text-muted-foreground mb-8">
              Operating Margins & Growth
            </p>
          </div>
          <div className="space-y-4">
            {houses.map((house, i) => (
              <ScrollReveal key={house.name} delay={i * 0.08}>
                <div className="flex items-center gap-4 group">
                  <span className="font-display text-sm w-24 text-foreground group-hover:text-primary transition-colors">
                    {house.name}
                  </span>
                  <div className="flex-1 h-8 bg-background/50 rounded-sm overflow-hidden relative">
                    <motion.div
                      className={`h-full ${house.color} rounded-sm`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${(house.margin / 45) * 100}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: i * 0.1, ease: [0.25, 0.4, 0.25, 1] }}
                    />
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 font-sans-ui text-xs text-foreground/70">
                      {house.margin}%
                    </span>
                  </div>
                  <span className={`font-sans-ui text-xs w-16 text-right ${
                    house.status === "crisis" ? "text-destructive" :
                    house.status === "leader" || house.status === "strong" ? "text-primary" :
                    "text-muted-foreground"
                  }`}>
                    {house.growth}
                  </span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </ScrollReveal>

        {/* What's working */}
        <div className="grid md:grid-cols-2 gap-12 mt-24">
          <ScrollReveal>
            <div>
              <p className="font-sans-ui text-xs tracking-widest uppercase text-primary mb-6">What's Working</p>
              <ul className="space-y-4">
                {[
                  "Hermès leather goods have maintained desirability",
                  "Miu Miu — now ~30% of Prada's revenue — is a magnet for younger consumers",
                  "Ultra-luxury jewellery: Cartier and Tiffany & Co. have outperformed",
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 font-body text-base text-secondary-foreground">
                    <span className="text-primary mt-0.5">→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div>
              <p className="font-sans-ui text-xs tracking-widest uppercase text-muted-foreground mb-6">What's Not</p>
              <ul className="space-y-4">
                {[
                  "Watches as speculative assets — post-2021 boom has deflated",
                  "Overextended fashion brands — Gucci's ~19% annual revenue decline",
                  "Logo-heavy, trend-chasing products losing value perception",
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 font-body text-base text-muted-foreground">
                    <span className="text-muted-foreground/50 mt-0.5">→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default PerformanceSection;
