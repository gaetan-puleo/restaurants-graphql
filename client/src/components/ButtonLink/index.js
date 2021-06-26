import React from 'react';
import styles from './index.module.scss';

export default function ButtonLink(props) {
  const { children, type = 'button', onClick } = props;
  return (
    <button
      className={styles.link}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
