import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Globe, Gauge } from "lucide-react";
import { projects } from "../../data/projects";
import SectionHeading from "../../components/SectionHeading";

function FloatingParticles() {
  const particles = useMemo(
    () =>
      Array.from({ length: 50 }, (_, i) => ({
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

export default function WebProjects() {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section
      id="website-portfolio"
      className="relative py-16 sm:py-24 px-4 sm:px-6 bg-black overflow-hidden"
    >
      <FloatingParticles/>
      <div className="max-w-7xl mx-auto">
        <SectionHeading highlight="Projects">Website</SectionHeading>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 mt-10">

          {projects.map((project, index) => {
            const isHovered = hoveredId === project.id;

            return (
              <motion.a
                key={project.id}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group relative block cursor-pointer"
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <div
                  className={`relative min-h-[260px] sm:min-h-[300px] w-full rounded-2xl sm:rounded-3xl glass-card border border-white/10 p-5 sm:p-7 transition-all duration-500 flex flex-col justify-between overflow-hidden ${
                    isHovered
                      ? "scale-[1.02] border-gold/40 shadow-[0_0_40px_rgba(4,170,165,0.15)]"
                      : ""
                  }`}
                >
                  {/* Top glow */}
                  <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-teal/15 to-transparent blur-2xl opacity-40 pointer-events-none" />

                  {/* Corner glow */}
                  <div className="absolute -top-20 -right-20 w-56 h-56 bg-white/[0.03] rounded-full blur-[70px] pointer-events-none group-hover:bg-teal/10 transition-colors duration-700" />

                  {/* Tags + Title */}
                  <div className="relative z-10">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.tags.map((tag) => (
                        <span
                          key={tag.label}
                          className={`text-[9px] sm:text-[10px] uppercase tracking-widest px-3 py-1 rounded-full border font-bold ${tag.color}`}
                        >
                          {tag.label}
                        </span>
                      ))}
                    </div>

                    <h3 className="font-bold text-white text-lg sm:text-xl md:text-2xl leading-tight font-display">
                      {project.name}
                    </h3>

                    {/* Metrics */}
                    {project.metrics && (
                      <div className="flex flex-wrap items-center gap-3 mt-2">
                        <div className="flex items-center gap-1.5 text-xs text-teal">
                          <Gauge className="w-3.5 h-3.5" />
                          <span className="font-semibold">
                            {project.metrics.pageSpeed}
                          </span>
                          <span className="text-gray-500">PageSpeed</span>
                        </div>

                        <div className="flex items-center gap-1.5 text-xs text-gold">
                          <Globe className="w-3.5 h-3.5" />
                          <span className="font-semibold">
                            {project.metrics.seo}
                          </span>
                          <span className="text-gray-500">SEO</span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Bottom */}
                  <div className="relative z-10 mt-4">
                    <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
                      {project.description}
                    </p>
                    
                    <div className="flex items-end justify-end mt-4 relative z-10">
                      <div
                        className={`group relative w-10 h-10 rounded-xl 
                        border-2 border-transparent 
                        flex items-center justify-center
                        transition-all duration-500
                        hover:border-[#fbaf40] 
                        hover:shadow-[0_0_15px_rgba(251,175,64,0.6)]
                        ${isHovered ? "rotate-0 scale-110 opacity-100" : "-rotate-45 scale-75 opacity-0"}
                        `}
                                            >
                                              {/* animated glow layer */}
                                              <span className="absolute inset-0 rounded-xl border-2 border-[#fbaf40] opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
                       

                        <ArrowUpRight className="w-5 h-5 text-[#fbaf40] relative z-10" />
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