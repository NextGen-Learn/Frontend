import React from 'react';

const Text = ({ children, type }) => {
  const Tag = type || 'p';
  return <Tag>{children}</Tag>;
};

export default Text;