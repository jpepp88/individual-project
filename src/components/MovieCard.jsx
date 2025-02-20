import React from 'react';
import '../styles/MovieCard.css';

const MovieCard = ({ title, genre, rating, image }) => {
  return (
    <div className="movie-card">
      <img src={image} alt={title} className="movie-card-image" />
      <div className='movie-card-content'>
        <h2>{title}</h2>
        <p>{genre}</p>
        <p>{rating}/5</p>
      </div>
    </div>
  );
};

export default MovieCard;
