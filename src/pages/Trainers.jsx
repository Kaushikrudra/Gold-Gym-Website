import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const Trainers = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const trainers = [
    {
      name: 'VIKRAM SINGH',
      role: 'Strength & Conditioning',
      experience: '8 YEARS EXP',
      photo: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=400&auto=format&fit=crop',
      bio: 'Former national powerlifter specializing in strength programming for all levels.'
    },
    {
      name: 'ANANYA REDDY',
      role: 'Weight Loss Specialist',
      experience: '6 YEARS EXP',
      photo: 'https://images.unsplash.com/photo-1548690312-e3b507d8c110?q=80&w=400&auto=format&fit=crop',
      bio: 'Certified nutrition coach helping members achieve sustainable fat loss.'
    },
    {
      name: 'KARAN MEHTA',
      role: 'Bodybuilding Coach',
      experience: '10 YEARS EXP',
      photo: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=400&auto=format&fit=crop',
      bio: 'Competition prep coach with multiple state-level bodybuilding titles.'
    },
    {
      name: 'SIMRAN KAUR',
      role: 'Group Fitness Expert',
      experience: '5 YEARS EXP',
      photo: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=400&auto=format&fit=crop',
      bio: 'High-energy group class instructor specializing in HIIT and functional training.'
    }
  ];

  return (
    <div className="bg-bg-primary text-white min-h-screen">
      {/* SEO Title / Tags */}
      <SEO 
        title="Our Expert Trainers" 
        description="Meet the professional coaches and certified instructors at Neo Fitness Gym who will guide you on your bodybuilding, strength, and weight loss goals."
      />

      {/* Hero Banner */}
      <section className="relative py-28 bg-bg-secondary flex items-center justify-center overflow-hidden border-b border-gold-dark/20">
        <div 
          className="absolute inset-0 opacity-15 pointer-events-none"
          style={{
            background: 'linear-gradient(135deg, #EF4444 0%, transparent 60%)'
          }}
        />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl sm:text-6xl font-black text-stroke-gold-thick uppercase tracking-widest mb-4">
            OUR TRAINERS
          </h1>
          <div className="flex justify-center items-center gap-2 text-sm font-bold tracking-widest uppercase">
            <Link to="/" className="text-text-body hover:text-gold-primary transition-colors">
              HOME
            </Link>
            <span className="text-gold-dark">/</span>
            <span className="text-gold-primary">TRAINERS</span>
          </div>
        </div>
      </section>

      {/* Trainers Grid */}
      <section className="py-24 bg-bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {trainers.map((t, idx) => (
              <div 
                key={idx}
                className="bg-bg-secondary border border-gold-dark/15 overflow-hidden group flex flex-col justify-between transition-all duration-300 hover:border-gold-primary hover:shadow-[0_0_20px_rgba(255,215,0,0.1)]"
              >
                {/* Photo Header */}
                <div className="relative aspect-[3/4] overflow-hidden bg-bg-primary border-b border-gold-dark/10">
                  <img 
                    src={t.photo} 
                    alt={t.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Experience Badge */}
                  <span className="absolute bottom-4 left-4 bg-gold-primary text-black font-black text-[9px] tracking-widest px-3 py-1">
                    {t.experience}
                  </span>
                </div>

                {/* Details */}
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    {/* Specialty tag */}
                    <div className="inline-block bg-gold-dark/15 border border-gold-dark/30 text-gold-primary font-black text-[9px] tracking-widest px-2.5 py-1 uppercase mb-3">
                      {t.role}
                    </div>
                    
                    {/* Name */}
                    <h3 className="text-base font-black tracking-wider text-white mb-2 uppercase group-hover:text-gold-primary transition-colors">
                      {t.name}
                    </h3>
                    
                    {/* Bio */}
                    <p className="text-text-body text-xs leading-relaxed mb-6">
                      {t.bio}
                    </p>
                  </div>

                  {/* Social Handles */}
                  <div className="flex gap-4 border-t border-gold-dark/10 pt-4">
                    <a 
                      href="https://instagram.com" 
                      target="_blank" 
                      rel="noreferrer"
                      className="text-text-body hover:text-gold-primary transition-colors"
                      aria-label={`${t.name} Instagram`}
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                      </svg>
                    </a>
                    <a 
                      href="https://facebook.com" 
                      target="_blank" 
                      rel="noreferrer"
                      className="text-text-body hover:text-gold-primary transition-colors"
                      aria-label={`${t.name} Facebook`}
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                      </svg>
                    </a>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA Strip */}
      <section className="relative py-20 overflow-hidden text-center border-t border-gold-dark/20">
        <div className="absolute inset-0 gold-gradient opacity-90 z-0" />
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-widest uppercase leading-tight mb-8">
            WANT TO TRAIN WITH AN EXPERT?
          </h2>
          <Link
            to="/contact"
            className="inline-block px-10 py-4 text-xs font-bold tracking-widest text-white bg-black border-2 border-gold-primary hover:bg-gold-primary hover:text-black transition-all duration-300 transform hover:-translate-y-0.5"
          >
            BOOK A TRIAL SESSION
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Trainers;
