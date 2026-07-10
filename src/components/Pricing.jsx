import React from 'react';
import { Link } from 'react-router-dom';
import { Dumbbell, Check } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      title: 'STARTER',
      price: 'RS. 1,500/M',
      features: [
        'Gym Floor Access',
        'Locker Facility',
        '1 Free Trainer Session',
        'Basic Equipment Access',
        'Monthly Progress Check'
      ],
      isPopular: false
    },
    {
      title: 'PRO',
      price: 'RS. 2,400/M',
      features: [
        'Unlimited Gym Access',
        'Personal Trainer',
        'Weight Loss Classes',
        'Nutrition Guidance',
        'Free Riding Sessions'
      ],
      isPopular: true
    },
    {
      title: 'ELITE',
      price: 'RS. 3,800/M',
      features: [
        'Everything in Pro Plan',
        '1-on-1 Coaching Access',
        'Custom Diet & Nutrition Plan',
        'Priority Session Booking',
        'Monthly Body Composition Analysis'
      ],
      isPopular: false
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-bg-secondary relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Outline Heading */}
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-stroke-gold-thick uppercase tracking-widest mb-16">
          PRICING
        </h2>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch mb-12">
          {plans.map((plan, idx) => (
            <div 
              key={idx}
              className={`relative bg-bg-primary p-8 rounded-none flex flex-col justify-between transition-all duration-300 ${
                plan.isPopular 
                  ? 'border-2 border-gold-primary shadow-[0_0_30px_rgba(255,215,0,0.15)] md:-translate-y-4 z-10' 
                  : 'border border-gold-dark/20 hover:border-gold-primary/50'
              }`}
            >
              {plan.isPopular && (
                <div className="absolute top-0 right-0 left-0 bg-gold-primary text-black text-center font-bold text-xs uppercase py-1 tracking-widest">
                  MOST POPULAR
                </div>
              )}

              {/* Card Top */}
              <div>
                {/* Dumbbell Icon in Circle */}
                <div className="flex justify-center mb-6 mt-4">
                  <div className="w-16 h-16 rounded-full border border-gold-primary flex items-center justify-center bg-bg-secondary">
                    <Dumbbell className="w-8 h-8 text-gold-primary" />
                  </div>
                </div>

                {/* Title & Duration */}
                <h3 className="text-xs font-bold text-gold-primary tracking-widest uppercase mb-1">
                  {plan.title}
                </h3>
                <h4 className="text-2xl font-black text-white tracking-wider mb-4">
                  MONTHLY
                </h4>

                {/* Price */}
                <div className="text-lg font-black text-white mb-8 border-y border-gold-dark/10 py-3">
                  {plan.price} <span className="text-xs text-text-body font-normal block mt-1">(SINGLE CLASS)</span>
                </div>

                {/* Features list */}
                <ul className="space-y-4 text-left mb-10">
                  {plan.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start text-sm text-text-body">
                      <Check className="w-4 h-4 text-gold-primary mr-3 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Button */}
              <div>
                {plan.isPopular ? (
                  <Link
                    to="/contact"
                    className="block w-full py-4 text-xs font-bold tracking-widest text-center text-black bg-gold-primary hover:bg-gold-accent hover:scale-[1.02] active:scale-100 transition-all duration-300"
                  >
                    JOIN NOW
                  </Link>
                ) : (
                  <Link
                    to="/contact"
                    className="block w-full py-4 text-xs font-bold tracking-widest text-center text-white border border-gold-primary hover:bg-gold-primary hover:text-black transition-all duration-300"
                  >
                    JOIN NOW
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* View All Plans Link */}
        <div className="text-center">
          <Link
            to="/pricing"
            className="inline-block px-10 py-4 text-xs font-bold tracking-widest text-white border-2 border-gold-primary rounded-none hover:bg-gold-primary hover:text-black transition-all duration-300"
          >
            VIEW ALL PLANS
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
