import React from 'react';
import styles from './index.module.scss';

export default function TextArea(props) {
  const {
    value, onChange, label, placeholder = '', id,
  } = props;

  return (
    <div>
      <label htmlFor={id} className={styles.label}>{label}</label>
      <textarea
        id={id}
        placeholder={placeholder}
        className={styles.input}
        onChange={onChange}
        value={value}
      />
    </div>
  );
}
