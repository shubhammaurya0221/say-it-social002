import { motion } from "framer-motion";
import SVGLogo from "../../assets/logo.svg";

export default function Navbar({ currentPage, onPageChange }) {
  const tabs = [
    { id: "smm", label: "Social Media" },
    { id: "websites", label: "Websites" },
  ];

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 glass-nav"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          className="font-display font-bold text-xl sm:text-2xl tracking-tight select-none cursor-pointer text-shimmer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => onPageChange("smm")}
        >
          <img src={SVGLogo} size="sm" />
          {/* <span className="text-white">Say It</span>
                    <span className="text-gradient ml-1.5">Social</span> */}
        </motion.div>

        {/* Page Toggle */}
        <div className="relative flex items-center bg-white/[0.06] rounded-full p-1 border border-white/10">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => onPageChange(tab.id)}
              className={`relative z-10 px-4 sm:px-6 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold transition-colors duration-300 ${
                currentPage === tab.id
                  ? "text-black"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {currentPage === tab.id && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-[linear-gradient(135deg,#0D4F4B_0%,#4CB6A6_45%,#E6C27A_100%)] rounded-full"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* CTA */}
        <a
          href={`https://wa.me/918460732085?text=${encodeURIComponent(
            currentPage === "smm"
              ? "Hello, I would like to understand more about Social Media Services provided by Say It Social."
              : "Hello, I would like to understand more about Website Design & Development services provided by Say It Social.",
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex group relative px-4 lg:px-6 py-2 
                     rounded-lg font-semibold text-black text-sm lg:text-base
                     bg-[linear-gradient(135deg,#0D4F4B_0%,#4CB6A6_45%,#E6C27A_100%)]
                     overflow-hidden
                     transition-all duration-300
                     hover:scale-[1.04]
                     hover:shadow-[0_0_35px_rgba(230,194,122,0.35)]"
        >
          {/* Layer 1: Glass Shine Overlay */}
          <span
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500
                     bg-[linear-gradient(120deg,transparent_20%,rgba(255,255,255,0.35)_50%,transparent_80%)]
                     blur-md"
          ></span>

          {/* Layer 2: Moving Light Sweep (Animated on Hover) */}
          <span
            className="absolute -left-1/2 top-0 h-full w-1/2 
                       bg-gradient-to-r from-transparent via-white/40 to-transparent
                       skew-x-12
                       opacity-0 group-hover:opacity-100
                       group-hover:animate-[shine_1.2s_ease_forwards]"
          ></span>

          {/* Button Content */}
          <span className="relative font-bold z-10">Connect With Our Team</span>
        </a>
      </div>
    </motion.nav>
  );
}
