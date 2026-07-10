import React from 'react';

export const PageSkeleton = () => {
  return (
    <div className="bg-bg-primary min-h-screen pt-32 pb-24 px-4 sm:px-6 lg:px-8 text-white flex flex-col items-center">
      {/* Header Banner Shimmer */}
      <div className="w-full max-w-3xl h-16 bg-bg-secondary animate-pulse mb-6 border border-gold-dark/10"></div>
      <div className="w-48 h-4 bg-bg-secondary animate-pulse mb-16"></div>

      {/* Grid Shimmer Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-7xl">
        {[1, 2, 3].map((n) => (
          <div key={n} className="bg-bg-secondary border border-gold-dark/10 p-6 flex flex-col gap-4 animate-pulse">
            <div className="w-full aspect-video bg-bg-primary"></div>
            <div className="w-3/4 h-6 bg-bg-primary"></div>
            <div className="w-1/2 h-4 bg-bg-primary"></div>
            <div className="w-full h-12 bg-bg-primary mt-4"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const CardSkeleton = () => {
  return (
    <div className="bg-bg-secondary border border-gold-dark/10 p-6 flex flex-col gap-4 animate-pulse">
      <div className="w-full aspect-video bg-bg-primary"></div>
      <div className="w-3/4 h-6 bg-bg-primary"></div>
      <div className="w-1/2 h-4 bg-bg-primary"></div>
      <div className="w-full h-12 bg-bg-primary mt-4"></div>
    </div>
  );
};
