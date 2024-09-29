import React from 'react';
import Category from '../molecules/Category';
import './CategoriesSection.scss';

const CategoriesSection = () => {
  const categories = [
    { title: 'Репетиторы', items: ['Английский язык', 'История', 'Математика', 'Русский язык', 'Все услуги'] },
    { title: 'Бухгалтеры и юристы', items: ['Бухгалтеры', 'Юристы', 'Бизнес-тренеры', 'Делопроизводители', 'Все услуги'] },
    { title: 'Мастера по ремонту', items: ['Сантехники', 'Электрики', 'Плиточники', 'Штукатуры', 'Все услуги'] },
    { title: 'Фрилансеры', items: ['Дизайнеры', 'Маркетинг', 'Программисты', 'Верстальщики', 'Все услуги'] },
  ];

  return (
    <div className="categories-section">
      {categories.map((category, index) => (
        <Category key={index} title={category.title} items={category.items} />
      ))}
    </div>
  );
};

export default CategoriesSection;
