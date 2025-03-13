import React from 'react';
import '../styles/GenreFilter.css';

const GenreFilter = ({ onFilter }) => {
  const handleFilter = (event) => {
    onFilter(event.target.value.toLowerCase());
  };

  return (
    <div className="genreFilter">
      <select onChange={handleFilter} className="genre-filter">
        <option value="all">All Genres</option>
        <option value="action">Action</option>
        <option value="comedy">Comedy</option>
        <option value="drama">Drama</option>
        <option value="horror">Horror</option>
        <option value="romance">Romance</option>
      </select>
    </div>
  );
};

export default GenreFilter;
