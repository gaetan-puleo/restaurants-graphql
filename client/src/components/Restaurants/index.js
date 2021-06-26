import React from 'react';
import styles from './index.module.scss';
import RestaurantItem from './RestaurantItem';

export default function Restaurants(props) {
  const { data, refetch, setEditId, editId } = props;

  return (
    <ul className={styles.list}>
      {data.restaurants.map(({ name, id, reviews }) => (
        <RestaurantItem
					editId={editId}
					setEditId={setEditId}
          refetch={refetch}
          key={id}
          id={id}
          name={name}
          reviews={reviews}
        />
      ))}
    </ul>
  );
}
