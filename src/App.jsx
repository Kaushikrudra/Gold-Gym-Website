import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ArrowUp } from 'lucide-react';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Newsletter from './components/Newsletter';
import { PageSkeleton } from './components/LoadingSkeleton';

import Home from './pages/Home';
import Courses from './pages/Courses';
import Trainers from './pages/Trainers';
import About from './pages/About';
import Pricing from './pages/Pricing';
import Gallery from './pages/Gallery';
import Blog from './pages/Blog';
import Contact from './pages/Contact';

// Automatically scroll window to top on route transitions
function ScrollToTopOnRoute() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

// Layout wrapper including Navbar, Footer, Newsletter, and loading transition
function Layout() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const isAboveThreshold = window.scrollY > 400;
          setShowScrollTop((prev) => (prev !== isAboveThreshold ? isAboveThreshold : prev));
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Simulate shimmer loading animation on page transition
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 450); // Shimmer timing
    return () => clearTimeout(timer);
  }, [location.pathname]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="bg-bg-primary min-h-screen relative font-sans flex flex-col">
      {/* Persistent Navbar (contains OfferBanner sticky at top internally) */}
      <Navbar />

      {/* Main Page Area with loading skeletons */}
      <main className="flex-grow pt-24 transition-opacity duration-300">
        {isLoading ? (
          <PageSkeleton />
        ) : (
          <div className="animate-fade-in">
            <Outlet />
          </div>
        )}
      </main>

      {/* 8. Common Newsletter Segment */}
      <Newsletter />

      {/* Persistent Footer */}
      <Footer />

      {/* Scroll-to-top floating button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-gold-primary text-black flex items-center justify-center shadow-lg hover:bg-gold-accent hover:scale-110 active:scale-95 transition-all duration-300 ${
          showScrollTop ? 'opacity-100 translate-y-0 visible' : 'opacity-0 translate-y-4 invisible pointer-events-none'
        }`}
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-6 h-6 stroke-[2.5]" />
      </button>
    </div>
  );
}

function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTopOnRoute />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="courses" element={<Courses />} />
            <Route path="trainers" element={<Trainers />} />
            <Route path="about" element={<About />} />
            <Route path="pricing" element={<Pricing />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="blog" element={<Blog />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App;
