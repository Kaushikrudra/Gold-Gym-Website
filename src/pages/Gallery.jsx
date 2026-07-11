import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';
import SEO from '../components/SEO';

// Import images from assets folder
import img1 from '../assets/gallery/neo-fit-gym-1.png';
import img2 from '../assets/gallery/neo-fit-gym-2.png';
import img3 from '../assets/gallery/neo-fit-gym-3.png';
import img4 from '../assets/gallery/neo-fit-gym-4.png';
import img5 from '../assets/gallery/neo-fit-gym-5.png';
import img6 from '../assets/gallery/neo-fit-gym-6.png';

const GalleryPage = () => {
  const [activeTab, setActiveTab] = useState('ALL');
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const tabs = ['ALL', 'TRAINING', 'EQUIPMENT', 'MEMBERS'];

  const images = [
    {
      src: img1,
      alt: 'Weightlifting Competition',
      category: 'TRAINING'
    },
    {
      src: img2,
      alt: 'Dumbbell Rows Workout',
      category: 'TRAINING'
    },
    {
      src: img3,
      alt: 'Bicep Curl Exercise',
      category: 'EQUIPMENT'
    },
    {
      src: img4,
      alt: 'Squat Rack Workout',
      category: 'EQUIPMENT'
    },
    {
      src: img5,
      alt: 'Treadmill Run',
      category: 'MEMBERS'
    },
    {
      src: img6,
      alt: 'Full Gym Setup',
      category: 'MEMBERS'
    }
  ];

  const filteredImages = activeTab === 'ALL' 
    ? images 
    : images.filter(img => img.category === activeTab);

  const showPrevImage = (e) => {
    e.stopPropagation();
    setSelectedImageIndex((prev) => (prev === 0 ? filteredImages.length - 1 : prev - 1));
  };

  const showNextImage = (e) => {
    e.stopPropagation();
    setSelectedImageIndex((prev) => (prev === filteredImages.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    if (selectedImageIndex === null) return;
    
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedImageIndex(null);
      if (e.key === 'ArrowLeft') setSelectedImageIndex((prev) => (prev === 0 ? filteredImages.length - 1 : prev - 1));
      if (e.key === 'ArrowRight') setSelectedImageIndex((prev) => (prev === filteredImages.length - 1 ? 0 : prev + 1));
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImageIndex, filteredImages.length]);

  return (
    <div className="bg-bg-primary text-white min-h-screen">
      <SEO 
        title="Photo Gallery" 
        description="Browse through training sessions, member transformations, equipment photos, and workouts at Neo Fitness Gym." 
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
                onClick={() => {
                  setActiveTab(tab);
                  setSelectedImageIndex(null); // Reset lightbox on tab change
                }}
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-500">
            {filteredImages.map((img, idx) => (
              <div 
                key={idx}
                onClick={() => setSelectedImageIndex(idx)}
                className="relative overflow-hidden group border border-gold-dark/10 transition-all duration-500 transform hover:scale-[1.02] aspect-[4/3] w-full cursor-pointer"
              >
                {/* Image */}
                <img 
                  src={img.src} 
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />

                {/* Hover Gold Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
                  <div className="w-12 h-12 rounded-full bg-gold-primary flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform duration-300 shadow-lg shadow-gold-primary/20">
                    <Search className="w-6 h-6 text-black stroke-[2.5]" />
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

      {/* Lightbox Modal */}
      {selectedImageIndex !== null && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 transition-opacity duration-300 animate-fade-in">
          
          {/* Close button */}
          <button
            onClick={() => setSelectedImageIndex(null)}
            className="absolute top-6 right-6 text-white hover:text-gold-primary transition-colors p-2 z-60"
            aria-label="Close lightbox"
          >
            <svg className="w-8.5 h-8.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Prev Button */}
          <button
            onClick={showPrevImage}
            className="absolute left-4 sm:left-8 text-white hover:text-gold-primary transition-colors p-2 z-60 bg-bg-secondary/40 rounded-full border border-gold-dark/20 hover:bg-gold-primary/10"
            aria-label="Previous image"
          >
            <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Main Image Container */}
          <div className="relative max-w-5xl max-h-[80vh] w-full flex items-center justify-center select-none">
            <img
              src={filteredImages[selectedImageIndex].src}
              alt={filteredImages[selectedImageIndex].alt}
              className="max-w-full max-h-[80vh] object-contain border border-gold-dark/20 shadow-2xl animate-scale-up"
            />
            
            {/* Image Info / Badge */}
            <div className="absolute bottom-4 left-4 right-4 bg-black/80 backdrop-blur-sm p-4 border border-gold-dark/15 text-left flex justify-between items-center">
              <div>
                <p className="text-[10px] font-black text-gold-primary tracking-widest uppercase mb-1">
                  {filteredImages[selectedImageIndex].category}
                </p>
                <h4 className="text-sm font-black text-white uppercase tracking-wider">
                  {filteredImages[selectedImageIndex].alt}
                </h4>
              </div>
              <span className="text-xs text-text-body font-mono">
                {selectedImageIndex + 1} / {filteredImages.length}
              </span>
            </div>
          </div>

          {/* Next Button */}
          <button
            onClick={showNextImage}
            className="absolute right-4 sm:right-8 text-white hover:text-gold-primary transition-colors p-2 z-60 bg-bg-secondary/40 rounded-full border border-gold-dark/20 hover:bg-gold-primary/10"
            aria-label="Next image"
          >
            <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};

export default GalleryPage;
