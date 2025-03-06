import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import GenreFilter from '../components/GenreFilter';
import RatingFilter from '../components/RatingFilter';
import MovieCard from '../components/MovieCard';
import style from '../styles/MoviesPage.module.css';
import arrow from '../assets/arrow.png';
import arrow2 from '../assets/arrow2.png';

import movie1 from '../assets/movie1.jpg';
import movie2 from '../assets/movie2.jpg';
import movie3 from '../assets/movie3.jpg';
import movie4 from '../assets/movie4.jpg';
import movie5 from '../assets/movie6.jpg';
import movie6 from '../assets/movie5.jpg';
import movie7 from '../assets/movie7.jpg';
import movie8 from '../assets/movie8.jpg';
import movie9 from '../assets/movie9.jpg';
import movie10 from '../assets/movie10.jpg';
import movie11 from '../assets/movie11.jpg';

const MoviesPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [genre, setGenre] = useState('');
  const [rating, setRating] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const moviesPerPage = 5;

  const movies = [
    { title: 'Star Wars: Episode 1', genre: 'Action', rating: 2, image: movie4 },
    { title: 'Star Wars: Episode 2', genre: 'Action', rating: 1, image: movie5 },
    { title: 'Star Wars: Episode 3', genre: 'Action', rating: 3, image: movie6 },
    { title: 'Star Wars: Episode 4', genre: 'Action', rating: 3, image: movie1 },
    { title: 'Star Wars: Episode 5', genre: 'Action', rating: 4, image: movie2 },
    { title: 'Star Wars: Episode 6', genre: 'Action', rating: 5, image: movie3 },
    { title: 'Star Wars: Episode 7', genre: 'Action', rating: 4, image: movie7 },
    { title: 'Star Wars: Episode 8', genre: 'Action', rating: 5, image: movie8 },
    { title: 'Star Wars: Episode 9', genre: 'Action', rating: 2, image: movie9 },
    { title: 'Star Wars: Rogue One', genre: 'Action', rating: 4, image: movie10 },
    { title: 'Star Wars: Solo', genre: 'Action', rating: 3, image: movie11 },
  ];

  const filteredMovies = movies
    .filter(movie => movie.title.toLowerCase().includes(searchTerm.toLowerCase()))
    .filter(movie => (genre && genre !== 'all' ? movie.genre.toLowerCase() === genre.toLowerCase() : true))
    .filter(movie => (rating && rating !== 'all' ? movie.rating === parseInt(rating) : true));

  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = filteredMovies.slice(indexOfFirstMovie, indexOfLastMovie);

  const totalPages = Math.ceil(filteredMovies.length / moviesPerPage);

  const handleClearFilters = () => {
    setSearchTerm('');
    setGenre('');
    setRating('');
  };

  const handleNextPage = () => {
    setCurrentPage(prevPage => Math.min(prevPage + 1, totalPages));
  };

  const handlePrevPage = () => {
    setCurrentPage(prevPage => Math.max(prevPage - 1, 1));
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
        {currentMovies.length > 0 ? (
          currentMovies.map((movie, index) => (
            <MovieCard key={index} {...movie} />
          ))
        ) : (
          <p className={style.errorMessage}>No movies found.</p>
        )}
      </div>
      {currentMovies.length > 0 && (
        <div className={style.pagination}>
          <button onClick={handlePrevPage} disabled={currentPage === 1} className={style.paginationButton}>
            <img src={arrow2} alt="Previous" className={style.arrow} />
          </button>
          <span>{currentPage} / {totalPages}</span>
          <button onClick={handleNextPage} disabled={currentPage === totalPages} className={style.paginationButton}>
            <img src={arrow} alt="Next" className={style.arrow} />
          </button>
        </div>
      )}
    </div>
  );
};

export default MoviesPage;
