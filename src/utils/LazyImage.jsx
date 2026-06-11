import { useState, useRef, useEffect } from 'react';

const LazyImage = ({ 
  src, 
  alt, 
  className = '', 
  placeholder = 'blur',
  threshold = 0.1,
  ...props 
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [error, setError] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [threshold]);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setError(true);
  };

  const getPlaceholderStyle = () => {
    if (placeholder === 'blur') {
      return {
        filter: 'blur(20px)',
        transform: 'scale(1.1)',
        transition: 'filter 0.6s ease, transform 0.6s ease'
      };
    }
    return {};
  };

  const getImageStyle = () => {
    if (!isLoaded) return getPlaceholderStyle();
    return {
      filter: 'none',
      transform: 'scale(1)',
      transition: 'filter 0.6s ease, transform 0.6s ease'
    };
  };

  if (error) {
    return (
      <div 
        className={`bg-midnight flex items-center justify-center text-mist ${className}`}
        {...props}
      >
        <span className="text-sm">Failed to load image</span>
      </div>
    );
  }

  return (
    <div ref={imgRef} className={`relative overflow-hidden ${className}`} {...props}>
      {isInView && (
        <img
          src={src}
          alt={alt}
          onLoad={handleLoad}
          onError={handleError}
          style={getImageStyle()}
          className={`w-full h-full object-cover ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-600`}
          loading="lazy"
          decoding="async"
        />
      )}
      {!isLoaded && (
        <div className="absolute inset-0 bg-midnight animate-pulse" />
      )}
    </div>
  );
};

export default LazyImage;
