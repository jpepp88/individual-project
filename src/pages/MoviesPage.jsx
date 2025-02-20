import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import GenreFilter from '../components/GenreFilter';
import RatingFilter from '../components/RatingFilter';
import MovieCard from '../components/MovieCard';
import style from '../styles/MoviesPage.module.css';

import movie1 from '../assets/movie1.jpg';
import movie2 from '../assets/movie2.jpg';
import movie3 from '../assets/movie3.jpg';
import movie4 from '../assets/movie4.jpg';
import movie5 from '../assets/movie5.jpg';

const MoviesPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [genre, setGenre] = useState('');
  const [rating, setRating] = useState('');

  const movies = [
    { title: 'Star Wars: Episode 4', genre: 'Action', rating: 3, image: movie1 },
    { title: 'Star Wars: Episode 5', genre: 'Action', rating: 4, image: movie2 },
    { title: 'Star Wars: Episode 6', genre: 'Action', rating: 5, image: movie3 },
    { title: 'Star Wars: Episode 1', genre: 'Action', rating: 2, image: movie4 },
    { title: 'Star Wars: Episode 2', genre: 'Action', rating: 1, image: movie5 },
  ];

  const filteredMovies = movies
    .filter(movie => movie.title.toLowerCase().includes(searchTerm.toLowerCase()))
    .filter(movie => (genre && genre !== 'all' ? movie.genre.toLowerCase() === genre.toLowerCase() : true))
    .filter(movie => (rating && rating !== 'all' ? movie.rating === parseInt(rating) : true));

  const handleClearFilters = () => {
    setSearchTerm('');
    setGenre('');
    setRating('');
  };

  return (
    <div className={style.moviesPage}>
      <SearchBar onSearch={setSearchTerm} />
      <div className={style.filtersContainer}>
        <GenreFilter onFilter={setGenre} />
        <RatingFilter onFilter={setRating} />
        <button onClick={handleClearFilters} className={style.clearButton}>X</button>
      </div>
      <div className={style.movieCards}>
        {filteredMovies.map((movie, index) => (
          <MovieCard key={index} {...movie} />
        ))}
      </div>
    </div>
  );
};

export default MoviesPage;
