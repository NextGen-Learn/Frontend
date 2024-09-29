import React from 'react';
import SearchButton from '../atoms/SearchButton';
import './SearchBar.scss';

const SearchBar = () => {
  return (
    <div className="search-bar">
      <input type="text" placeholder="Услуга или специалист" />
      <SearchButton text="Найти" />
    </div>
  );
};

export default SearchBar;
