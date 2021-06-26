import React, { useState } from 'react';
import Reviews from '../Reviews';
import AddReview from '../AddReview';
import EditReview from '../EditReview';
import ButtonLink from '../ButtonLink';
import styles from './RestaurantItem.module.scss';

export default function RestaurantItem(props) {
  const {
    name, reviews, id, refetch,
  } = props;

  const [editId, setEditId] = useState(null);
  const [addMode, setAddMode] = useState(false);

  return (
    <li className={styles.item}>
      <header className={styles.header}>
        <h2>{name}</h2>

        {!addMode && (
        <ButtonLink
          onClick={() => setAddMode(true)}
        >
          Add a review
        </ButtonLink>
        )}

      </header>

      <Reviews
        reviews={reviews}
        setEditId={setEditId}
        editId={editId}
      />
      {addMode && !editId && <AddReview restaurantId={id} refetch={refetch} />}

      {editId && (
      <EditReview
        review={reviews.find(r => r.id === editId)}
        closeEdit={() => setEditId(null)}
        restaurantId={id}
        refetch={refetch}
      />
      )}
    </li>
  );
}
