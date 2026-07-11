import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const BlogPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const blogs = [
    {
      title: '5 WARM-UP MISTAKES THAT ARE SLOWING YOUR PROGRESS',
      image: 'https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=600&auto=format&fit=crop',
      date: 'JULY 10, 2026',
      excerpt: 'Static stretching before lifting can actually reduce strength output. Learn the correct dynamic routines.'
    },
    {
      title: 'PROTEIN TIMING: DOES IT REALLY MATTER FOR MUSCLE GROWTH?',
      image: 'https://images.unsplash.com/photo-1579758629938-03607ccdbaba?q=80&w=600&auto=format&fit=crop',
      date: 'JULY 05, 2026',
      excerpt: 'Is the 30-minute post-workout anabolic window real or just a myth? Here is what science says.'
    },
    {
      title: 'HOW TO FIX YOUR SQUAT FORM IN UNDER A WEEK',
      image: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=600&auto=format&fit=crop',
      date: 'JUNE 28, 2026',
      excerpt: 'Ankle mobility, hip tracking, and spinal alignment are the keys to a pain-free, deep barbell squat.'
    },
    {
      title: "RECOVERY DAYS ARE NOT OPTIONAL — HERE'S WHY",
      image: 'https://images.unsplash.com/photo-1605296867304-46d5465a25f1?q=80&w=600&auto=format&fit=crop',
      date: 'JUNE 15, 2026',
      excerpt: 'Muscle tissue is damaged in the gym but rebuilt during sleep and rest. Neglecting recovery halts gains.'
    },
    {
      title: "BUILDING A HOME WORKOUT ROUTINE WHEN YOU CAN'T HIT THE GYM",
      image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=600&auto=format&fit=crop',
      date: 'JUNE 02, 2026',
      excerpt: 'Stuck at home? Utilize calisthenics, progressive intensity, and leverage resistance variables effectively.'
    },
    {
      title: 'THE TRUTH ABOUT FAT-BURNING SUPPLEMENTS',
      image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=600&auto=format&fit=crop',
      date: 'MAY 24, 2026',
      excerpt: 'Separate the marketing hype from metabolic truth about thermogenics, caffeine, and calorie counts.'
    }
  ];

  return (
    <div className="bg-bg-primary text-white min-h-screen">
      <SEO 
        title="Fitness & Gym Blog" 
        description="Get professional training tips, nutrition strategies, squat form reviews, protein intake guides, and recovery advice." 
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
            BLOG
          </h1>
          <div className="flex justify-center items-center gap-2 text-sm font-bold tracking-widest uppercase">
            <Link to="/" className="text-text-body hover:text-gold-primary transition-colors">
              HOME
            </Link>
            <span className="text-gold-dark">/</span>
            <span className="text-gold-primary">BLOG</span>
          </div>
        </div>
      </section>

      {/* b) 6 BLOG CARDS GRID */}
      <section className="py-24 bg-bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog, idx) => (
              <div 
                key={idx}
                className="bg-bg-secondary border border-gold-dark/15 group flex flex-col h-full transition-all duration-300 hover:border-gold-primary/60 hover:shadow-[0_0_20px_rgba(239,68,68,0.1)]"
              >
                {/* Blog Image */}
                <div className="h-56 overflow-hidden relative">
                  <img 
                    src={blog.image} 
                    alt={blog.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-300" />
                </div>

                {/* Blog Content */}
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    {/* Category Tag & Date */}
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-[10px] font-black text-gold-primary tracking-widest uppercase bg-gold-dark/15 px-2.5 py-1">
                        Gym & Fitness
                      </span>
                      <span className="text-[9px] font-bold text-text-body tracking-wider">
                        {blog.date}
                      </span>
                    </div>

                    {/* Bold Title */}
                    <h3 className="text-sm sm:text-base font-black text-white leading-snug uppercase mb-3 group-hover:text-gold-primary transition-colors duration-300">
                      {blog.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-text-body text-xs leading-relaxed mb-6">
                      {blog.excerpt}
                    </p>
                  </div>

                  {/* Read More Link */}
                  <a 
                    href="#blog" 
                    className="inline-block text-[10px] font-bold tracking-widest text-white border-b-2 border-gold-primary/45 group-hover:border-gold-primary hover:text-gold-primary transition-colors duration-300 w-fit pb-1"
                  >
                    READ ARTICLE
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
