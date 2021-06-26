import React, { useState } from 'react';
import { ADD_RESTAURANT } from '../../features/restaurants/mutations';
import Form from '../Form';

export default function AddRestaurant(props) {
  const { refetch } = props;
  const [name, setName] = useState('');

  return (
    <Form
      refetch={refetch}
      afterSuccess={() => setName('')}
      mutation={ADD_RESTAURANT}
      value={name}
      setValue={setName}
      buttonText="Add"
      input={{ name }}
      textareaId="create-restaurant"
      textareaLabel="Add a new Restaurant"
    />
  );
}
