import WebHeroSection from '../sections/websites/WebHeroSection';
import WebProjects from '../sections/websites/WebProjects';
import WebCTASection from '../sections/websites/WebCTASection';
import Footer from '../sections/Footer';

export default function WebsitesPage({ scrollY }) {
    return (
        <div className="bg-black text-white overflow-x-hidden">
            <WebHeroSection scrollY={scrollY} />
            <WebProjects />
            <WebCTASection />
            <Footer />
        </div>
    );
}
