import React from 'react';
import './OrderButton.scss';

const OrderButton = ({ text }) => {
  return (
    <button className="custom-button">
      Заполнить детали заказа
    </button>
  );
};

export default OrderButton;
