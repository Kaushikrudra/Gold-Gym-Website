import React from 'react';
import SEO from '../components/SEO';
import Hero from '../components/Hero';
import Training from '../components/Training';
import Offer from '../components/Offer';
import About from '../components/About';
import BMICalculator from '../components/BMICalculator';
import Pricing from '../components/Pricing';
import BeforeAfter from '../components/BeforeAfter';
import Testimonials from '../components/Testimonials';
import Gallery from '../components/Gallery';
import Blog from '../components/Blog';

const Home = () => {
  return (
    <>
      {/* SEO Title & Description */}
      <SEO 
        title="Premium Fitness Training in Metropolis" 
        description="Transform your body with expert personal training, group classes, and proven fitness programs at Neo Fitness Gym."
      />

      <Hero />
      
      <Training />
      
      <Offer />
      
      <About />
      
      {/* 1. BMI Calculator widget (after About Me) */}
      <BMICalculator />
      
      <Pricing />
      
      {/* 4. Before/After transformations (before Testimonials) */}
      <BeforeAfter />
      
      {/* 3. Testimonials (after Pricing) */}
      <Testimonials />
      
      <Gallery />
      
      <Blog />
    </>
  );
};

export default Home;
