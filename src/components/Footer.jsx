import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6 text-gold-primary" />,
      title: 'LOCATION',
      detail1: 'GORAKHPUR / GOLBAZAR',
      detail2: 'JABALPUR, MP, INDIA'
    },
    {
      icon: <Phone className="w-6 h-6 text-gold-primary" />,
      title: 'PHONE NUMBER',
      detail1: '7049333222',
      detail2: '7089333222'
    },
    {
      icon: <Mail className="w-6 h-6 text-gold-primary" />,
      title: 'EMAIL ADDRESS',
      detail1: 'support@neofitnessgym.com',
      detail2: 'info@neofitnessgym.com'
    }
  ];

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
    <footer className="bg-bg-primary pt-24 relative overflow-hidden">
      {/* Top divider */}
      <div className="absolute top-0 left-0 w-full h-[3px] gold-gradient" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Contact Info (3-Column Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20 text-center">
          {contactInfo.map((info, idx) => (
            <div key={idx} className="flex flex-col items-center group">
              {/* Gold circle icon */}
              <div className="w-16 h-16 rounded-full border border-gold-primary/30 flex items-center justify-center mb-6 bg-bg-secondary group-hover:border-gold-primary group-hover:bg-gold-primary/10 transition-all duration-300 transform group-hover:scale-110">
                {info.icon}
              </div>
              
              {/* Title */}
              <h3 className="text-sm font-black text-white tracking-widest uppercase mb-3">
                {info.title}
              </h3>
              
              {/* Details */}
              <p className="text-text-body text-xs tracking-wider mb-1">
                {info.detail1}
              </p>
              <p className="text-text-body text-xs tracking-wider">
                {info.detail2}
              </p>
            </div>
          ))}
        </div>

        {/* Contact Form for visual completeness */}
        <div className="max-w-3xl mx-auto bg-bg-secondary border border-gold-dark/15 p-8 sm:p-12 mb-24">
          <h3 className="text-2xl font-black text-white text-center uppercase tracking-wider mb-8">
            GET IN TOUCH WITH <span className="text-gold-primary">US</span>
          </h3>
          
          <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <input 
                type="text" 
                placeholder="YOUR NAME"
                className="w-full bg-bg-primary border border-gold-dark/20 px-4 py-3 text-xs text-white tracking-widest rounded-none focus:outline-none focus:border-gold-primary transition-colors"
                required
              />
              <input 
                type="email" 
                placeholder="YOUR EMAIL"
                className="w-full bg-bg-primary border border-gold-dark/20 px-4 py-3 text-xs text-white tracking-widest rounded-none focus:outline-none focus:border-gold-primary transition-colors"
                required
              />
            </div>
            <input 
              type="text" 
              placeholder="SUBJECT"
              className="w-full bg-bg-primary border border-gold-dark/20 px-4 py-3 text-xs text-white tracking-widest rounded-none focus:outline-none focus:border-gold-primary transition-colors"
              required
            />
            <textarea 
              rows="5"
              placeholder="YOUR MESSAGE"
              className="w-full bg-bg-primary border border-gold-dark/20 px-4 py-3 text-xs text-white tracking-widest rounded-none focus:outline-none focus:border-gold-primary transition-colors resize-none"
              required
            ></textarea>
            
            <div className="text-center">
              <button 
                type="submit"
                className="px-10 py-4 text-xs font-bold tracking-widest text-black bg-gold-primary hover:bg-gold-accent transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
              >
                SEND MESSAGE
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Bottom Footer Section */}
      <div className="bg-black py-12 border-t border-gold-dark/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          {/* Locations / Branches Strip */}
          <div className="mb-8 border-b border-gold-dark/10 pb-6 text-center">
            <p className="text-xs font-black tracking-widest text-white uppercase mb-2">
              Our Branches: <span className="text-gold-primary font-bold">Napier Town | Gorakhpur | Gwarighat | Dhanvantari Nagar | Sanjevni</span>
            </p>
            <p className="text-xs font-black tracking-widest text-text-body uppercase">
              Contact: <a href="tel:7049333222" className="text-gold-primary hover:text-gold-accent transition-colors">7049333222</a>
            </p>
          </div>

          {/* Menu links repeated */}
          <div className="flex flex-wrap justify-center gap-6 sm:gap-8 mb-8">
            {menuItems.map((item) => (
              <Link 
                key={item.name} 
                to={item.href}
                className="text-xs font-bold tracking-widest text-text-body hover:text-gold-primary transition-colors duration-300"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Social Icons in Gold Circles */}
          <div className="flex justify-center gap-4 mb-8">
            {/* Facebook */}
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noreferrer"
              className="w-10 h-10 rounded-full border border-gold-primary/30 flex items-center justify-center text-gold-primary hover:bg-gold-primary hover:text-black transition-all duration-300"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
              </svg>
            </a>
            
            {/* Twitter/X */}
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noreferrer"
              className="w-10 h-10 rounded-full border border-gold-primary/30 flex items-center justify-center text-gold-primary hover:bg-gold-primary hover:text-black transition-all duration-300"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>

            {/* Instagram */}
            <a 
              href="https://www.instagram.com/neo_fit_gym/?hl=en" 
              target="_blank" 
              rel="noreferrer"
              className="w-10 h-10 rounded-full border border-gold-primary/30 flex items-center justify-center text-gold-primary hover:bg-gold-primary hover:text-black transition-all duration-300"
              aria-label="Instagram"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
            </a>
          </div>

          {/* Copyright Line */}
          <p className="text-xs text-text-body/60 tracking-wider">
            Copyright &copy; 2026 All rights reserved | Made with ❤️ by <span className="text-gold-primary">Neo Fitness Gym Team</span>
          </p>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
