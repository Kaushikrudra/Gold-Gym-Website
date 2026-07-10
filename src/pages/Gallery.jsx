import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';
import SEO from '../components/SEO';

const GalleryPage = () => {
  const [activeTab, setActiveTab] = useState('ALL');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const tabs = ['ALL', 'TRAINING', 'EQUIPMENT', 'MEMBERS'];

  const images = [
    {
      src: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=800&auto=format&fit=crop',
      alt: 'Weightlifting Competition',
      category: 'TRAINING',
      className: 'md:col-span-2 md:row-span-2 h-[350px] md:h-full'
    },
    {
      src: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=800&auto=format&fit=crop',
      alt: 'Dumbbell Rows Workout',
      category: 'TRAINING',
      className: 'h-[200px] md:h-[230px]'
    },
    {
      src: 'https://images.unsplash.com/photo-1605296867304-46d5465a25f1?q=80&w=800&auto=format&fit=crop',
      alt: 'Bicep Curl Exercise',
      category: 'EQUIPMENT',
      className: 'h-[200px] md:h-[230px]'
    },
    {
      src: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=800&auto=format&fit=crop',
      alt: 'Squat Rack Workout',
      category: 'EQUIPMENT',
      className: 'h-[200px] md:h-[230px]'
    },
    {
      src: 'https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=800&auto=format&fit=crop',
      alt: 'Treadmill Run',
      category: 'MEMBERS',
      className: 'h-[200px] md:h-[230px]'
    },
    {
      src: 'https://images.unsplash.com/photo-1593079831268-3381b0db4a77?q=80&w=800&auto=format&fit=crop',
      alt: 'Full Gym Setup',
      category: 'MEMBERS',
      className: 'md:col-span-3 h-[250px] md:h-[300px]'
    }
  ];

  const filteredImages = activeTab === 'ALL' 
    ? images 
    : images.filter(img => img.category === activeTab);

  return (
    <div className="bg-bg-primary text-white min-h-screen">
      <SEO 
        title="Photo Gallery" 
        description="Browse through training sessions, member transformations, equipment photos, and workouts at Gold Gym." 
      />
      {/* a) PAGE HERO BANNER */}
      <section className="relative py-28 bg-bg-secondary flex items-center justify-center overflow-hidden border-b border-gold-dark/20">
        <div 
          className="absolute inset-0 opacity-15 pointer-events-none"
          style={{
            background: 'linear-gradient(135deg, #FFD700 0%, transparent 60%)'
          }}
        />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl sm:text-6xl font-black text-stroke-gold-thick uppercase tracking-widest mb-4">
            GALLERY
          </h1>
          <div className="flex justify-center items-center gap-2 text-sm font-bold tracking-widest uppercase">
            <Link to="/" className="text-text-body hover:text-gold-primary transition-colors">
              HOME
            </Link>
            <span className="text-gold-dark">/</span>
            <span className="text-gold-primary">GALLERY</span>
          </div>
        </div>
      </section>

      {/* b) FILTER TABS & GRID */}
      <section className="py-24 bg-bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Tabs */}
          <div className="flex justify-center flex-wrap gap-4 sm:gap-8 mb-16 border-b border-gold-dark/10 pb-6">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`text-xs font-black tracking-widest uppercase pb-2 transition-all duration-300 border-b-2 relative ${
                  activeTab === tab 
                    ? 'text-gold-primary border-gold-primary' 
                    : 'text-text-body border-transparent hover:text-white'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 transition-all duration-500">
            {filteredImages.map((img, idx) => (
              <div 
                key={idx}
                className={`relative overflow-hidden group border border-gold-dark/10 transition-all duration-500 transform hover:scale-[1.01] ${img.className}`}
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

          {filteredImages.length === 0 && (
            <div className="py-20 text-center text-text-body text-sm font-bold tracking-widest">
              NO IMAGES FOUND IN THIS CATEGORY.
            </div>
          )}

        </div>
      </section>
    </div>
  );
};

export default GalleryPage;
