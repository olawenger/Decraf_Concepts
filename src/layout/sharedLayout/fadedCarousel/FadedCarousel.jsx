import { useState, useEffect } from 'react';
import './FadedCarousel.scss'
import img1 from '../../../assets/construction7.png'
import istockphoto1 from '../../../assets/istockphoto1.jpg'
const FadedCarousel = () => {
  const [index, setIndex] = useState(0);
  const images = [istockphoto1]; // Add your image URLs here
  const imageUrl = images[index];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <div
      className="carousel-container"
     
    >
    
      <div
        className="background-image"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transition: 'background-image 1s ease',
        }}
      ></div>
    </div>
  );
};

export default FadedCarousel;
