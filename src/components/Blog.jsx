import React from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
  const blogs = [
    {
      title: 'THE ULTIMATE GUIDE TO HYPERTROPHY: BULK SMART',
      image: 'https://images.unsplash.com/photo-1544033527-b192daee1f5b?q=80&w=800&auto=format&fit=crop',
      date: 'JULY 10, 2026',
      desc: 'Discover the scientific principles behind muscular growth, calorie calculation, and the exact workout routines to maximize your mass gains.'
    },
    {
      title: '10 KEY REASONS WHY CARDIO MIGHT BE RUINING YOUR GAINS',
      image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=800&auto=format&fit=crop',
      date: 'JUNE 28, 2026',
      desc: 'Are you running away your hard-earned muscle? Learn how to balance cardiovascular conditioning with high intensity resistance training.'
    }
  ];

  return (
    <section id="blog" className="py-24 bg-bg-secondary relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Outline Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-stroke-gold-thick uppercase tracking-widest">
            FROM BLOG
          </h2>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {blogs.map((blog, idx) => (
            <div 
              key={idx}
              className="bg-bg-primary border border-gold-dark/10 group flex flex-col md:flex-row h-full transition-all duration-300 hover:border-gold-primary/60 hover:shadow-[0_0_20px_rgba(184,134,11,0.1)]"
            >
              {/* Blog Image */}
              <div className="md:w-1/2 h-64 md:h-auto overflow-hidden relative">
                <img 
                  src={blog.image} 
                  alt={blog.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-300" />
              </div>

              {/* Blog Content */}
              <div className="p-8 md:w-1/2 flex flex-col justify-between">
                <div>
                  {/* Category Tag & Date */}
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-xs font-black text-gold-primary tracking-widest uppercase bg-gold-dark/15 px-2.5 py-1">
                      Gym & Fitness
                    </span>
                    <span className="text-[10px] font-bold text-text-body tracking-wider">
                      {blog.date}
                    </span>
                  </div>

                  {/* Bold Title */}
                  <h3 className="text-lg font-black text-white leading-snug uppercase mb-4 group-hover:text-gold-primary transition-colors duration-300">
                    {blog.title}
                  </h3>

                  {/* Short Description */}
                  <p className="text-text-body text-xs leading-relaxed mb-6">
                    {blog.desc}
                  </p>
                </div>

                {/* Read More Link */}
                <Link 
                  to="/blog"
                  className="inline-block text-[11px] font-bold tracking-widest text-white border-b-2 border-gold-primary/45 group-hover:border-gold-primary hover:text-gold-primary transition-colors duration-300 w-fit pb-1"
                >
                  READ ARTICLE
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View All Articles Link */}
        <div className="text-center">
          <Link
            to="/blog"
            className="inline-block px-10 py-4 text-xs font-bold tracking-widest text-white border-2 border-gold-primary rounded-none hover:bg-gold-primary hover:text-black transition-all duration-300"
          >
            VIEW ALL ARTICLES
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Blog;
