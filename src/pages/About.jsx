import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Award, ShieldCheck, Users } from 'lucide-react';
import aboutVideoSrc from '../assets/videos/gymvideo-portrait-web-optimized.mp4';
import Offer from '../components/Offer';
import SEO from '../components/SEO';

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-bg-primary text-white min-h-screen">
      {/* SEO Title & Description */}
      <SEO 
        title="About Us" 
        description="Learn about Neo Fitness Gym, our nationally certified coaching trainers, proven progressive overload training results, and supportive community." 
      />

      {/* a) PAGE HERO BANNER */}
      <section className="relative py-28 bg-bg-secondary flex items-center justify-center overflow-hidden border-b border-gold-dark/20">
        <div 
          className="absolute inset-0 opacity-15 pointer-events-none"
          style={{
            background: 'linear-gradient(135deg, #EF4444 0%, transparent 60%)'
          }}
        />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl sm:text-6xl font-black text-stroke-gold-thick uppercase tracking-widest mb-4">
            ABOUT US
          </h1>
          <div className="flex justify-center items-center gap-2 text-sm font-bold tracking-widest uppercase">
            <Link to="/" className="text-text-body hover:text-gold-primary transition-colors">
              HOME
            </Link>
            <span className="text-gold-dark">/</span>
            <span className="text-gold-primary">ABOUT</span>
          </div>
        </div>
      </section>

      {/* b) ABOUT CONTENT SECTION */}
      <section className="py-24 bg-bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Image with diagonal accent stripe */}
            <div className="relative flex justify-center lg:justify-start">
              <div className="absolute top-0 bottom-0 left-[10%] lg:left-[5%] w-[8px] bg-gradient-to-b from-gold-primary via-gold-dark to-transparent transform -skew-x-12 z-0 hidden sm:block" />
              
              {/* Wrapper for the Video and Badge to allow absolute overflow badge placement */}
              <div className="relative z-10 w-full max-w-[450px] aspect-[4/5]">
                {/* The Video Container with border, shadow and overflow-hidden */}
                <div className="w-full h-full bg-bg-secondary shadow-2xl overflow-hidden">
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
                </div>
                
                {/* Overlapping diagonal accent badge */}
                <div className="absolute -bottom-3 -right-3 sm:-bottom-5 sm:-right-5 bg-gold-primary text-black font-black px-4 py-2 sm:px-6 sm:py-3 tracking-widest text-[10px] sm:text-xs uppercase transform hover:scale-105 transition-transform duration-300 z-20">
                  8+ YEARS EXP
                </div>
              </div>
            </div>

            {/* Right Text */}
            <div className="text-left">
              <h2 className="text-4xl font-black text-white uppercase tracking-wider mb-6">
                ABOUT <span className="text-gold-primary">US</span>
              </h2>
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
              <Link
                to="/courses"
                className="inline-block px-10 py-4 text-xs font-bold tracking-widest text-white border-2 border-gold-primary rounded-none hover:bg-gold-primary hover:text-black transition-all duration-300 transform hover:-translate-y-0.5"
              >
                MY COURSES
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* c) MISSION/VISION STRIP (3 columns, gold icons) */}
      <section className="py-20 bg-bg-secondary border-t border-b border-gold-dark/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            
            {/* Mission 1 */}
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 rounded-full border border-gold-primary/30 flex items-center justify-center bg-bg-primary mb-4 text-gold-primary">
                <Award className="w-6 h-6" />
              </div>
              <h4 className="text-sm font-black text-white uppercase tracking-wider mb-2">
                Certified Coaching
              </h4>
              <p className="text-text-body text-xs leading-relaxed max-w-xs">
                Nationally certified trainers with hands-on program design experience.
              </p>
            </div>

            {/* Mission 2 */}
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 rounded-full border border-gold-primary/30 flex items-center justify-center bg-bg-primary mb-4 text-gold-primary">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h4 className="text-sm font-black text-white uppercase tracking-wider mb-2">
                Proven Results
              </h4>
              <p className="text-text-body text-xs leading-relaxed max-w-xs">
                Structured programs built on measurable strength and fitness progress.
              </p>
            </div>

            {/* Mission 3 */}
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 rounded-full border border-gold-primary/30 flex items-center justify-center bg-bg-primary mb-4 text-gold-primary">
                <Users className="w-6 h-6" />
              </div>
              <h4 className="text-sm font-black text-white uppercase tracking-wider mb-2">
                Community First
              </h4>
              <p className="text-text-body text-xs leading-relaxed max-w-xs">
                A supportive gym floor where every member is pushed and encouraged.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* d) WHAT WE OFFER SECTION */}
      <Offer />
    </div>
  );
};

export default AboutPage;
