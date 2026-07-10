import React from 'react';

const Offer = () => {
  const offers = [
    {
      title: 'BODY BUILDING',
      image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=600&auto=format&fit=crop',
      desc: 'Structured hypertrophy programming focused on progressive overload and clean form.'
    },
    {
      title: 'MUSCLE GAIN',
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=600&auto=format&fit=crop',
      desc: 'Calorie-smart training splits designed to pack on lean, functional muscle.'
    },
    {
      title: 'WEIGHT LOSS',
      image: 'https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=600&auto=format&fit=crop',
      desc: 'High-intensity circuits paired with nutrition guidance for sustainable fat loss.'
    }
  ];

  return (
    <section className="py-24 bg-bg-secondary relative">
      {/* Background Subtle Elements */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold-dark/30 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Outline Stroke Heading */}
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-stroke-gold-thick uppercase tracking-widest mb-16">
          WHAT I OFFER
        </h2>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {offers.map((offer, idx) => (
            <div 
              key={idx}
              className="bg-bg-primary border border-gold-dark/10 rounded-none overflow-hidden group transition-all duration-300 hover:border-gold-primary hover:shadow-[0_0_25px_rgba(255,215,0,0.15)] flex flex-col h-full"
            >
              {/* Image Container with zoom effect */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={offer.image} 
                  alt={offer.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/90 to-transparent opacity-60" />
              </div>

              {/* Card Body */}
              <div className="p-8 flex-grow flex flex-col justify-between">
                <div>
                  {/* Title */}
                  <h3 className="text-xl font-black text-white tracking-widest uppercase mb-4 group-hover:text-gold-primary transition-colors duration-300">
                    {offer.title}
                  </h3>
                  {/* Description */}
                  <p className="text-text-body text-sm leading-relaxed mb-6">
                    {offer.desc}
                  </p>
                </div>

                {/* Subtle border bottom glow line */}
                <div className="w-12 h-[2px] bg-gold-dark group-hover:w-full group-hover:bg-gold-primary transition-all duration-500" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offer;
