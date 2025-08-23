import React, { useState, useEffect } from 'react';
import './BackgroundImage.css';

const BackgroundImage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simulate image loading for smooth fade-in effect
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`background-container ${isLoaded ? 'loaded' : ''}`}>
      <div className="background-image"></div>
      <div className="background-overlay"></div>
    </div>
  );
};

export default BackgroundImage;
