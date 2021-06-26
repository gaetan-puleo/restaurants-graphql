import React, { useState } from 'react';
import { ADD_REVIEW } from '../../features/reviews/mutations';
import Form from '../Form';

export default function AddReview(props) {
  const { refetch, restaurantId } = props;
  const [review, setReview] = useState('');

  return (
    <Form
      refetch={refetch}
      mutation={ADD_REVIEW}
      value={review}
      setValue={setReview}
			afterSuccess={() => setReview('')}
      buttonText="Save"
      input={{ content: review, restaurantId }}
      textareaId={`create-review-${restaurantId}`}
      textareaLabel="Add a review"
      textareaPlaceholder="Enter a review here"
    />
  );
}
