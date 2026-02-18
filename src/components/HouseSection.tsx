import ScrollReveal from "./ScrollReveal";
import { ReactNode } from "react";

interface HouseSectionProps {
  id: string;
  number: string;
  name: string;
  subtitle: string;
  heroStat?: { value: string; label: string };
  intro: string;
  body: string[];
  keyPoints: { title: string; desc: string }[];
  dangers?: string[];
  alt?: boolean;
  children?: ReactNode;
  image?: string;
}

const HouseSection = ({
  id, number, name, subtitle, heroStat, intro, body, keyPoints, dangers, alt = false, children, image,
}: HouseSectionProps) => {
  return (
    <section className={`py-32 px-6 ${alt ? "bg-section-alt" : ""}`} id={id}>
      <div className="max-w-3xl mx-auto">
        <ScrollReveal>
          <p className="font-sans-ui text-xs tracking-[0.3em] uppercase text-primary mb-6">
            {number} — {name}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.05] mb-4">
            {name}
          </h2>
          <p className="font-display text-xl md:text-2xl text-muted-foreground italic mb-10">
            {subtitle}
          </p>
        </ScrollReveal>

        {image && (
          <ScrollReveal delay={0.12}>
            <div className="my-12 overflow-hidden">
              <img
                src={image}
                alt={`${name} editorial`}
                className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                loading="lazy"
              />
            </div>
          </ScrollReveal>
        )}

        {heroStat && (
          <ScrollReveal delay={0.15}>
            <div className="border border-border p-8 mb-12">
              <p className="font-display text-5xl md:text-6xl text-primary">{heroStat.value}</p>
              <p className="font-sans-ui text-xs tracking-widest uppercase text-muted-foreground mt-2">
                {heroStat.label}
              </p>
            </div>
          </ScrollReveal>
        )}

        <ScrollReveal delay={0.2}>
          <p className="font-body text-xl md:text-2xl leading-relaxed text-secondary-foreground mb-8">
            {intro}
          </p>
        </ScrollReveal>

        {body.map((paragraph, i) => (
          <ScrollReveal key={i} delay={0.1}>
            <p className="font-body text-lg leading-relaxed text-muted-foreground mb-6">
              {paragraph}
            </p>
          </ScrollReveal>
        ))}

        {children}

        {keyPoints.length > 0 && (
          <div className="mt-16 space-y-0">
            <ScrollReveal>
              <p className="font-sans-ui text-xs tracking-widest uppercase text-primary mb-8">
                Key Strategic Moves
              </p>
            </ScrollReveal>
            {keyPoints.map((point, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <div className="py-5 border-b border-border">
                  <p className="font-display text-lg text-foreground mb-1">{point.title}</p>
                  <p className="font-body text-base text-muted-foreground">{point.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        )}

        {dangers && dangers.length > 0 && (
          <div className="mt-16">
            <ScrollReveal>
              <p className="font-sans-ui text-xs tracking-widest uppercase text-muted-foreground mb-6">
                Risks & Vulnerabilities
              </p>
            </ScrollReveal>
            <div className="space-y-3">
              {dangers.map((d, i) => (
                <ScrollReveal key={i} delay={i * 0.08}>
                  <p className="font-body text-base text-muted-foreground flex gap-3">
                    <span className="text-destructive/60 shrink-0">⬥</span>
                    {d}
                  </p>
                </ScrollReveal>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default HouseSection;
