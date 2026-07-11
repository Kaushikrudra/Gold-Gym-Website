import React from 'react';
import { Link } from 'react-router-dom';
import gymVideoSrc from '../assets/videos/gymvideo-web-optimized.mp4';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen bg-bg-primary flex items-center overflow-hidden pt-20">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          poster="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=1600&auto=format&fit=crop"
          className="w-full h-full object-cover"
        >
          <source src={gymVideoSrc} type="video/mp4" />
        </video>
      </div>

      {/* Dark overlay with left-to-right gradient for text readability */}
      <div 
        className="absolute inset-0 z-10"
        style={{
          background: 'linear-gradient(to right, rgba(0, 0, 0, 0.85) 0%, rgba(0, 0, 0, 0.7) 40%, rgba(0, 0, 0, 0.4) 100%)'
        }}
      />

      {/* Subtle bottom section divider with gold gradient */}
      <div className="absolute bottom-0 left-0 w-full h-[3px] gold-gradient z-20" />

      {/* Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
        <div className="max-w-2xl lg:max-w-xl text-left">
          {/* Subtitle with Outline Gold Stroke */}
          <h3 className="text-2xl sm:text-3xl font-black tracking-widest text-stroke-gold-thick uppercase mb-4 animate-pulse">
            Welcome to the world of Neo Fitness Gym
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
    </section>
  );
};

export default Hero;
