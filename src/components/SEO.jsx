import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, keywords }) => {
  const defaultTitle = "Neo Fitness Gym | Premium Fitness Training";
  const defaultDesc = "Transform your body with expert personal training, group classes, and proven fitness programs at Neo Fitness Gym.";
  
  const siteTitle = title ? `${title} | Neo Fitness Gym` : defaultTitle;
  const siteDesc = description || defaultDesc;
  
  return (
    <Helmet>
      <title>{siteTitle}</title>
      <meta name="description" content={siteDesc} />
      {keywords && <meta name="keywords" content={keywords} />}
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={siteDesc} />
      <meta property="og:image" content="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=600&auto=format&fit=crop" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:title" content={siteTitle} />
      <meta property="twitter:description" content={siteDesc} />
      <meta property="twitter:image" content="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=600&auto=format&fit=crop" />
      
      <meta name="theme-color" content="#0a0a0a" />
    </Helmet>
  );
};

export default SEO;
