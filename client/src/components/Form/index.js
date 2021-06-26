import React from 'react';
import { gql, useMutation } from '@apollo/client';
import Button from '../Button';
import TextArea from '../TextArea';

/**
	* @function
	*
	* Generic form component with a button and a textarea
	*/
export default function Form(props) {
  const {
    refetch,
    mutation,
    value,
    setValue,
    input,
    buttonText,
    textareaId,
    textareaLabel,
    textareaPlaceholder,
    afterSuccess,
  } = props;
  const [mutate] = useMutation(gql(mutation));

  function onSubmit(e) {
    // don't send data
    e.preventDefault();

    mutate({ variables: { input } })
    // reload data
      .then(refetch)
      .then(afterSuccess)
    // clear value
      // .then(() => setValue(''))
    // Log error
      .catch((err) => console.log(err));
  }

  return (
    <form onSubmit={onSubmit}>
      <TextArea
        onChange={(e) => setValue(e.target.value)}
        id={textareaId}
        label={textareaLabel}
        placeholder={textareaPlaceholder}
        value={value}
      />
      <Button type="submit">{buttonText}</Button>
    </form>
  );
}
