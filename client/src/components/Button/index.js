import React from 'react';
import styles from './index.module.scss';

export default function Button(props) {
  const { children, type = 'button' } = props;

  return (
    <button
      className={styles.button}
      type={type}
    >
      {children}
    </button>
  );
}
