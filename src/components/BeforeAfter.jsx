import React from 'react';

const BeforeAfter = () => {
  const transformations = [
    {
      name: 'Rahul',
      duration: '6 MONTHS',
      beforeImg: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=400&auto=format&fit=crop',
      afterImg: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=400&auto=format&fit=crop'
    },
    {
      name: 'Sneha',
      duration: '4 MONTHS',
      beforeImg: 'https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=400&auto=format&fit=crop',
      afterImg: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=400&auto=format&fit=crop'
    },
    {
      name: 'Amit',
      duration: '8 MONTHS',
      beforeImg: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=400&auto=format&fit=crop',
      afterImg: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=400&auto=format&fit=crop'
    }
  ];

  return (
    <section className="py-24 bg-bg-primary relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-wider mb-4">
          REAL <span className="text-gold-primary">TRANSFORMATIONS</span>
        </h2>
        <div className="w-16 h-[2px] bg-gold-primary mx-auto mb-16" />

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {transformations.map((item, idx) => (
            <div 
              key={idx}
              className="bg-bg-secondary border border-gold-dark/15 p-6 group transition-all duration-300 hover:border-gold-primary hover:shadow-[0_0_20px_rgba(255,215,0,0.1)] flex flex-col"
            >
              {/* Before/After Split Container */}
              <div className="grid grid-cols-2 gap-3 relative mb-6">
                
                {/* Before Image */}
                <div className="relative aspect-[3/4] overflow-hidden bg-bg-primary">
                  <img 
                    src={item.beforeImg} 
                    alt={`${item.name} Before`}
                    className="w-full h-full object-cover grayscale transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Before Badge */}
                  <span className="absolute top-2 left-2 bg-black/80 text-white font-black text-[9px] tracking-widest px-2.5 py-1 border border-white/20">
                    BEFORE
                  </span>
                </div>

                {/* After Image */}
                <div className="relative aspect-[3/4] overflow-hidden bg-bg-primary">
                  <img 
                    src={item.afterImg} 
                    alt={`${item.name} After`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* After Badge */}
                  <span className="absolute top-2 right-2 bg-gold-primary text-black font-black text-[9px] tracking-widest px-2.5 py-1">
                    AFTER
                  </span>
                </div>

              </div>

              {/* Label Details */}
              <div className="text-center">
                <h4 className="text-lg font-black text-white tracking-wide uppercase mb-1">
                  {item.name}
                </h4>
                <p className="text-xs font-black text-gold-primary tracking-widest uppercase">
                  DURATION: {item.duration}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default BeforeAfter;
