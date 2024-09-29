import React from 'react';
import ListItem from '../atoms/ListItem';
import './Category.scss';

const Category = ({ title, items }) => (
  <div className="category">
    <h3>{title}</h3>
    <ul>
      {items.map((item, index) => (
        <ListItem key={index} item={item} />
      ))}
    </ul>
  </div>
);

export default Category;
