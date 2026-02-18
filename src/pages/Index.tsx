import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import TableOfContents from "@/components/TableOfContents";
import ExecutiveSummary from "@/components/ExecutiveSummary";
import PerformanceSection from "@/components/PerformanceSection";
import HouseSection from "@/components/HouseSection";
import ThematicSection from "@/components/ThematicSection";
import FutureSection from "@/components/FutureSection";
import Footer from "@/components/Footer";
import SectionDivider from "@/components/SectionDivider";
import hermesImg from "@/assets/hermes-editorial.jpg";
import lvmhImg from "@/assets/lvmh-editorial.jpg";
import pradaImg from "@/assets/prada-editorial.jpg";
import richemontImg from "@/assets/richemont-editorial.jpg";
import chanelImg from "@/assets/chanel-editorial.jpg";
import keringImg from "@/assets/kering-editorial.jpg";
import monclerImg from "@/assets/moncler-editorial.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      <HeroSection />
      <TableOfContents />
      <SectionDivider />
      <ExecutiveSummary />
      <SectionDivider />
      <PerformanceSection />
      <SectionDivider />

      {/* Hermès */}
      <HouseSection
        id="hermes"
        number="03"
        name="Hermès"
        subtitle="Real Physical Luxury"
        image={hermesImg}
        heroStat={{ value: "41%", label: "Recurring operating margin — higher than many software firms" }}
        intro="Hermès is the clear outlier in a stagnant luxury market. In 2025, revenue crossed €16 billion with the market valuing the house at a PE of around 49 versus roughly 20–25 for LVMH."
        body={[
          "Each Birkin is made by a single artisan over roughly 18–24 hours; there is no assembly line, which structurally caps supply at an estimated ~100,000 bags per year versus roughly 400,000 for Louis Vuitton. This enforced scarcity means every bag has a buyer, no need for discounting, and resale prices stay supported.",
          "Hermès bags have behaved more like an asset class than a fashion accessory. Estimates put the average appreciation of Birkin/Togo bags at around 14% annually, with a Birkin 35 in Togo leather now changing hands at roughly €11,600 and pristine models commonly reselling at 2× retail.",
          "Where most luxury houses spend heavily to rent cultural relevance from celebrities, Hermès has built a system that makes that unnecessary. LVMH spent around 37% of revenue on marketing, whereas Hermès spends closer to 4%, yet commands the higher multiple and stronger pricing power.",
        ]}
        keyPoints={[
          { title: "Slow Luxury as the Ultimate Flywheel", desc: "One artisan, one bag, 18–24 hours. Structural scarcity that caps supply and supports resale values permanently." },
          { title: "Cultural Events Over Hype", desc: "'Hermès in the Making' and 'Mystery at the Grooms' — live, traveling proofs of concept. You aren't buying stuff, you're buying craft, time, and story." },
          { title: "Vertical Integration as a Moat", desc: "24th leather facility opening in 2025. Direct management of tanning, textile printing, and watchmaking. Net cash position of more than €10 billion." },
          { title: "Built for the Long Game", desc: "H51 family holding structure insulates from short-termism. €3,000 profit-sharing bonus per employee in 2025." },
        ]}
        dangers={[
          "Real leather dependency may face sustainability and animal advocacy headwinds with new generations",
          "Main market Asia Pacific increasingly shifting to domestic brands",
          "Price as main revenue lever can only be pulled so much before consumers turn elsewhere",
          "New categories like watches have had limited success",
        ]}
      />

      <SectionDivider />

      {/* LVMH */}
      <HouseSection
        id="lvmh"
        number="04"
        name="LVMH"
        subtitle="Experiential Private Equity Playbook"
        image={lvmhImg}
        alt
        heroStat={{ value: "~50%", label: "Share of large-cap luxury group universe by revenue" }}
        intro="LVMH is essentially a private equity company in luxury company's clothing. Unlike Hermès, which emphasizes strict organic growth, LVMH actively prunes and expands its portfolio to optimize returns."
        body={[
          "It ruthlessly cuts business lines if they're no longer relevant — the disposal of Off-White in September 2024 and sale of DFS businesses in January 2026. It also aggressively consolidated winners, raising its stake in Loro Piana to 94% for €1.0 billion.",
          "High jewelry (Tiffany's Blue Book 2025 'Sea of Wonder') and Beauty (La Beauté Louis Vuitton) offset losses in Fashion & Leather and Wine & Spirits. Sephora acts as a 'feeder' — top-of-funnel brand acquisition funneling clients into higher-margin offerings.",
          "2026 and beyond will be the era of increasingly experiential offerings. LVMH is Official Partner of Formula 1, owns Cheval Blanc and Belmond luxury hotels, partnered with Accor to revive Orient Express, and owns Royal Van Lent, the high-end yacht builder.",
        ]}
        keyPoints={[
          { title: "Private Equity Playbook", desc: "Ruthless portfolio pruning and consolidation. Dispose of Off-White, acquire stakes in Moncler through Double R holding." },
          { title: "The Jewellery & Beauty Pivot", desc: "Tiffany's elevation strategy plus La Beauté Louis Vuitton launch — cross-selling high margin categories to offset fashion weakness." },
          { title: "Experiential Moat Building", desc: "F1 partnership, luxury hotels, Orient Express revival, yacht building — making the brand a world you inhabit, not just wear." },
          { title: "Supply Chain AI", desc: "Agentic AI and Digital Supply Chain Twins to model factory logistics, improve efficiency and expand margins through consolidation." },
        ]}
        dangers={[
          "€1.065 billion lost from exchange rate fluctuations — questioning FX hedging strategy",
          "Heavy reliance on celebrity ambassadors creates volatility exposure",
          "Negative growth posted in all key markets",
        ]}
      />

      <SectionDivider />

      {/* Prada */}
      <HouseSection
        id="prada"
        number="05"
        name="Prada"
        subtitle="The Miu Miu Success Story"
        image={pradaImg}
        heroStat={{ value: "€5.4B", label: "Revenue — up 17% with four straight years of double-digit growth" }}
        intro="Prada Group enters 2026 in an unusually strong position: €5.4bn revenue (+17%), €1.28bn EBIT (+21%), 23.6% EBIT margin, and net cash rising to ~€600m."
        body={[
          "The issue is not demand — it's concentration and cadence. The group is now a two-speed machine: Miu Miu hypergrowth versus a Prada mothership that is stable but slower. If Miu Miu's aesthetic moment cools, the group needs Prada to carry more weight.",
          "Miu Miu's 'schoolgirl chaos' aesthetic became a dominant cultural reference, translating into extraordinary retail momentum through cultural programming: Women's Tales films, Literary Clubs, Atheneum pop-ups, and collabs like New Balance × Coco Gauff.",
          "The Versace acquisition at €1.25bn EV adds complexity but also a non-overlapping customer and a stronger Americas mix. Donatella stepped down; Dario Vitale is installed to rebuild product and relevance.",
        ]}
        keyPoints={[
          { title: "Keep the Rocket Burning", desc: "Miu Miu treated as primary growth engine. Cultural programming sustains heat — Women's Tales, Literary Clubs, immersive pop-ups across Asia." },
          { title: "Raise Prada's Growth Rate", desc: "Revitalising icons like the Galleria bag, adding new lines (Explore, Etude, Dada), cultural platforms like Prada Mode and Art Basel activations." },
          { title: "The Versace Gamble", desc: "Distressed-price acquisition with clean identity reset. Lorenzo Bertelli chairing. Near-term margin drag for medium-term upside." },
          { title: "Control Model", desc: "~90% DTC revenue, 26 owned factories. Pricing discipline, data ownership, minimal wholesale leakage." },
        ]}
      />

      <SectionDivider />

      {/* Richemont */}
      <HouseSection
        id="richemont"
        number="06"
        name="Richemont"
        subtitle="The Hard-Luxury Benchmark"
        image={richemontImg}
        alt
        heroStat={{ value: "€6.5B", label: "Net cash position — a fortress balance sheet" }}
        intro="Richemont enters 2026 as the hard-luxury benchmark: jewellery and watches carrying the group through a messy macro, even as cost inflation and China softness quietly bite."
        body={[
          "Jewellery is the engine: Cartier, Van Cleef & Arpels and Buccellati have turned into an industrial compounding machine, with high single to mid-teens growth and operating margins in the low-30% range even after the spike in gold.",
          "The playbook is deliberately conservative — lean on 'timeless' platforms like Panthère and Alhambra, then punctuate with high-jewellery events. Vacheron Constantin placed 'La Quête du Temps' inside the Louvre, turning it into a culturally situated object.",
          "Three-quarters of revenue now comes from its own boutiques and e-commerce. The clean exit from YNAP de-cluttered the P&L, with hard luxury placed back at the centre.",
        ]}
        keyPoints={[
          { title: "Jewellery as Industrial Compounder", desc: "Cartier, Van Cleef & Arpels growing at double-digit rates. 'Timeless' platforms like Panthère and Alhambra with high-jewellery events." },
          { title: "Cultural Positioning Over Retail", desc: "Vacheron Constantin at the Louvre, Cartier's En Équilibre presentations, Van Cleef's l'Île au Trésor worlds." },
          { title: "DTC Dominance", desc: "~75% of revenue from own boutiques and e-commerce. Retail growth outpacing wholesale." },
          { title: "Portfolio Discipline", desc: "YNAP exit, Vhernier acquisition. Focus on hard luxury, accepting fashion losses as structural." },
        ]}
        dangers={[
          "Specialist Watchmakers division profitability squeezed by strong franc and higher gold costs",
          "Fashion and accessories tail (Chloé, Dunhill, Alaïa) remains lossmaking",
        ]}
      />

      <SectionDivider />

      {/* Chanel */}
      <HouseSection
        id="chanel"
        number="07"
        name="Chanel"
        subtitle="Surprisingly Innovative"
        image={chanelImg}
        heroStat={{ value: "~38,400", label: "Headcount — rose even as peers froze hiring" }}
        intro="Chanel is navigating a cyclical slowdown from a position of strength. Privately held, debt-free, and insulated from quarterly market pressure. 2024 became a year of record investment."
        body={[
          "Operating margins compressed to roughly 24%, with profits down sharply despite retaining strong absolute cash generation. The core issue is not desirability, but expectation — every product and interaction must feel unquestionably earned.",
          "Chanel committed to net-zero emissions by 2040, sourced 99% of electricity from renewables, and continued upgrading boutiques to LEED standards. These moves signal long-term intent rather than short-term optimisation.",
        ]}
        keyPoints={[
          { title: "Investing Through the Downturn", desc: "Expanded boutiques and flagships globally. CHANEL & moi Ateliers focused on care, repair, and longevity." },
          { title: "AI With Commercial Lift", desc: "Lipscanner: +32% lipstick conversion, –27% return requests. Storyteller Nail: 45,000 micro-stories, 3× view duration. Real AI, not innovation theatre." },
          { title: "Physical Retail as Culture", desc: "Métiers d'art shows inspired by coromandel screens, Cruise Replica shows — cultural heat over mere impressions." },
          { title: "Securing Savoir-Faire", desc: "MIT Media Lab partnerships, stake in MB&F independent watchmaker, intrapreneurship programmes." },
        ]}
      />

      <SectionDivider />

      {/* Kering */}
      <HouseSection
        id="kering"
        number="08"
        name="Kering"
        subtitle="A Prime Example of What Can Go Wrong"
        image={keringImg}
        alt
        heroStat={{ value: "-94%", label: "Net income decline — group revenue fell 13%" }}
        intro="Kering is a prime example of what can go wrong in modern luxury. Brand desirability has eroded across the portfolio: Gucci is the biggest loser, Alexander McQueen suffering 'sharp decline in footfall,' Balenciaga no longer generating previous interest."
        body={[
          "Kering is over-indexed to aspirational clients — the segment that has cooled the most — and has relied more heavily on wholesale than peers. Gucci deliberately cut wholesale revenue by 34% to limit access to only the 'most exclusive accounts.'",
        ]}
        keyPoints={[
          { title: "Creative Shock Therapy", desc: "Demna (ex-Balenciaga) became Gucci's Artistic Director. Piccioli (ex-Valentino) appointed at Balenciaga. 'La Famiglia' collection generating renewed interest." },
          { title: "Leadership Overhaul", desc: "Luca de Meo as Group CEO. Francesca Bellettini as President/CEO of Gucci. Separation of Chairman and CEO roles." },
          { title: "Beauty Strategic Pivot", desc: "Sold Kering Beauté to L'Oréal for €4 billion. Shifted to high-margin royalty model removing execution risk." },
          { title: "Vertical Integration Push", desc: "Acquired Raselli Franco Group, Visard, and Lenti to fully verticalize Hard Luxury production." },
        ]}
        dangers={[
          "Gucci's ~19% annual revenue decline recalls its 1980s overexpansion",
          "Losing in all geographies simultaneously",
          "Over-reliance on aspirational consumers — the segment that has cooled most",
        ]}
      />

      <SectionDivider />

      {/* Moncler */}
      <HouseSection
        id="moncler"
        number="09"
        name="Moncler"
        subtitle="Back to the Mountain"
        image={monclerImg}
        heroStat={{ value: "78.1%", label: "Gross margins — with nearly 90% DTC sales" }}
        intro="Moncler Group sits in the middle tier of luxury performers. It has avoided sharp declines, but is not matching the momentum of Hermès or Richemont."
        body={[
          "The primary issue is stagnating growth. Revenue was –1% reported and ~0% at constant FX for the first nine months of 2025. Weak tourism flows hit EMEA and Japan, while deliberate wholesale cuts create short-term drag.",
          "The brand's technical innovation has become normalized, making some consumers question whether €1,000+ price points are justified — especially as Arc'teryx expands consumer choice. The 'Warmer Together' campaign signals a conscious course correction back toward function, warmth, and human connection.",
        ]}
        keyPoints={[
          { title: "DTC Acceleration", desc: "Pruning wholesale aggressively to protect pricing and brand environment. Americas outperforming, driven by strong US DTC demand." },
          { title: "From Hype to Community", desc: "Grenoble AW26 show in Aspen — snowmobile expedition to a mountain runway. Physical exclusivity creating durable cultural value." },
          { title: "Re-anchoring in Purpose", desc: "'Warmer Together' — deliberate move from hype-beast dynamics toward emotional relevance and functional credibility." },
          { title: "Two-Brand Architecture", desc: "Moncler and Stone Island serve distinct audiences — global luxury performance versus technical street culture." },
        ]}
      />

      <SectionDivider />

      {/* Sustainability */}
      <ThematicSection
        id="sustainability"
        number="10 — Sustainability"
        title="Sustainability May Be Overrated"
        alt
        intro="For a decade, the luxury narrative has insisted that sustainability is both a moral imperative and a commercial edge. The data suggests something colder: sustainability is rapidly becoming table stakes, not a growth engine."
        paragraphs={[
          "Across major listed luxury names, there is no meaningful positive correlation between ESG scores and either revenue growth or share price performance. In fact, lower-scoring ESG names have often outperformed over three years.",
          "Hermès, Prada and Richemont — three of the strongest stock and revenue performers — sit at the bottom of the ESG rankings table in 2025. Consumers may say sustainability matters at checkout, but in aggregate they still reward desirability, scarcity, and execution first.",
          "The EU's Digital Product Passport regime, expected mandatory by 2030, will force brands to attach a digital ID to products. This means sustainability will look less like a differentiator and more like a licence to operate.",
          "Where sustainability may actually matter commercially is not in first-sale demand but in supply chain economics and secondary-market value. Digital Product Passports open the door to authenticated resale at scale — a bag with cryptographically secure provenance carries higher residual value.",
          "The paradox: sustainability is non-optional and increasingly codified in law, yet the brands delivering the best financial outcomes are not the ones scoring highest on ESG indices. The real battleground is shifting to supply chain and data infrastructure.",
        ]}
      />

      <SectionDivider />

      {/* AI */}
      <ThematicSection
        id="ai"
        number="11 — Technology"
        title="AI as a Means, Not the End"
        intro="The AI play isn't as straightforward for luxury brands as it is for regular fashion brands. AI will likely be restricted to backend efficiency rather than frontend marketing, as a white-glove touch remains key."
        paragraphs={[
          "For conglomerates like LVMH, AI will increase supply chain efficiency via predictive re-routing, regional vendor risk analysis, and better inventory level predictions. Luxury houses are already training LLMs on their archives to help designers come up with brand-native ideas.",
          "Online customer service is a weak point for many luxury brands. AI will not only improve general service but also introduce new high-touch concierge services that remember key details about VIP customers.",
          "Third-party AI personal shopper startups like Daydream risk disrupting the direct relationship between luxury brands and clients. These platforms likely already know more about their users than the brands themselves.",
          "Generative Engine Optimization — optimizing for ChatGPT, Claude, Gemini search queries and shopping assistants — brings a new dimension to product strategy. Physical live experiences will become even more important differentiators in a world of AI.",
          "The end goal with AI for luxury brands is simple: improve margins so that saved money can be used to enhance experiences. The brand with the most data will win in the age of AI.",
        ]}
      />

      <SectionDivider />

      <FutureSection />

      <Footer />
    </div>
  );
};

export default Index;
