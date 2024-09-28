import React, { useState, useEffect } from 'react';

// List of background images
const bgImages = [
  'url(https://via.placeholder.com/800x400/FF5733)',
  'url(https://via.placeholder.com/800x400/33FF57)',
  'url(https://via.placeholder.com/800x400/3357FF)',
  'url(https://via.placeholder.com/800x400/FFD133)',
];

const Fans = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
      // Set up an interval to change the background image every 5 seconds
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % bgImages.length);
      }, 5000);
  
      // Clean up the interval when the component unmounts
      return () => clearInterval(interval);
    }, []);



  return (
    <div
      style={{
        height: '400px',
        width: '800px',
        backgroundImage: bgImages[currentIndex],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontSize: '24px',
        transition: 'background-image 1s ease-in-out',
      }}
    >
      Background Slider
    </div>
  
  )
}

export default Fans