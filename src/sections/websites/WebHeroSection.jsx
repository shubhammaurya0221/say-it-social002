import { useMemo } from "react";
import { motion } from "framer-motion";
import AnimatedCounter from "../../components/AnimatedCounter";

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const wordReveal = {
  hidden: { y: "100%", opacity: 0 },
  visible: {
    y: "0%",
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

function FloatingParticles() {
  const particles = useMemo(
    () =>
      Array.from({ length: 20 }, (_, i) => ({
        id: i,
        size: Math.random() * 3 + 1,
        left: `${Math.random() * 100}%`,
        delay: `${Math.random() * 8}s`,
        duration: `${Math.random() * 6 + 6}s`,
        color:
          i % 2 === 0 ? "rgba(251, 176, 64, 0.35)" : "rgba(4, 170, 165, 0.3)",
      })),
    [],
  );

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <div
          key={p.id}
          className="particle"
          style={{
            width: p.size,
            height: p.size,
            left: p.left,
            bottom: "-5%",
            background: p.color,
            animationDelay: p.delay,
            animationDuration: p.duration,
          }}
        />
      ))}
    </div>
  );
}

export default function WebHeroSection({ scrollY }) {
  const parallax = scrollY * 0.3;
  const stats = [
    { num: 15, suffix: "+", label: "Sites Built", color: "text-gold" },
    { num: 98, suffix: "%", label: "Avg. PageSpeed", color: "text-teal" },
    { num: 300, suffix: "%", label: "Avg. Traffic Lift", color: "text-gold" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black pt-32 md:pt-24">
      {/* Background orbs with float animation */}
      <motion.div
        className="absolute -top-20 -right-20 w-[300px] h-[300px] bg-teal/20 rounded-full blur-[100px] mix-blend-lighten pointer-events-none"
        animate={{
          y: [parallax * 0.4, parallax * 0.4 - 20, parallax * 0.4],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-20 -left-20 w-[300px] h-[300px] bg-gold/15 rounded-full blur-[100px] mix-blend-lighten pointer-events-none"
        animate={{
          y: [-parallax * 0.4, -parallax * 0.4 + 20, -parallax * 0.4],
          scale: [1, 1.15, 1],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Floating particles */}
      <FloatingParticles />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="relative z-10 px-4 sm:px-6 max-w-5xl mx-auto text-center overflow-hidden"
      >
        <motion.h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 sm:mb-8 leading-tight text-white font-display px-2">
          <div className="overflow-hidden">
            <motion.span variants={wordReveal} className="block">
              Website Experiences That
            </motion.span>
          </div>
          <div className="overflow-hidden">
            <motion.span
              className="text-[#04aaa5] font-bold italic"
              whileHover={{
                textShadow: "0 0 20px rgba(4, 170, 165, 0.7)",
                scale: 1.02,
              }}
              transition={{
                duration: 0.4,
                ease: "easeInOut",
              }}
              style={{
                display: "inline-block",
                cursor: "default",
                textShadow: "0 0 8px rgba(4, 170, 165, 0.3)",
              }}
            >
              Convert & Captivate
            </motion.span>
          </div>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="text-base sm:text-lg md:text-xl text-gray-400 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed px-4"
        >
          Stunning, high-performance websites that combine beautiful design with
          seamless functionality. Built to drive business results.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={fadeUp}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 px-4"
        >
          <motion.a
            href={`https://wa.me/918460732085?text=${encodeURIComponent("Hello!")}`}
            whileHover={{
              scale: 1.05,
              borderColor: "#fbaf40",
              boxShadow: "0 0 20px rgba(251, 175, 64, 0.2)",
            }}
            target="_blank"
            whileTap={{ scale: 0.98 }}
            className="group relative w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 
                       border-2 border-white/20 text-white font-bold rounded-lg 
                       transition-all duration-300 text-center text-sm sm:text-base 
                       overflow-hidden bg-transparent cursor-pointer inline-block"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-teal/10 to-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <span className="absolute -top-[2px] -left-[2px] w-4 h-4 border-t-2 border-l-2 border-gold opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-tl-lg" />
            <span className="absolute -bottom-[2px] -right-[2px] w-4 h-4 border-b-2 border-r-2 border-gold opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-br-lg" />
            <span className="absolute -left-full top-0 h-full w-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-[35deg] transition-all duration-700 group-hover:left-[150%]" />
            <span className="relative z-10">Connect With Our Team</span>
          </motion.a>

          <motion.a
            href={'https://sayitsocial.digital/'}
            target="_blank"
            whileHover={{
              scale: 1.05,
              borderColor: "#fbaf40",
              boxShadow: "0 0 20px rgba(251, 175, 64, 0.2)",
            }}
            whileTap={{ scale: 0.98 }}
            className="group relative w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 
                       border-2 border-white/20 text-white font-bold rounded-lg 
                       transition-all duration-300 text-center text-sm sm:text-base 
                       overflow-hidden bg-transparent cursor-pointer inline-block"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-teal/10 to-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <span className="absolute -top-[2px] -left-[2px] w-4 h-4 border-t-2 border-l-2 border-gold opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-tl-lg" />
            <span className="absolute -bottom-[2px] -right-[2px] w-4 h-4 border-b-2 border-r-2 border-gold opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-br-lg" />
            <span className="absolute -left-full top-0 h-full w-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-[35deg] transition-all duration-700 group-hover:left-[150%]" />
            <span className="relative z-10">Our Website</span>
          </motion.a>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={fadeUp}
          className="flex flex-wrap justify-center items-center gap-6 md:gap-16 px-4"
        >
          {stats.map((stat, i) => (
            <div key={i} className="flex items-center gap-6 md:gap-16">
              <motion.div
                whileHover={{ y: -8, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="cursor-default text-center"
              >
                <div
                  className={`text-2xl sm:text-3xl md:text-4xl font-black ${stat.color} mb-1 sm:mb-2`}
                >
                  <AnimatedCounter
                    value={stat.num}
                    suffix={stat.suffix}
                    colorClass={stat.color}
                  />
                </div>
                <div className="text-[10px] sm:text-xs text-gray-500 uppercase tracking-[0.2em]">
                  {stat.label}
                </div>
              </motion.div>
              {i < stats.length - 1 && (
                <motion.div
                  className="hidden sm:block w-px h-12 bg-gradient-to-b from-transparent via-white/20 to-transparent"
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  transition={{ duration: 0.6, delay: 1.5 + i * 0.2 }}
                />
              )}
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
