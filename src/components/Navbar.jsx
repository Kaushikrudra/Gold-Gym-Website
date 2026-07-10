import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import OfferBanner from './OfferBanner';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const isScrolled = window.scrollY > 50;
          setScrolled((prev) => (prev !== isScrolled ? isScrolled : prev));
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'HOME', href: '/' },
    { name: 'ABOUT', href: '/about' },
    { name: 'COURSES', href: '/courses' },
    { name: 'TRAINERS', href: '/trainers' },
    { name: 'PRICING', href: '/pricing' },
    { name: 'GALLERY', href: '/gallery' },
    { name: 'BLOG', href: '/blog' },
    { name: 'CONTACT', href: '/contact' }
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-bg-primary/98 border-b border-gold-dark/40 py-2' : 'bg-bg-primary border-b border-gold-dark/20 py-3'
    }`}>
      {/* 5. Sticky Top Offer Banner */}
      <OfferBanner />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-2">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-black tracking-wider text-gold-primary hover:text-gold-accent transition-colors duration-300">
              GOLD<span className="text-white">_</span>GYM
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-6">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-xs font-bold tracking-widest transition-colors duration-300 ${
                    location.pathname === item.href 
                      ? 'text-gold-primary' 
                      : 'text-text-body hover:text-gold-primary'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            
            {/* Contact Me Button */}
            <Link
              to="/contact"
              className="inline-block px-6 py-2.5 text-xs font-bold tracking-widest text-white border border-gold-primary rounded-none hover:bg-gold-primary hover:text-black transition-all duration-300"
            >
              CONTACT ME
            </Link>
          </div>

          {/* Mobile hamburger menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gold-primary hover:text-white hover:bg-bg-secondary focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden fixed inset-0 top-[110px] z-40 bg-bg-primary/98 backdrop-blur-lg border-t border-gold-dark/20 transition-all duration-300 ease-in-out ${
        isOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-4 invisible pointer-events-none'
      }`}>
        <div className="px-4 pt-8 pb-12 space-y-6 text-center">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              onClick={() => setIsOpen(false)}
              className={`block text-lg font-bold tracking-widest transition-colors duration-300 py-2 ${
                location.pathname === item.href ? 'text-gold-primary font-black' : 'text-white hover:text-gold-primary'
              }`}
            >
              {item.name}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="inline-block mt-4 px-8 py-3 text-sm font-bold tracking-widest text-white border border-gold-primary rounded-none hover:bg-gold-primary hover:text-black transition-all duration-300"
          >
            CONTACT ME
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
