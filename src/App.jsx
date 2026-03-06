import { useState, useEffect, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import SMMPage from './pages/SMMPage';
import WebsitesPage from './pages/WebsitesPage';
import SplashScreen from './components/SplashScreen';

export default function App() {
    const [currentPage, setCurrentPage] = useState('smm');
    const [scrollY, setScrollY] = useState(0);
    const [showSplash, setShowSplash] = useState(true);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handlePageChange = (page) => {
        setCurrentPage(page);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleSplashComplete = useCallback(() => {
        setShowSplash(false);
    }, []);

    return (
        <div className="bg-black text-white overflow-x-hidden">
            {/* Splash Screen */}
            <AnimatePresence>
                {showSplash && <SplashScreen onComplete={handleSplashComplete} />}
            </AnimatePresence>

            {/* Main Content */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: showSplash ? 0 : 1 }}
                transition={{ duration: 0.8, delay: 0.1 }}
            >
                <Navbar currentPage={currentPage} onPageChange={handlePageChange} />
                <AnimatePresence mode="wait">
                    {currentPage === 'smm' && (
                        <motion.div
                            key="smm"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <SMMPage scrollY={scrollY} />
                        </motion.div>
                    )}
                    {currentPage === 'websites' && (
                        <motion.div
                            key="websites"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <WebsitesPage scrollY={scrollY} />
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </div>
    );
}
