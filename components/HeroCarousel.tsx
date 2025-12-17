import React, { useState, useEffect } from 'react';

const IMAGES = [
  {
    src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    caption: "Advanced Data Analytics & Optimization",
    alt: "Data dashboard showing analytics"
  },
  {
    src: "https://images.unsplash.com/photo-1611974765270-ca1258634369?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    caption: "Financial Risk Modeling & Strategy",
    alt: "Stock market financial charts"
  },
  {
    src: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    caption: "Defense Logistics & Strategic Planning",
    alt: "Global logistics and shipping"
  },
  {
    src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    caption: "Industrial Automation & Process Control",
    alt: "Automated industrial factory arm"
  }
];

interface HeroCarouselProps {
  className?: string;
}

const HeroCarousel: React.FC<HeroCarouselProps> = ({ className = "" }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % IMAGES.length);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <div 
      className={`relative overflow-hidden group ${className}`}
      role="region"
      aria-label="Conference Featured Themes Carousel"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
    >
      {/* Images */}
      {IMAGES.map((image, index) => (
        <figure
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
          aria-hidden={index !== currentIndex}
        >
          <img
            src={image.src}
            alt={image.alt}
            className="w-full h-full object-cover"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-govt-navy/90 via-govt-navy/20 to-transparent" aria-hidden="true"></div>
          
          {/* Caption */}
          <figcaption className="absolute bottom-0 left-0 right-0 p-6 text-left transform transition-transform duration-500">
            <span className="inline-block px-2 py-0.5 rounded text-[10px] font-bold bg-govt-accent text-white uppercase tracking-wider mb-2 shadow-sm">
              Featured Theme
            </span>
            <p className="text-white font-serif font-medium text-lg leading-tight drop-shadow-md">
              {image.caption}
            </p>
          </figcaption>
        </figure>
      ))}

      {/* Indicators */}
      <div className="absolute top-4 right-4 flex space-x-1.5 z-20">
        {IMAGES.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-1.5 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50 ${
              index === currentIndex ? 'bg-white w-6' : 'bg-white/50 hover:bg-white/80 w-2'
            }`}
            aria-label={`Go to slide ${index + 1}: ${IMAGES[index].caption}`}
            aria-current={index === currentIndex ? 'true' : 'false'}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;