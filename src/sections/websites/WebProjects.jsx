import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Globe, Gauge } from 'lucide-react';
import { projects } from '../../data/projects';
import SectionHeading from '../../components/SectionHeading';

export default function WebProjects() {
    const [hoveredId, setHoveredId] = useState(null);

    return (
        <section id="website-portfolio" className="py-20 sm:py-32 px-4 sm:px-6 bg-black overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <SectionHeading highlight="Projects">Website</SectionHeading>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[300px]">
                    {projects.map((project, index) => {
                        const isHovered = hoveredId === project.id;
                        const span =
                            index === 0 ? 'md:col-span-6 md:row-span-2' :
                                index === 1 || index === 2 ? 'md:col-span-6 md:row-span-1' :
                                    'md:col-span-4 md:row-span-1';

                        return (
                            <motion.a
                                key={project.id}
                                href={project.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                viewport={{ once: true, margin: '-50px' }}
                                transition={{ duration: 0.7, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
                                className={`group relative ${span} cursor-pointer block h-full`}
                                onMouseEnter={() => setHoveredId(project.id)}
                                onMouseLeave={() => setHoveredId(null)}
                            >
                                <div className={`relative h-full w-full rounded-2xl sm:rounded-3xl glass-card border border-white/10 p-6 sm:p-8 md:p-10 transition-all duration-500 ease-out flex flex-col justify-between overflow-hidden ${isHovered ? 'scale-[1.02] border-gold/40 shadow-[0_0_50px_rgba(4,170,165,0.15)]' : ''
                                    }`}>
                                    {/* Top glow */}
                                    <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-teal/15 to-transparent blur-2xl opacity-40 pointer-events-none" />
                                    {/* Corner glow */}
                                    <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/[0.03] rounded-full blur-[80px] pointer-events-none group-hover:bg-teal/10 transition-colors duration-700" />

                                    {/* Tags + Metrics */}
                                    <div className="relative z-10">
                                        <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                                            {project.tags.map((tag) => (
                                                <span
                                                    key={tag.label}
                                                    className={`text-[10px] uppercase tracking-widest px-3 py-1 rounded-full border font-bold ${tag.color}`}
                                                >
                                                    {tag.label}
                                                </span>
                                            ))}
                                        </div>

                                        <h3 className={`font-bold text-white tracking-tight leading-tight font-display transition-all ${index === 0 ? 'text-2xl sm:text-3xl md:text-5xl' : 'text-xl sm:text-2xl md:text-3xl'
                                            }`}>
                                            {project.name}
                                        </h3>

                                        {/* Performance metrics — case study data per GUIDE.txt */}
                                        {project.metrics && (
                                            <div className="flex items-center gap-4 mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                                <div className="flex items-center gap-1.5 text-xs text-teal">
                                                    <Gauge className="w-3.5 h-3.5" />
                                                    <span className="font-semibold">{project.metrics.pageSpeed}</span>
                                                    <span className="text-gray-500">PageSpeed</span>
                                                </div>
                                                <div className="flex items-center gap-1.5 text-xs text-gold">
                                                    <Globe className="w-3.5 h-3.5" />
                                                    <span className="font-semibold">{project.metrics.seo}</span>
                                                    <span className="text-gray-500">SEO</span>
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    {/* Bottom */}
                                    <div className="relative z-10">
                                        <p className="text-gray-400 text-sm md:text-base mb-6 max-w-[90%] leading-relaxed line-clamp-3">
                                            {project.description}
                                        </p>
                                        <div className="flex items-end justify-between">
                                            <div className={`w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center transition-all duration-500 border border-white/10 ${isHovered ? 'bg-gold rotate-0 scale-110 opacity-100' : '-rotate-45 scale-75 opacity-0'
                                                }`}>
                                                <ArrowUpRight className="w-6 h-6 text-black" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.a>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
