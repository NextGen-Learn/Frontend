import React from 'react';
import './OrderPanel.scss';
import OrderButton from '../atoms/OrderButton';

const Order = () => {
  return (
    <div className="rectangle">
      <div className="order-text">Заполните детали заказа</div>
      <div className="button"><OrderButton /></div>
    </div>
  );
};

export default Order;
