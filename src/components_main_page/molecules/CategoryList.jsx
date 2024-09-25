import React from 'react';
import CategoryTag from '../atoms/CategoryTag';
import './CategoryList.scss';

const CategoryList = ({ categories }) => {
  return (
    <div className="category-list">
      {categories.map((category, index) => (
        <CategoryTag key={index} label={category} />
      ))}
    </div>
  );
};

export default CategoryList;
