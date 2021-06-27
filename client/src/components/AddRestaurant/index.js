import React, { useState } from 'react';
import Form from '../Form';

export default function AddRestaurant(props) {
  const { addRestaurant } = props;
  const [name, setName] = useState('');

  const onSubmit = () => addRestaurant({ name })
    .then(() => setName(''));

  return (
    <Form
      onSubmit={onSubmit}
      value={name}
      setValue={setName}
      buttonText="Add"
      textareaId="create-restaurant"
      textareaLabel="Add a new Restaurant"
    />
  );
}
