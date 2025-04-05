import React from 'react';
import '../styles/FilterSortBar.css';

const FilterSortBar = ({ searchTerm, setSearchTerm, sortOrder, setSortOrder }) => {
  return (
    <div className="filter-bar">
      <input
        type="text"
        placeholder="Search by name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
        <option value="asc">Sort: A-Z</option>
        <option value="desc">Sort: Z-A</option>
      </select>
    </div>
  );
};

export default FilterSortBar;
