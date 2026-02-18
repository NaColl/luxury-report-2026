import ScrollReveal from "./ScrollReveal";
import { motion } from "framer-motion";

const adviceData = [
  { brand: "Hermès", advice: "Keep playing your own game. Push further into 'life system' rather than 'object.' Use 40%+ margins and €12.8B net cash to invest in ateliers, materials science, and zero-deforestation — while expanding craft exhibitions and quietly elite sport and wellness touchpoints." },
  { brand: "LVMH", advice: "Lean into more personality and less clinical perfection. Use high-brow culture and unexpected collaborations to speak to younger clients who want intellectual as well as aesthetic engagement." },
  { brand: "Richemont", advice: "Keep doing what you do best, but make it feel even more like culture and even less like retail. Double down on museum-grade moments as the primary marketing channel." },
  { brand: "Kering", advice: "Go back to your roots — La Famiglia is a good start. You need your 'Tom Ford moment,' which won't come from following trends but from setting them." },
  { brand: "Prada", advice: "Treat Prada as the thinking person's Gucci. Push harder into high-brow fashion with an urban edge while treating Miu Miu as a movement, not a fad." },
  { brand: "Chanel", advice: "Protect the mystique but modernise the interface. Let material intelligence lead over logos. Make boutiques feel like cultural events and digital touchpoints feel invisible." },
  { brand: "Moncler", advice: "Move further from hype-beast territory and back to mountain roots. 'Luxurious Patagonia' is a better north star than the next drop." },
];

const FutureSection = () => {
  return (
    <section className="py-32 px-6" id="future">
      <div className="max-w-3xl mx-auto">
        <ScrollReveal>
          <p className="font-sans-ui text-xs tracking-[0.3em] uppercase text-primary mb-6">
            12 — The Future
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.05] mb-10">
            The Future of Luxury
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="font-body text-xl md:text-2xl leading-relaxed text-secondary-foreground mb-8">
            At the end of the day luxury isn't leather, diamonds or watches. From first principles, luxury
            is something scarce, something we don't see often. There are two key attributes that determine
            a luxury good: <span className="text-primary italic">desirability</span> and <span className="text-primary italic">scarcity</span>.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <p className="font-body text-lg text-muted-foreground mb-8">
            Luxury is not dying, but the old model of scaled aspiration is. The future belongs to houses that
            protect their mystique, treat culture and service as core products, and build worlds that a smaller,
            more discerning audience is desperate to enter.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="border border-border p-8 md:p-12 my-16">
            <p className="font-display text-2xl md:text-3xl text-foreground italic leading-relaxed">
              "Manufacture desire or manufacture scarcity."
            </p>
          </div>
        </ScrollReveal>

        {/* Advice per brand */}
        <ScrollReveal>
          <p className="font-sans-ui text-xs tracking-widest uppercase text-primary mb-8 mt-20">
            Advice for Each House
          </p>
        </ScrollReveal>

        <div className="space-y-0">
          {adviceData.map((item, i) => (
            <ScrollReveal key={item.brand} delay={i * 0.06}>
              <motion.div
                className="py-6 border-b border-border group"
                whileHover={{ x: 4 }}
                transition={{ duration: 0.3 }}
              >
                <p className="font-display text-lg text-primary mb-2">{item.brand}</p>
                <p className="font-body text-base text-muted-foreground">{item.advice}</p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FutureSection;
