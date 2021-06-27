import React, { useState } from 'react';
import Form from '../Form';

export default function EditRestaurant(props) {
  const { restaurant, closeEdit, editRestaurant } = props;
  const [name, setName] = useState(restaurant.name);

  const onSubmit = () => editRestaurant({ name, id: restaurant.id })
    .then(closeEdit);

  return (
    <Form
      onSubmit={onSubmit}
      value={name}
      setValue={setName}
      buttonText="Save"
      textareaId={`edit-restaurant-${restaurant.id}`}
      textareaLabel="Edit a restaurant"
    />
  );
}
