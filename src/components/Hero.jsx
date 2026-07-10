import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen bg-bg-primary flex items-center overflow-hidden pt-20">
      {/* Background Image of Muscular Trainer */}
      <div 
        className="absolute right-0 top-0 w-full lg:w-2/3 h-full bg-cover bg-center z-0"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=1600&auto=format&fit=crop')`
        }}
      />

      {/* Diagonal Gold-to-Black Gradient Overlay (Angled shape diagonal cut) */}
      <div 
        className="absolute inset-0 z-10 hidden lg:block"
        style={{
          background: 'linear-gradient(105deg, #0a0a0a 45%, rgba(10, 10, 10, 0.8) 55%, rgba(184, 134, 11, 0.3) 65%, transparent 75%)'
        }}
      />

      {/* Mobile Background Overlay */}
      <div 
        className="absolute inset-0 bg-gradient-to-t from-bg-primary via-bg-primary/90 to-bg-primary/40 z-10 lg:hidden"
      />

      {/* Subtle bottom section divider with gold gradient */}
      <div className="absolute bottom-0 left-0 w-full h-[3px] gold-gradient z-20" />

      {/* Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-25 w-full">
        <div className="max-w-2xl lg:max-w-xl text-left">
          {/* Subtitle with Outline Gold Stroke */}
          <h3 className="text-2xl sm:text-3xl font-black tracking-widest text-stroke-gold-thick uppercase mb-4 animate-pulse">
            HI THIS IS GOLD GYM
          </h3>
          
          {/* Big Bold White Heading */}
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black text-white tracking-tighter uppercase leading-none mb-8">
            GYM <span className="text-gold-primary block mt-2">TRAINER</span>
          </h1>

          <p className="text-text-body text-base sm:text-lg mb-8 max-w-md">
            Unleash your potential with professional coaching, premium training equipment, and custom workouts designed to sculpt your dream physique.
          </p>
          
          {/* Link to courses page */}
          <Link
            to="/courses"
            className="inline-block px-10 py-4 text-xs font-bold tracking-widest text-white border-2 border-gold-primary rounded-none hover:bg-gold-primary hover:text-black hover:border-gold-primary transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-gold-primary/20"
          >
            MY COURSES
          </Link>
        </div>
      </div>

      {/* Diagonal Accent Design Line */}
      <div className="absolute right-1/3 top-0 h-full w-[4px] bg-gold-primary/30 z-10 transform -skew-x-12 hidden lg:block" />
    </section>
  );
};

export default Hero;
