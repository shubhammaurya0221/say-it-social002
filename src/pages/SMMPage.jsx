import HeroSection from '../sections/smm/HeroSection';
import ClientShowcase from '../sections/smm/ClientShowcase';
import ShowreelSection from '../sections/smm/ShowreelSection';
import CTASection from '../sections/smm/CTASection';
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

export default function SMMPage({ scrollY }) {
    return (
        <div className="bg-black text-white overflow-x-hidden relative">
            <FloatingParticles />
            <HeroSection scrollY={scrollY} />
            <ClientShowcase />
            <ShowreelSection />
            <CTASection />
            <Footer />
        </div>
    );
}
