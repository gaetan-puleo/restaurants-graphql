import React from 'react';
import ReviewItem from './ReviewItem';
import styles from './index.module.scss';

export default function Reviews(props) {
  const { reviews } = props;
  return (
    <ul className={styles.list}>
      {reviews.map(({ id, content }) => <ReviewItem content={content} key={id} />)}
    </ul>
  );
}
