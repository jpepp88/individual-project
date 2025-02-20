import React from 'react';
import ImageSlider from '../components/ImageSlider';
import style from '../styles/HomePage.module.css';

const HomePage = () => {
  const images = [
    'image1.jpg',
    'image2.jpg',
    'image3.jpg',
  ];

  return (
    <div className={style.homePage}>
      <div className={style.aboutSection}>
        <p>Welcome to EMDB!</p>
      </div>
      <ImageSlider images={images} />
    </div>
  );
};

export default HomePage;
