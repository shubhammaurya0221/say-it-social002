import WebHeroSection from '../sections/websites/WebHeroSection';
import WebProjects from '../sections/websites/WebProjects';
import WebCTASection from '../sections/websites/WebCTASection';
import Footer from '../sections/Footer';
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


export default function WebsitesPage({ scrollY }) {
    return (
        <div className="relative bg-black text-white overflow-x-hidden">
            <FloatingParticles/>
            <WebHeroSection scrollY={scrollY} />
            <WebProjects />
            <WebCTASection />
            <Footer />
        </div>
    );
}
