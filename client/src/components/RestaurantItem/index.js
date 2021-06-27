import React, { useState } from 'react';
import Reviews from '../Reviews';
import AddReview from '../AddReview';
import EditReview from '../EditReview';
import ButtonLink from '../ButtonLink';
import styles from './index.module.scss';
import {canBeEdited} from '../../utils/canBeEdited';

export default function RestaurantItem(props) {
  const {
    addReview,
    editReview,
    name,
		createdAt,
    reviews,
    id,
    // rename editId and setEditId to avoid name clashing
    editId: editRestaurantId,
    setEditId: setEditRestaurantId,
  } = props;

	const restaurantCanBeEdited = canBeEdited(createdAt)
  // Review Edit mode
  const [editId, setEditId] = useState(null);
  // If editId is set, find the review to edit
  const currentReview = editId && reviews
    .find((r) => r.id === editId);


  // Review Add mode
  const [addMode, setAddMode] = useState(false);
  const isAddMode = Boolean(addMode && !editId);

  // Restaurant edit mode
  const editCurrentRestaurant = editRestaurantId === id;
  const toggleRestaurantEditMode = () => (editCurrentRestaurant
    ? setEditRestaurantId(null)
    : setEditRestaurantId(id)
  );
  const textButton = `Toggle ${editCurrentRestaurant ? 'off' : 'on'} edit`;

  return (
    <li className={styles.item}>
      <header className={styles.header}>
        <h2 className={styles.title}>{name}</h2>

				{restaurantCanBeEdited && (
				<ButtonLink onClick={toggleRestaurantEditMode}>{textButton}</ButtonLink>)}

        {!addMode && (
        <ButtonLink onClick={() => setAddMode(true)}>
          Add a review
        </ButtonLink>
        )}

      </header>

      <Reviews
        reviews={reviews}
        setEditId={setEditId}
        editId={editId}
      />

      {isAddMode && (
      <AddReview addReview={addReview} restaurantId={id} />)}

      {currentReview && (
      <EditReview
        editReview={editReview}
        review={currentReview}
        closeEdit={() => setEditId(null)}
        restaurantId={id}
      />
      )}
    </li>
  );
}
