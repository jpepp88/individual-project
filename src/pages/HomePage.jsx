import React from 'react';
import ImageSlider from '../components/ImageSlider';
import style from '../styles/HomePage.module.css';

const HomePage = () => {
  return (
    <div className={style.homePage}>
      <div className={style.aboutSection}>
        <p>Welcome to EMDb!</p>
      </div>
      <div className={style.imageSlider}>
        <ImageSlider />
      </div>
    </div>
  );
};

export default HomePage;
