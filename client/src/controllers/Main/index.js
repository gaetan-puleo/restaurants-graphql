import React, { useState } from 'react';
import Restaurants from '../../components/Restaurants';
import AddRestaurant from '../../components/AddRestaurant';
import RestaurantItem from '../../components/RestaurantItem';
import EditRestaurant from '../../components/EditRestaurant';
import { useRestaurants } from '../../features/restaurants/hooks';

export default function Main() {
  const {
    loading, data, editRestaurant, addRestaurant, editReview, addReview,
  } = useRestaurants();

  const [editId, setEditId] = useState(null);
  if (loading) return '...loading';

  return (
    <>
      <Restaurants>
        {data.restaurants.map(({ name, id, reviews }) => (
          <RestaurantItem
            editId={editId}
            setEditId={setEditId}
            key={id}
            id={id}
            name={name}
            reviews={reviews}
            editReview={editReview}
            addReview={addReview}
          />
        ))}
      </Restaurants>

      {!editId && <AddRestaurant addRestaurant={addRestaurant} />}
      {editId && (
      <EditRestaurant
        editRestaurant={editRestaurant}
        restaurant={data.restaurants.find((r) => r.id === editId)}
        closeEdit={() => setEditId(null)}
      />
      )}

    </>
  );
}
