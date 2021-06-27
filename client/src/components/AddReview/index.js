import React, { useState } from 'react';
import Form from '../Form';

export default function AddReview(props) {
  const { restaurantId, addReview } = props;
  const [review, setReview] = useState('');

  const onSubmit = () => addReview({ content: review, restaurantId })
    .then(() => setReview(''));
  return (
    <Form
      onSubmit={onSubmit}
      value={review}
      setValue={setReview}
      buttonText="Save"
      textareaId={`create-review-${restaurantId}`}
      textareaLabel="Add a review"
      textareaPlaceholder="Enter a review here"
    />
  );
}
