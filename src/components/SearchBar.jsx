import React from 'react';
import '../styles/SearchBar.css';

const SearchBar = ({ onSearch }) => {
  const handleSearch = (event) => {
    onSearch(event.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Search movies..."
      className="search-bar"
      onChange={handleSearch}
    />
  );
};

export default SearchBar;
