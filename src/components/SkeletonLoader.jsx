import React from 'react';

const SkeletonLoader = ({ className = '', lines = 3, height = 'h-4' }) => {
  return (
    <div className={`space-y-3 ${className}`}>
      {Array.from({ length: lines }).map((_, index) => (
        <div
          key={index}
          className={`${height} bg-midnight rounded animate-pulse`}
          style={{
            width: index === lines - 1 ? '60%' : '100%',
            animationDelay: `${index * 0.1}s`
          }}
        />
      ))}
    </div>
  );
};

export const CardSkeleton = () => (
  <div className="bg-deep-sea rounded-lg p-6 space-y-4">
    <div className="h-48 bg-midnight rounded animate-pulse" />
    <SkeletonLoader lines={2} />
  </div>
);

export const HeroSkeleton = () => (
  <div className="min-h-screen bg-ink flex flex-col justify-center px-6 md:px-12 lg:px-gutter">
    <div className="space-y-6 max-w-6xl">
      <div className="h-8 bg-midnight rounded w-32 animate-pulse" />
      <div className="space-y-2">
        <div className="h-20 md:h-32 bg-midnight rounded animate-pulse" />
        <div className="h-6 bg-midnight rounded w-3/4 animate-pulse" />
      </div>
      <div className="flex space-x-8 pt-8">
        {[1, 2, 3].map((i) => (
          <div key={i} className="text-center">
            <div className="h-12 bg-midnight rounded w-16 mx-auto mb-2 animate-pulse" />
            <div className="h-4 bg-midnight rounded w-20 animate-pulse" />
          </div>
        ))}
      </div>
    </div>
  </div>
);

export const SectionSkeleton = () => (
  <div className="py-section section-padding">
    <div className="site-grid space-y-8">
      <div className="text-center space-y-4">
        <div className="h-6 bg-midnight rounded w-32 mx-auto animate-pulse" />
        <div className="h-12 md:h-16 bg-midnight rounded w-3/4 mx-auto animate-pulse" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[1, 2, 3].map((i) => (
          <CardSkeleton key={i} />
        ))}
      </div>
    </div>
  </div>
);

export default SkeletonLoader;
