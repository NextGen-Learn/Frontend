import React from 'react';
import styles from './Logo.module.scss';
import classNames from 'classnames';

const Logo = ({ className }) => {
  const logoClassNames = classNames(styles.logo, className);

  return (
    <div className={logoClassNames}>
      <h1>NGL</h1>
    </div>
  );
};

export default Logo;
