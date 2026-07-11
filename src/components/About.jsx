import React from 'react';
import { Link } from 'react-router-dom';
import aboutVideoSrc from '../assets/videos/gymvideo-portrait-web-optimized.mp4';

const About = () => {
  return (
    <section id="about" className="py-24 bg-bg-primary relative overflow-hidden">
      
      {/* Background decoration elements */}
      <div className="absolute -left-32 top-1/4 w-96 h-96 bg-gold-dark/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Image with Diagonal Gold Accent Stripe */}
          <div className="relative flex justify-center lg:justify-start">
            {/* The Diagonal Gold Stripe */}
            <div className="absolute top-0 bottom-0 left-[10%] lg:left-[5%] w-[8px] bg-gradient-to-b from-gold-primary via-gold-dark to-transparent transform -skew-x-12 z-0 hidden sm:block" />

            {/* The Image Container with border and shadow */}
            <div className="relative z-10 w-full max-w-[450px] aspect-[4/5] bg-bg-secondary shadow-2xl overflow-hidden">
              <video 
                autoPlay 
                loop 
                muted 
                playsInline 
                poster="https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=800&auto=format&fit=crop"
                className="w-full h-full object-cover animate-fade-in"
              >
                <source src={aboutVideoSrc} type="video/mp4" />
              </video>
              
              {/* Overlapping diagonal accent badge */}
              <div className="absolute -bottom-5 -right-5 bg-gold-primary text-black font-black px-6 py-3 tracking-widest text-xs uppercase hidden sm:block transform hover:scale-105 transition-transform duration-300">
                8+ YEARS EXP
              </div>
            </div>
          </div>

          {/* Right Column: Text Content */}
          <div className="text-left">
            {/* Heading */}
            <h2 className="text-4xl sm:text-5xl font-black text-white uppercase tracking-wider mb-8">
              ABOUT <span className="text-gold-primary">US</span>
            </h2>

            {/* Paragraphs */}
            <p className="text-text-body text-base leading-relaxed mb-6">
              The aim behind establishing Neo Fitness Gym is based on providing our society with the fitter and the healthier living. We the team at Neo Fitness Gym believe fitness encompasses an essential part of our being. Physical, mental and emotional health is most important in this sedentary arena.
            </p>

            <p className="text-text-body text-base leading-relaxed mb-6">
              Neo Fitness Gym provides well-sanitised bodybuilding and muscle-toning equipment to our members. We ensure safety and care to all the members by providing them with a warm, friendly workout environment and convenient gym access at affordable prices.
            </p>

            <p className="text-text-body text-base leading-relaxed mb-6">
              Our concept of fitness includes the holistic wellbeing of an individual. We have personal trainers who train and assist you in bodybuilding, fat burning, weight loss, weight gain, muscle toning and strength training and guide you on the diet and nutritional requirement. The gym also provides aerobics, yoga and Zumba sessions to its members.
            </p>

            <p className="text-text-body text-base leading-relaxed mb-8">
              Neo Fitness Gym believes in building a long-term relationship with its members. We treat every member as our family. And with this love of our members, we have seen our family growing and have expanded our branches to multiple locations in Jabalpur.
            </p>

            {/* Outlined Buttons */}
            <div className="flex flex-wrap gap-4">
              <Link
                to="/courses"
                className="inline-block px-8 py-4 text-xs font-bold tracking-widest text-white border-2 border-gold-primary rounded-none hover:bg-gold-primary hover:text-black transition-all duration-300 transform hover:-translate-y-0.5"
              >
                MY COURSES
              </Link>
              <Link
                to="/about"
                className="inline-block px-8 py-4 text-xs font-bold tracking-widest text-gold-primary border-2 border-gold-primary rounded-none hover:bg-gold-primary hover:text-black transition-all duration-300 transform hover:-translate-y-0.5"
              >
                SEE MORE
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
