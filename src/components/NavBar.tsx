import { motion, useScroll, useTransform } from "framer-motion";

const NavBar = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.05], [0, 1]);
  const backdropBlur = useTransform(scrollYProgress, [0, 0.05], [0, 12]);

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex items-center justify-between"
      style={{
        opacity,
        backdropFilter: useTransform(backdropBlur, (v) => `blur(${v}px)`),
        backgroundColor: "hsla(0, 0%, 4%, 0.8)",
      }}
    >
      <span className="font-display text-sm text-foreground tracking-wide">
        2026 Luxury Landscape
      </span>
      <span className="font-sans-ui text-xs text-muted-foreground tracking-widest uppercase">
        Jurgis Pocius
      </span>
      {/* Progress bar */}
      <motion.div
        className="absolute bottom-0 left-0 h-px bg-primary origin-left"
        style={{ scaleX: scrollYProgress }}
      />
    </motion.nav>
  );
};

export default NavBar;
