import React from 'react';
import './SearchButton.scss';

const SearchButton = ({ text }) => {
  return <button className="search-button">{text}</button>;
};

export default SearchButton;
