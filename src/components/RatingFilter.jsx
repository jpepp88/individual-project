import React from 'react';
import '../styles/RatingFilter.css';

const RatingFilter = ({ onFilter }) => {
  const handleFilter = (event) => {
    onFilter(event.target.value);
  };

  return (
    <div className="ratingFilter">
      <select onChange={handleFilter} className="rating-filter">
        <option value="all">All Ratings</option>
        <option value="1">1 Star</option>
        <option value="2">2 Stars</option>
        <option value="3">3 Stars</option>
        <option value="4">4 Stars</option>
        <option value="5">5 Stars</option>
      </select>
    </div>
  );
};

export default RatingFilter;
