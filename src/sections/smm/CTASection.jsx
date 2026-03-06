import { motion } from 'framer-motion';
import AnimatedCounter from '../../components/AnimatedCounter';

export default function CTASection() {
    return (
        <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-black relative overflow-hidden">
            {/* Background orbs with float */}
            <motion.div
                className="absolute top-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-br from-teal/10 to-transparent rounded-full blur-[100px]"
                animate={{ y: [0, -20, 0], scale: [1, 1.1, 1] }}
                transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
                className="absolute bottom-0 left-0 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-tr from-gold/10 to-transparent rounded-full blur-[100px]"
                animate={{ y: [0, 15, 0], scale: [1, 1.15, 1] }}
                transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
            />

            <div className="max-w-4xl mx-auto relative z-10">
                {/* Heading */}
                <motion.div
                    className="text-center mb-8 sm:mb-10"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight font-display">
                        Ready to Skyrocket Your
                        <br />
                        <span className="text-gradient">Social Presence?</span>
                    </h2>
                </motion.div>

                {/* CTA Button */}
                <motion.div
                    className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-14 sm:mb-16 px-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    <motion.a
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{
                          scale: 1.05,
                          boxShadow: "0px 0px 30px rgba(20, 184, 166, 0.4)",
                        }}
                        whileTap={{ scale: 0.98 }}
                        href="googleform"
                        className="group relative inline-flex items-center justify-center 
                         w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4
                         rounded-lg font-semibold text-black text-sm sm:text-base
                         bg-[linear-gradient(135deg,#0D4F4B_0%,#4CB6A6_45%,#E6C27A_100%)]
                         overflow-hidden transition-all duration-300 cursor-pointer"
                      >
                        <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-white/30 via-white/10 to-transparent blur-md"></span>
                        <span className="absolute -left-1/2 top-0 h-full w-1/2 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12 opacity-0 group-hover:opacity-100 group-hover:animate-[shine_1.2s_ease_forwards]"></span>
                        <span className="relative font-bold z-10">Start your Journey</span>
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
                        { value: '10', suffix: '+', label: 'Industries', color: 'text-teal' },
                        { value: '2', suffix: 'M+', label: 'Total Reach', color: 'text-gold' },
                        { value: '5', suffix: '+', label: 'Lead Velocity', color: 'text-teal' },
                    ].map((stat, i) => (
                        <motion.div
                            key={i}
                            className="space-y-1 sm:space-y-2"
                            whileHover={{ y: -5, scale: 1.05 }}
                            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                        >
                            <div className={`text-2xl sm:text-3xl md:text-4xl font-bold ${stat.color}`}>
                                <AnimatedCounter value={parseFloat(stat.value)} suffix={stat.suffix} colorClass={stat.color} />
                            </div>
                            <div className="text-[10px] sm:text-xs md:text-sm text-gray-500 uppercase tracking-widest leading-tight">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

