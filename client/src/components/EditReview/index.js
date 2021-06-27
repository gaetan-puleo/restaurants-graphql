import React, { useState } from 'react';
import Form from '../Form';

export default function EditReview(props) {
  const {
    editReview, restaurantId, review, closeEdit,
  } = props;
  const [content, setContent] = useState(review.content);

  return (
    <Form
      onSubmit={() => editReview({ content, restaurantId, id: review.id })
        .then(() => closeEdit())}
      value={content}
      setValue={setContent}
      buttonText="Save"
      textareaId={`edit-review-${restaurantId}`}
      textareaLabel="Edit a review"
    />
  );
}
