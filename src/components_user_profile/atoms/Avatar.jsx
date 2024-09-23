import React from 'react';
import './Avatar.scss';

const Avatar = ({ src, alt }) => (
  <img className="avatar" src={src} alt={alt} />
);

export default Avatar;
