import React, { useState } from 'react';
import { EDIT_REVIEW } from '../../features/reviews/mutations';
import Form from '../Form';

export default function EditReview(props) {
  const { refetch, restaurantId, review, closeEdit } = props;
  const [content, setContent] = useState(review.content);

  return (
    <Form
      refetch={refetch}
      mutation={EDIT_REVIEW}
			afterSuccess={closeEdit}
      value={content}
      setValue={setContent}
      buttonText="Save"
      input={{ content, restaurantId, id: review.id}}
      textareaId={`edit-review-${restaurantId}`}
      textareaLabel="Edit a review"
    />
  );
}
