import styles from "../styles/ImageSlider.module.css"; // Import the CSS module correctly
import image1 from "../assets/starwars_anew.jpeg";
import image2 from "../assets/starwars_empire.jpeg";
import image3 from "../assets/starwars_return.jpeg";
import arrow from "../assets/arrow.png";
import arrow2 from "../assets/arrow2.png";
import React, { useState } from 'react';

const ImageSlider = () => {
  const [imageIndex, setImageIndex] = useState(0);

  const images = [image1, image2, image3]; // Add your image paths here

  // Function to manually slide to the next or previous image
  const slideImage = (direction) => {
    const newIndex = direction === 'next' ? (imageIndex + 1) % images.length : (imageIndex - 1 + images.length) % images.length;
    setImageIndex(newIndex);
  };

  return (
    <div className={styles.sliderContainer}>
      <button id="prev" className={styles.button} onClick={() => slideImage('prev')}>
        <img src={arrow2} alt="Previous" className={styles.arrow} />
      </button>
      <div className={styles.wrapper}>
        <div className={styles.imageContainer}>
          <img src={images[imageIndex]} alt={`slide ${imageIndex}`} className={styles.image} /> // Apply image class
        </div>
      </div>
      <button id="next" className={styles.button} onClick={() => slideImage('next')}>
        <img src={arrow} alt="Next" className={styles.arrow} />
      </button>
    </div>
  );
};

export default ImageSlider;
