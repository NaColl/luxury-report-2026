import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const chapters = [
  { id: "market", number: "01", title: "More than a Cyclical Contraction" },
  { id: "performance", number: "02", title: "The Situation — Performance" },
  { id: "hermes", number: "03", title: "Hermès — Real Physical Luxury" },
  { id: "lvmh", number: "04", title: "LVMH — Experiential Private Equity" },
  { id: "prada", number: "05", title: "Prada — The Miu Miu Success Story" },
  { id: "richemont", number: "06", title: "Richemont — The Hard-Luxury Benchmark" },
  { id: "chanel", number: "07", title: "Chanel — Surprisingly Innovative" },
  { id: "kering", number: "08", title: "Kering — What Can Go Wrong" },
  { id: "moncler", number: "09", title: "Moncler — Back to the Mountain" },
  { id: "sustainability", number: "10", title: "Sustainability May Be Overrated" },
  { id: "ai", number: "11", title: "AI as a Means, Not the End" },
  { id: "future", number: "12", title: "The Future of Luxury" },
];

const TableOfContents = () => {
  return (
    <section className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <p className="font-sans-ui text-xs tracking-[0.3em] uppercase text-primary mb-8">Contents</p>
        </ScrollReveal>
        <div className="space-y-0">
          {chapters.map((chapter, i) => (
            <ScrollReveal key={chapter.id} delay={i * 0.05}>
              <motion.a
                href={`#${chapter.id}`}
                className="group flex items-baseline gap-6 py-4 border-b border-border hover:border-primary/40 transition-colors duration-500"
                whileHover={{ x: 8 }}
                transition={{ duration: 0.3 }}
              >
                <span className="font-sans-ui text-xs tracking-widest text-muted-foreground group-hover:text-primary transition-colors">
                  {chapter.number}
                </span>
                <span className="font-display text-xl md:text-2xl text-foreground group-hover:text-primary transition-colors">
                  {chapter.title}
                </span>
              </motion.a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TableOfContents;
