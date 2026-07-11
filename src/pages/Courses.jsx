import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Award, Clock, Heart, Users, ShieldCheck, Zap } from 'lucide-react';
import SEO from '../components/SEO';

const Courses = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const courseList = [
    {
      title: 'STRENGTH TRAINING',
      duration: '8 WEEKS',
      price: 'RS. 3,500',
      image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=600&auto=format&fit=crop',
      desc: 'Master the barbell lifts, build foundational strength, and increase bone density under professional instruction.'
    },
    {
      title: 'CARDIO BLAST',
      duration: '6 WEEKS',
      price: 'RS. 2,800',
      image: 'https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=600&auto=format&fit=crop',
      desc: 'High-intensity conditioning class aimed to maximize heart rate, calorie burn, and overall lung capacity.'
    },
    {
      title: 'CROSSFIT CHALLENGE',
      duration: '10 WEEKS',
      price: 'RS. 4,200',
      image: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=600&auto=format&fit=crop',
      desc: 'High intensity functional movements designed to test your limits and build dynamic athleticism.'
    },
    {
      title: 'YOGA & FLEXIBILITY',
      duration: '12 WEEKS',
      price: 'RS. 3,000',
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=600&auto=format&fit=crop',
      desc: 'Enhance range of motion, improve muscular recovery, relieve stress, and develop core strength.'
    },
    {
      title: 'BODYBUILDING PRO',
      duration: '16 WEEKS',
      price: 'RS. 5,000',
      image: 'https://images.unsplash.com/photo-1605296867304-46d5465a25f1?q=80&w=600&auto=format&fit=crop',
      desc: 'Advanced hypertrophy routine targeting specific muscle groups with focus on volume and nutrition.'
    },
    {
      title: 'WEIGHT LOSS PROGRAM',
      duration: '8 WEEKS',
      price: 'RS. 3,200',
      image: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?q=80&w=600&auto=format&fit=crop',
      desc: 'A comprehensive approach combining caloric deficits, cardio intervals, and resistance exercises.'
    }
  ];

  return (
    <div className="bg-bg-primary text-white min-h-screen">
      <SEO 
        title="Our Fitness Courses" 
        description="Explore our 8-week strength training, HIIT conditioning classes, bodybuilding programming, and custom weight loss regimes." 
      />
      
      {/* a) PAGE HERO BANNER */}
      <section className="relative py-28 bg-bg-secondary flex items-center justify-center overflow-hidden border-b border-gold-dark/20">
        {/* Subtle gold diagonal gradient overlay */}
        <div 
          className="absolute inset-0 opacity-15 pointer-events-none"
          style={{
            background: 'linear-gradient(135deg, #EF4444 0%, transparent 60%)'
          }}
        />
        
        <div className="relative z-10 text-center px-4">
          {/* Outline Title */}
          <h1 className="text-5xl sm:text-6xl font-black text-stroke-gold-thick uppercase tracking-widest mb-4">
            OUR COURSES
          </h1>
          {/* Breadcrumb */}
          <div className="flex justify-center items-center gap-2 text-sm font-bold tracking-widest uppercase">
            <Link to="/" className="text-text-body hover:text-gold-primary transition-colors">
              HOME
            </Link>
            <span className="text-gold-dark">/</span>
            <span className="text-gold-primary">COURSES</span>
          </div>
        </div>
      </section>

      {/* b) COURSE CATEGORIES (2-column split — Personal/Group style) */}
      <section className="grid grid-cols-1 md:grid-cols-2 min-h-[500px] border-b border-gold-dark/20">
        
        {/* Left Column: Personal Training Category */}
        <div 
          className="relative flex items-center justify-center py-20 px-6 sm:px-12 bg-cover bg-center group"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=800&auto=format&fit=crop')`
          }}
        >
          <div className="absolute inset-0 bg-black/80 group-hover:bg-black/75 transition-all duration-500 z-0" />
          <div className="relative z-10 text-center max-w-md">
            <h2 className="text-2xl sm:text-3xl font-black tracking-wider mb-4">
              PERSONAL TRAINING
            </h2>
            <p className="text-text-body text-xs sm:text-sm mb-6 leading-relaxed">
              Achieve laser-focused results with our elite trainer matching system. Customized nutrition tracking, progress diagnostics, and custom bodybuilding scheduling.
            </p>
            <a
              href="#contact"
              className="inline-block px-6 py-3 text-xs font-bold tracking-widest text-white border-2 border-gold-primary rounded-none hover:bg-gold-primary hover:text-black transition-all duration-300"
            >
              ENROLL NOW
            </a>
          </div>
          <div className="absolute top-6 left-6 w-4 h-4 border-t-2 border-l-2 border-gold-primary/0 group-hover:border-gold-primary/50 transition-all duration-500" />
          <div className="absolute bottom-6 right-6 w-4 h-4 border-b-2 border-r-2 border-gold-primary/0 group-hover:border-gold-primary/50 transition-all duration-500" />
        </div>

        {/* Right Column: Group Training Category */}
        <div 
          className="relative flex items-center justify-center py-20 px-6 sm:px-12 bg-cover bg-center group border-t md:border-t-0 md:border-l border-gold-dark/20"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=800&auto=format&fit=crop')`
          }}
        >
          <div className="absolute inset-0 bg-black/85 group-hover:bg-black/80 transition-all duration-500 z-0" />
          <div className="relative z-10 text-center max-w-md">
            <h2 className="text-2xl sm:text-3xl font-black tracking-wider mb-4">
              GROUP TRAINING
            </h2>
            <p className="text-text-body text-xs sm:text-sm mb-6 leading-relaxed">
              Find camaraderie and pushing intensity in our trainer-guided group classrooms. Includes cardio blasts, spin workshops, and yoga flex groups.
            </p>
            <a
              href="#contact"
              className="inline-block px-6 py-3 text-xs font-bold tracking-widest text-black bg-gold-primary border-2 border-gold-primary rounded-none hover:bg-transparent hover:text-white transition-all duration-300"
            >
              ENROLL NOW
            </a>
          </div>
          <div className="absolute top-6 right-6 w-4 h-4 border-t-2 border-r-2 border-gold-primary/0 group-hover:border-gold-primary/50 transition-all duration-500" />
          <div className="absolute bottom-6 left-6 w-4 h-4 border-b-2 border-l-2 border-gold-primary/0 group-hover:border-gold-primary/50 transition-all duration-500" />
        </div>

      </section>

      {/* c) ALL COURSES GRID (3-column, 6 course cards) */}
      <section className="py-24 bg-bg-secondary relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-black tracking-wider">
              ALL <span className="text-gold-primary">COURSES</span>
            </h2>
            <div className="w-16 h-[2px] bg-gold-primary mx-auto mt-3" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courseList.map((course, idx) => (
              <div 
                key={idx}
                className="bg-bg-primary border border-gold-dark/15 group overflow-hidden flex flex-col h-full hover:border-gold-primary hover:shadow-[0_0_20px_rgba(255,215,0,0.1)] transition-all duration-300"
              >
                {/* Course Image */}
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={course.image} 
                    alt={course.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Duration Badge (Gold pill shape) */}
                  <span className="absolute top-4 left-4 bg-gold-primary text-black font-black text-[10px] tracking-widest px-3 py-1 rounded-full shadow-md">
                    {course.duration}
                  </span>
                </div>

                {/* Course Body */}
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    {/* Course Title */}
                    <h3 className="text-base font-black tracking-wider text-white mb-2 uppercase group-hover:text-gold-primary transition-colors">
                      {course.title}
                    </h3>
                    
                    {/* Description (1-line) */}
                    <p className="text-text-body text-xs leading-relaxed mb-4 line-clamp-1">
                      {course.desc}
                    </p>
                  </div>

                  <div>
                    {/* Price Tag in Gold */}
                    <div className="text-gold-primary font-black text-sm tracking-wider mb-4">
                      {course.price} <span className="text-[10px] text-text-body font-normal">/ COURSE</span>
                    </div>

                    {/* Outlined Button, gold fill on hover */}
                    <a
                      href="#contact"
                      className="block w-full py-2.5 text-center text-xs font-bold tracking-widest text-white border border-gold-primary/50 hover:bg-gold-primary hover:text-black hover:border-gold-primary transition-all duration-300"
                    >
                      VIEW DETAILS
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* d) WHY CHOOSE OUR COURSES (3-column feature strip) */}
      <section className="py-20 bg-bg-primary border-t border-b border-gold-dark/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-wider">
              WHY CHOOSE OUR <span className="text-gold-primary">COURSES</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            
            {/* Feature 1 */}
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 rounded-full border border-gold-primary/30 flex items-center justify-center bg-bg-secondary mb-4 text-gold-primary">
                <Award className="w-6 h-6" />
              </div>
              <h4 className="text-sm font-black text-white uppercase tracking-wider mb-2">
                Certified Trainers
              </h4>
              <p className="text-text-body text-xs leading-relaxed max-w-xs">
                Learn from professional bodybuilding coaches and certified functional fitness experts.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 rounded-full border border-gold-primary/30 flex items-center justify-center bg-bg-secondary mb-4 text-gold-primary">
                <Clock className="w-6 h-6" />
              </div>
              <h4 className="text-sm font-black text-white uppercase tracking-wider mb-2">
                Flexible Timing
              </h4>
              <p className="text-text-body text-xs leading-relaxed max-w-xs">
                Choose slots that match your busy routine. We offer classes from early morning to late nights.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 rounded-full border border-gold-primary/30 flex items-center justify-center bg-bg-secondary mb-4 text-gold-primary">
                <Zap className="w-6 h-6" />
              </div>
              <h4 className="text-sm font-black text-white uppercase tracking-wider mb-2">
                Personalized Plans
              </h4>
              <p className="text-text-body text-xs leading-relaxed max-w-xs">
                Every course is adapted to your starting capabilities, injury history, and goals.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* e) CTA BANNER (before footer) */}
      <section className="relative py-20 overflow-hidden text-center">
        {/* Full width gold-to-black diagonal gradient */}
        <div className="absolute inset-0 gold-gradient opacity-90 z-0" />
        
        {/* Diagonal stripes texture overlay */}
        <div className="absolute inset-0 bg-black/10 z-1" />

        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-widest uppercase leading-tight mb-8">
            READY TO START YOUR JOURNEY?
          </h2>
          
          <a
            href="#contact"
            className="inline-block px-10 py-4 text-xs font-bold tracking-widest text-white bg-black border-2 border-gold-primary hover:bg-gold-primary hover:text-black transition-all duration-300 transform hover:-translate-y-0.5"
          >
            CONTACT ME
          </a>
        </div>
      </section>

    </div>
  );
};

export default Courses;
