import React, { useState } from 'react';
import { gql, useMutation } from '@apollo/client';
import Button from '../Button';
import TextArea from '../TextArea';
import { ADD_RESTAURANT } from '../../features/restaurants/mutations';

export default function AddRestaurant(props) {
  const { refetch } = props;
  const [name, setName] = useState('');
  const [addRestaurant] = useMutation(gql(ADD_RESTAURANT));

  function onSubmit(e) {
    e.preventDefault();
    addRestaurant({ variables: { input: { name } } })
      .then(refetch)
      .catch((err) => console.log(err));
  }
  return (
    <form onSubmit={onSubmit}>
      <TextArea
        label="Add a new restaurant"
        id="create-restaurant"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Button type="submit">Add</Button>
    </form>
  );
}
