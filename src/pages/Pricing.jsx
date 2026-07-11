import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Dumbbell, Check } from 'lucide-react';
import SEO from '../components/SEO';
import FAQAccordion from '../components/FAQAccordion';

const PricingPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
    <div className="bg-bg-primary text-white min-h-screen">
      {/* SEO Title / Tags */}
      <SEO 
        title="Membership Pricing" 
        description="Choose from our Starter, Pro, and Elite membership plans at Neo Fitness Gym. No joining fees, flexible pausing, and custom nutrition options." 
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
            PRICING
          </h1>
          <div className="flex justify-center items-center gap-2 text-sm font-bold tracking-widest uppercase">
            <Link to="/" className="text-text-body hover:text-gold-primary transition-colors">
              HOME
            </Link>
            <span className="text-gold-dark">/</span>
            <span className="text-gold-primary">PRICING</span>
          </div>
        </div>
      </section>

      {/* b) PRICING CARDS SECTION */}
      <section className="py-24 bg-bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {plans.map((plan, idx) => (
              <div 
                key={idx}
                className={`relative bg-bg-secondary p-8 rounded-none flex flex-col justify-between transition-all duration-300 ${
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

                <div>
                  {/* Dumbbell Icon in Circle */}
                  <div className="flex justify-center mb-6 mt-4">
                    <div className="w-16 h-16 rounded-full border border-gold-primary flex items-center justify-center bg-bg-primary">
                      <Dumbbell className="w-8 h-8 text-gold-primary" />
                    </div>
                  </div>

                  {/* Plan Name & Duration */}
                  <h3 className="text-xs font-bold text-gold-primary tracking-widest uppercase mb-1 text-center">
                    {plan.title}
                  </h3>
                  <h4 className="text-2xl font-black text-white tracking-wider mb-4 text-center">
                    MONTHLY
                  </h4>

                  {/* Price */}
                  <div className="text-lg font-black text-white text-center mb-8 border-y border-gold-dark/10 py-3">
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
                  <Link
                    to="/contact"
                    className={`block w-full py-4 text-xs font-bold tracking-widest text-center transition-all duration-300 ${
                      plan.isPopular 
                        ? 'text-black bg-gold-primary hover:bg-gold-accent' 
                        : 'text-white border border-gold-primary hover:bg-gold-primary hover:text-black'
                    }`}
                  >
                    JOIN NOW
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* c) FAQ STRIP SECTION WITH REUSABLE ACCORDION */}
      <section className="py-20 bg-bg-secondary border-t border-gold-dark/15">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black uppercase tracking-wider">
              MEMBERSHIP <span className="text-gold-primary">FAQS</span>
            </h2>
            <div className="w-16 h-[2px] bg-gold-primary mx-auto mt-3" />
          </div>

          {/* FAQ Accordion component replacement */}
          <FAQAccordion />
        </div>
      </section>
    </div>
  );
};

export default PricingPage;
