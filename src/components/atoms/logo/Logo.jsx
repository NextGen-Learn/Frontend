import React from 'react';
import styles from './Logo.module.scss'; // Импортируем стили из модульного файла
import classNames from 'classnames';

const Logo = ({ className }) => {
  // Используем classNames для объединения классов
  const logoClassNames = classNames(styles.logo, className);

  return (
    <div className={logoClassNames}>
      <h1>NGL</h1>
    </div>
  );
};

export default Logo;
