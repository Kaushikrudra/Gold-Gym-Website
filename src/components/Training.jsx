import React from 'react';
import { Link } from 'react-router-dom';

const Training = () => {
  return (
    <section id="courses" className="relative grid grid-cols-1 md:grid-cols-2 min-h-[600px] bg-bg-primary overflow-hidden">
      
      {/* Left Column: Personal Training */}
      <div 
        className="relative flex items-center justify-center py-24 px-6 sm:px-12 lg:px-20 bg-cover bg-center group"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=800&auto=format&fit=crop')`
        }}
      >
        {/* Dark overlay with hover state */}
        <div className="absolute inset-0 bg-black/80 group-hover:bg-black/75 transition-all duration-500 z-0" />
        
        {/* Content */}
        <div className="relative z-10 text-center max-w-lg">
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-wider mb-6">
            PERSONAL TRAINING
          </h2>
          <p className="text-text-body text-sm sm:text-base mb-8 leading-relaxed">
            One-on-one coaching tailored to your goals, with a program that adapts as you get stronger.
          </p>
          <Link
            to="/courses"
            className="inline-block px-8 py-3.5 text-xs font-bold tracking-widest text-white border-2 border-gold-primary rounded-none hover:bg-gold-primary hover:text-black transition-all duration-300 transform hover:-translate-y-0.5"
          >
            VIEW COURSES
          </Link>
        </div>

        {/* Small decorative corner border on hover */}
        <div className="absolute top-8 left-8 w-6 h-6 border-t-2 border-l-2 border-gold-primary/0 group-hover:border-gold-primary/60 transition-all duration-500" />
        <div className="absolute bottom-8 right-8 w-6 h-6 border-b-2 border-r-2 border-gold-primary/0 group-hover:border-gold-primary/60 transition-all duration-500" />
      </div>

      {/* Right Column: Group Training */}
      <div 
        className="relative flex items-center justify-center py-24 px-6 sm:px-12 lg:px-20 bg-cover bg-center group border-t md:border-t-0 md:border-l border-gold-dark/20"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=800&auto=format&fit=crop')`
        }}
      >
        {/* Dark overlay with hover state */}
        <div className="absolute inset-0 bg-black/85 group-hover:bg-black/80 transition-all duration-500 z-0" />
        
        {/* Content */}
        <div className="relative z-10 text-center max-w-lg">
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-wider mb-6">
            GROUP TRAINING
          </h2>
          <p className="text-text-body text-sm sm:text-base mb-8 leading-relaxed">
            High-energy group sessions that build strength, community, and consistency together.
          </p>
          <Link
            to="/courses"
            className="inline-block px-8 py-3.5 text-xs font-bold tracking-widest text-black bg-gold-primary border-2 border-gold-primary rounded-none hover:bg-transparent hover:text-white transition-all duration-300 transform hover:-translate-y-0.5"
          >
            VIEW COURSES
          </Link>
        </div>

        {/* Small decorative corner border on hover */}
        <div className="absolute top-8 right-8 w-6 h-6 border-t-2 border-r-2 border-gold-primary/0 group-hover:border-gold-primary/60 transition-all duration-500" />
        <div className="absolute bottom-8 left-8 w-6 h-6 border-b-2 border-l-2 border-gold-primary/0 group-hover:border-gold-primary/60 transition-all duration-500" />
      </div>

    </section>
  );
};

export default Training;
