import React, { useState, useEffect } from 'react';
import './styles/WelcomeAnimation';

const WelcomeAnimation = () => {
  const [showWelcome, setShowWelcome] = useState(false);

  useEffect(() => {
    // Use a timeout to delay showing the welcome message after component mounts
    const timeoutId = setTimeout(() => {
      setShowWelcome(true);
    }, 500);

    // Clear the timeout on component unmount to avoid memory leaks
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className="animation-container">
      <h1 className={showWelcome ? 'welcome-text show' : 'welcome-text'}>Welcome to my page</h1>
    </div>
  );
};

export default WelcomeAnimation;