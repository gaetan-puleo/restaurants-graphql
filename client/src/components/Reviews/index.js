import React from 'react';
import ReviewItem from './ReviewItem';
import styles from './index.module.scss';

export default function Reviews(props) {
  const { reviews, setEditId, editId } = props;
  return (
    <ul className={styles.list}>
      {reviews.map(({ id, content, createdAt}) => (
        <ReviewItem
					createdAt={createdAt}
          id={id}
          editId={editId}
					setEditId={setEditId}
          content={content}
          key={id}
        />
      ))}
    </ul>
  );
}
