import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      name: 'ROHAN SHARMA',
      photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop',
      rating: 5,
      text: "Best gym I've trained at. Lost 12kg in 4 months with the personal training program."
    },
    {
      name: 'PRIYA MENON',
      photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop',
      rating: 5,
      text: "The trainers actually care about your form and progress, not just pushing you through reps."
    },
    {
      name: 'ARJUN PATEL',
      photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop',
      rating: 4,
      text: "Great equipment and flexible timing. Group classes are super motivating."
    },
    {
      name: 'SIDDHARTH VERMA',
      photo: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=150&auto=format&fit=crop',
      rating: 5,
      text: "The custom diet plans and weekly body composition checks changed my entire perspective on health."
    },
    {
      name: 'NEHA GUPTA',
      photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop',
      rating: 5,
      text: "Incredible environment. Very clean, premium machines, and a highly encouraging community. 10/10."
    },
    {
      name: 'KABIR MALHOTRA',
      photo: 'https://images.unsplash.com/photo-1500048993953-d23a436266cf?q=80&w=150&auto=format&fit=crop',
      rating: 4,
      text: "The strength training course here has helped me fix my barbell lifts and break through plateaus."
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  // Render Stars
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <Star
          key={i}
          className={`w-4 h-4 ${i <= rating ? 'fill-gold-primary text-gold-primary' : 'text-gray-600'}`}
        />
      );
    }
    return stars;
  };

  return (
    <section className="py-24 bg-bg-secondary relative overflow-hidden">
      {/* Top divider */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold-dark/30 to-transparent" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Section Heading */}
        <h2 className="text-4xl sm:text-5xl font-black text-stroke-gold-thick uppercase tracking-widest mb-16">
          WHAT OUR MEMBERS SAY
        </h2>

        {/* Carousel Slider */}
        <div className="relative min-h-[250px] flex items-center justify-center">
          
          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            className="absolute left-0 z-20 w-10 h-10 border border-gold-primary/30 rounded-full flex items-center justify-center hover:bg-gold-primary hover:text-black transition-colors"
            aria-label="Previous review"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Review Card */}
          <div className="w-full max-w-2xl px-12 transition-opacity duration-500 ease-in-out">
            {/* Circular Member Headshot */}
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-gold-primary shadow-lg shadow-gold-primary/10">
                <img 
                  src={testimonials[activeIndex].photo} 
                  alt={testimonials[activeIndex].name} 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Review text */}
            <blockquote className="text-lg sm:text-xl font-medium text-white italic leading-relaxed mb-6">
              "{testimonials[activeIndex].text}"
            </blockquote>

            {/* Stars rating */}
            <div className="flex justify-center gap-1 mb-3">
              {renderStars(testimonials[activeIndex].rating)}
            </div>

            {/* Member Name */}
            <cite className="block text-xs font-black text-gold-primary tracking-widest uppercase not-italic">
              {testimonials[activeIndex].name}
            </cite>
          </div>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className="absolute right-0 z-20 w-10 h-10 border border-gold-primary/30 rounded-full flex items-center justify-center hover:bg-gold-primary hover:text-black transition-colors"
            aria-label="Next review"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Dot Indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`w-2 h-2 rounded-full transition-all ${
                activeIndex === idx ? 'bg-gold-primary w-6' : 'bg-gray-700'
              }`}
              aria-label={`Slide ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
