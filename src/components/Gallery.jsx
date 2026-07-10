import React from 'react';
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';

const Gallery = () => {
  const images = [
    {
      src: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=800&auto=format&fit=crop',
      alt: 'Weightlifting Competition',
      className: 'md:col-span-2 md:row-span-2 h-[420px] md:h-full'
    },
    {
      src: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=800&auto=format&fit=crop',
      alt: 'Dumbbell Rows Workout',
      className: 'h-[200px] md:h-[250px]'
    },
    {
      src: 'https://images.unsplash.com/photo-1605296867304-46d5465a25f1?q=80&w=800&auto=format&fit=crop',
      alt: 'Bicep Curl Exercise',
      className: 'h-[200px] md:h-[250px]'
    },
    {
      src: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=800&auto=format&fit=crop',
      alt: 'Squat Rack Workout',
      className: 'h-[200px] md:h-[250px]'
    },
    {
      src: 'https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=800&auto=format&fit=crop',
      alt: 'Treadmill Run',
      className: 'h-[200px] md:h-[250px]'
    },
    {
      src: 'https://images.unsplash.com/photo-1593079831268-3381b0db4a77?q=80&w=800&auto=format&fit=crop',
      alt: 'Full Gym Setup',
      className: 'md:col-span-3 h-[250px] md:h-[350px]'
    }
  ];

  return (
    <section id="gallery" className="py-24 bg-bg-primary relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-black text-white uppercase tracking-wider">
            OUR <span className="text-gold-primary">GALLERY</span>
          </h2>
          <div className="w-24 h-[2px] bg-gold-primary mx-auto mt-4" />
        </div>

        {/* Asymmetrical Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-auto mb-12">
          {images.map((img, idx) => (
            <div 
              key={idx}
              className={`relative overflow-hidden group border border-gold-dark/10 ${img.className}`}
            >
              {/* Image */}
              <img 
                src={img.src} 
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />

              {/* Hover Gold Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none z-10">
                <div className="w-12 h-12 rounded-full bg-gold-primary flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform duration-300">
                  <Search className="w-6 h-6 text-black" />
                </div>
              </div>

              {/* Gold border glow lines inside image */}
              <div className="absolute inset-4 border border-gold-primary/0 group-hover:border-gold-primary/30 transition-all duration-300 z-5 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* View Full Gallery Link */}
        <div className="text-center">
          <Link
            to="/gallery"
            className="inline-block px-10 py-4 text-xs font-bold tracking-widest text-white border-2 border-gold-primary rounded-none hover:bg-gold-primary hover:text-black transition-all duration-300"
          >
            VIEW FULL GALLERY
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
