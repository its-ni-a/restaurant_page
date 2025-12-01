import React, { useEffect, useState } from 'react';

const Notification = ({ message }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    setIsVisible(true);
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [message]);

  return (
    <div className={`notification ${isVisible ? 'slide-in' : 'slide-out'}`}>
      {message}
    </div>
  );
};

export default Notification;
