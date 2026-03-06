import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Instagram, ArrowUpRight } from "lucide-react";
import { clients, clientCategories, categoryColors } from "../../data/clients";
import SectionHeading from "../../components/SectionHeading";

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
  exit: { opacity: 0, scale: 0.9, transition: { duration: 0.3 } },
};

export default function ClientShowcase() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredId, setHoveredId] = useState(null);

  const filteredClients =
    activeCategory === "All"
      ? clients
      : clients.filter((c) => c.category === activeCategory);

  return (
    <section
      id="clients"
      className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-black"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeading highlight="Clients">Our</SectionHeading>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10 sm:mb-14 px-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {clientCategories.map((cat, i) => {
            const isActive = activeCategory === cat;
            return (
              <motion.button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 sm:px-5 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 
  ${
    isActive
      ? "text-black bg-[linear-gradient(135deg,#04AAA5_0%,#00F2EA_50%,#04AAA5_100%)] shadow-[0_0_20px_rgba(4,170,165,0.35)]"
      : "bg-white/[0.04] border border-white/15 text-gray-400 hover:border-teal-400/50 hover:text-white"
  }`}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 * i }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {cat}
              </motion.button>
            );
          })}
        </motion.div>

        {/* Client Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredClients.map((client) => {
              const colors = categoryColors[client.category] || {};
              const isHovered = hoveredId === client.id;

              return (
                <motion.div
                  key={client.id}
                  layout
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="group relative cursor-pointer"
                  onMouseEnter={() => setHoveredId(client.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  <div
                    className={`relative h-full rounded-2xl glass-card border border-white/10 p-6 transition-all duration-500 ${
                      isHovered
                        ? "scale-[1.02] border-teal/40 shadow-[0_0_40px_rgba(4,170,165,0.2)]"
                        : ""
                    }`}
                  >
                    {/* Glow effect */}
                    <div className="absolute -top-16 -right-16 w-48 h-48 bg-gradient-to-br from-teal/15 to-gold/10 rounded-full blur-[80px] opacity-0 group-hover:opacity-60 transition-opacity duration-700 pointer-events-none" />

                    {/* Top row: category + instagram */}
                    <div className="flex items-start justify-between mb-4 relative z-10">
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-[10px] uppercase tracking-widest font-bold border ${colors.bg || "bg-white/10"} ${colors.text || "text-gray-300"} ${colors.border || "border-white/10"}`}
                      >
                        {client.category}
                      </span>
                      {client.instagramHandle && (
                        <motion.a
                          whileHover={{ scale: 1.2, rotate: 5 }}
                          href={`https://www.instagram.com/${client.instagramHandle}/`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-500 hover:text-gold transition-colors p-1.5 rounded-lg bg-white/[0.04]"
                        >
                          <Instagram className="w-4 h-4" />
                        </motion.a>
                      )}
                    </div>

                    {/* Brand name */}
                    <h3 className="text-xl font-bold text-white mb-2 relative z-10 font-display">
                      {client.brand}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-gray-400 mb-4 leading-relaxed relative z-10">
                      {client.description}
                    </p>

                    {/* Metric */}
                    <div className="flex items-end justify-between relative z-10">
                      <div>
                        <p className="text-[10px] text-gray-500 uppercase tracking-[0.2em] mb-0.5 font-bold">
                          Core Impact
                        </p>
                        <span className="text-gold font-bold text-lg">
                          {client.metric}
                        </span>
                      </div>
                      <div
                        className={`w-10 h-10 rounded-xl bg-gradient-to-br from-teal to-gold flex items-center justify-center transition-all duration-500 ${
                          isHovered
                            ? "rotate-0 scale-110 opacity-100"
                            : "-rotate-45 scale-75 opacity-0"
                        }`}
                      >
                        <ArrowUpRight className="w-5 h-5 text-black" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
