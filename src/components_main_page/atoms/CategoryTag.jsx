import React from 'react';
import './CategoryTag.scss';

const CategoryTag = ({ label }) => {
  return <span className="category-tag">{label}</span>;
};

export default CategoryTag;
