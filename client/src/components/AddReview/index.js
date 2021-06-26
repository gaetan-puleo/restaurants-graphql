import React, { useState } from 'react';
import { gql, useMutation } from '@apollo/client';
import Button from '../Button';
import TextArea from '../TextArea';
import { ADD_REVIEW } from '../../features/reviews/mutations';

export default function AddReview(props) {
  const { restaurantId, refetch } = props;
  const [review, setReview] = useState('');
  const [addReview] = useMutation(gql(ADD_REVIEW));
  function onSubmit(e) {
    e.preventDefault();
    addReview({ variables: { input: { content: review, restaurantId } } })
      .then(refetch)
      .then(() => setReview(''))
      .catch((err) => console.log(err));
  }
  return (
    <form onSubmit={onSubmit}>
      <TextArea
        onChange={(e) => setReview(e.target.value)}
        id="create-review"
        label="Add a review"
        placeholder="Enter a review here ..."
        value={review}
      />
      <Button type="submit">Save</Button>
    </form>
  );
}
