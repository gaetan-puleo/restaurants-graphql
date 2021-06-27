import React from 'react';
import styles from './index.module.scss';

export default function Restaurants(props) {
  const { children } = props;

  return (
    <ul className={styles.list}>
      {children}
    </ul>
  );
}
