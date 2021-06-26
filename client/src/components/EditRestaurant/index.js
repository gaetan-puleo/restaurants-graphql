import React, { useState } from 'react';
import { EDIT_RESTAURANT } from '../../features/restaurants/mutations';
import Form from '../Form';

export default function EditRestaurant(props) {
  const {
    refetch, restaurant, closeEdit,
  } = props;
  const [name, setName] = useState(restaurant.name);

  return (
    <Form
      refetch={refetch}
      mutation={EDIT_RESTAURANT}
      afterSuccess={closeEdit}
      value={name}
      setValue={setName}
      buttonText="Save"
      input={{ name, id: restaurant.id }}
      textareaId={`edit-restaurant-${restaurant.id}`}
      textareaLabel="Edit a restaurant"
    />
  );
}
