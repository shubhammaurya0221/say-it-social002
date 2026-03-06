import HeroSection from '../sections/smm/HeroSection';
import ClientShowcase from '../sections/smm/ClientShowcase';
import ShowreelSection from '../sections/smm/ShowreelSection';
import CTASection from '../sections/smm/CTASection';
import Footer from '../sections/Footer';

export default function SMMPage({ scrollY }) {
    return (
        <div className="bg-black text-white overflow-x-hidden">
            <HeroSection scrollY={scrollY} />
            <ClientShowcase />
            <ShowreelSection />
            <CTASection />
            <Footer />
        </div>
    );
}
