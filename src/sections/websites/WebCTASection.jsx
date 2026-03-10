import { motion } from 'framer-motion';
import AnimatedCounter from '../../components/AnimatedCounter';
import { useMemo } from 'react';

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
          i % 2 === 0 ? "rgba(4, 170, 165, 0.4)" : "rgba(251, 176, 64, 0.3)",
      })),
    []
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

export default function WebCTASection() {
    return (
        <section className="py-20 sm:py-24 md:py-32 px-4 sm:px-6 bg-black relative overflow-hidden">
            <motion.div
                className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-gold/10 to-transparent rounded-full blur-[100px]"
                animate={{ y: [0, -20, 0], scale: [1, 1.1, 1] }}
                transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
                className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-teal/10 to-transparent rounded-full blur-[100px]"
                animate={{ y: [0, 15, 0], scale: [1, 1.15, 1] }}
                transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
            />
            <FloatingParticles/>
            <div className="max-w-4xl mx-auto relative z-10">
                <motion.div
                    className="text-center mb-10 sm:mb-12"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight font-display">
                        Ready to Build Your
                        <br />
                        <span className="bg-[#04aaa5] bg-clip-text text-transparent">
                            Digital Masterpiece?
                        </span>
                    </h2>
                </motion.div>

                {/* CTA */}
                <motion.div
                    className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-14 sm:mb-16 px-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    <motion.a
                        href={'https://docs.google.com/forms/d/e/1FAIpQLSeUXXa9lXRFU7YtW3CKF_gEf4dL0fAA4aP81gty1gqJmEc3lQ/viewform'}
                        whileHover={{
                          scale: 1.05,
                          borderColor: "#fbaf40",
                          boxShadow: "0 0 20px rgba(251, 175, 64, 0.2)",
                        }}
                        target="_blank"
                        whileTap={{ scale: 0.98 }}
                        className="group relative w-full sm:w-auto px-6 sm:px-8 py-2 sm:py-3 
                                   border-2 border-white/20 text-white font-bold rounded-lg 
                                   transition-all duration-300 text-center text-sm sm:text-base 
                                   overflow-hidden bg-transparent cursor-pointer inline-block"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-teal/10 to-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <span className="absolute -top-[2px] -left-[2px] w-4 h-4 border-t-2 border-l-2 border-gold opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-tl-lg" />
            <span className="absolute -bottom-[2px] -right-[2px] w-4 h-4 border-b-2 border-r-2 border-gold opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-br-lg" />
            <span className="absolute -left-full top-0 h-full w-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-[35deg] transition-all duration-700 group-hover:left-[150%]" />
            <span className="relative z-10">Start your Journey</span>
          </motion.a>
                </motion.div>

                {/* Stats */}
                <motion.div
                    className="grid grid-cols-3 gap-4 sm:gap-6 md:gap-12 text-center border-t border-white/10 pt-8 sm:pt-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                >
                    {[
                        { value: 15, suffix: '+', label: 'Sites Built', color: 'text-gold' },
                        { value: 98, suffix: '%', label: 'Avg. PageSpeed', color: 'text-teal' },
                        { value: 300, suffix: '%', label: 'Avg. Traffic Lift', color: 'text-gold' },
                    ].map((stat, i) => (
                        <motion.div
                            key={i}
                            className="space-y-1 sm:space-y-2"
                            whileHover={{ y: -5, scale: 1.05 }}
                            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                        >
                            <div className={`text-2xl sm:text-3xl md:text-4xl font-bold ${stat.color}`}>
                                <AnimatedCounter value={stat.value} suffix={stat.suffix} colorClass={stat.color} />
                            </div>
                            <div className="text-[10px] sm:text-xs md:text-sm text-gray-500 uppercase tracking-widest">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

