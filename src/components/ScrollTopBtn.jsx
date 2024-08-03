import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

export default function ScrollTopBtn() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="fixed bottom-4 right-4">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="bg-blue-500 text-white p-2 rounded-full shadow-md hover:bg-blue-600 focus:outline-none"
        >
          <FaArrowUp size={20} />
        </button>
      )}
    </div>
  );
}
