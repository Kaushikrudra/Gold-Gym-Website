import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6 text-gold-primary" />,
      title: 'LOCATION',
      detail1: '102 FIT STREET, METROPOLIS',
      detail2: 'SUITE 400, NY 10001, USA'
    },
    {
      icon: <Phone className="w-6 h-6 text-gold-primary" />,
      title: 'PHONE NUMBER',
      detail1: '+1 (555) 234-5678',
      detail2: '+1 (555) 876-5432'
    },
    {
      icon: <Mail className="w-6 h-6 text-gold-primary" />,
      title: 'EMAIL ADDRESS',
      detail1: 'support@goldgym.com',
      detail2: 'trainer@goldgym.com'
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

            {/* Pinterest */}
            <a 
              href="https://pinterest.com" 
              target="_blank" 
              rel="noreferrer"
              className="w-10 h-10 rounded-full border border-gold-primary/30 flex items-center justify-center text-gold-primary hover:bg-gold-primary hover:text-black transition-all duration-300"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.965 1.406-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.621 0 11.988-5.367 11.988-11.987C24 5.367 18.633 0 12.017 0z"/>
              </svg>
            </a>
          </div>

          {/* Copyright Line */}
          <p className="text-xs text-text-body/60 tracking-wider">
            Copyright &copy; 2026 All rights reserved | Made with ❤️ by <span className="text-gold-primary">Gold Gym Team</span>
          </p>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
