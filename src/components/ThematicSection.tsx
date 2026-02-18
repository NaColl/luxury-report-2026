import ScrollReveal from "./ScrollReveal";

interface ThematicSectionProps {
  id: string;
  number: string;
  title: string;
  intro: string;
  paragraphs: string[];
  alt?: boolean;
}

const ThematicSection = ({ id, number, title, intro, paragraphs, alt }: ThematicSectionProps) => {
  return (
    <section className={`py-32 px-6 ${alt ? "bg-section-alt" : ""}`} id={id}>
      <div className="max-w-3xl mx-auto">
        <ScrollReveal>
          <p className="font-sans-ui text-xs tracking-[0.3em] uppercase text-primary mb-6">
            {number}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.05] mb-10">
            {title}
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="font-body text-xl md:text-2xl leading-relaxed text-secondary-foreground mb-8">
            {intro}
          </p>
        </ScrollReveal>

        {paragraphs.map((p, i) => (
          <ScrollReveal key={i} delay={0.1}>
            <p className="font-body text-lg leading-relaxed text-muted-foreground mb-6">{p}</p>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
};

export default ThematicSection;
