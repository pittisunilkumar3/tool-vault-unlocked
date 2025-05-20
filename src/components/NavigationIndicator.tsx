
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const NavigationIndicator = () => {
  const [isNavigating, setIsNavigating] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsNavigating(true);
    const timer = setTimeout(() => setIsNavigating(false), 500);
    return () => clearTimeout(timer);
  }, [location]);

  if (!isNavigating) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <div className="h-1 bg-gradient-to-r from-brand-purple to-brand-teal animate-progress"></div>
    </div>
  );
};

export default NavigationIndicator;
