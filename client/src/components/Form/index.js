import React from 'react';
import Button from '../Button';
import TextArea from '../TextArea';

/**
	* @function Form
	*
	* Generic form component with a button and a textarea
	*/
export default function Form(props) {
  const {
    value,
    setValue,
    buttonText,
    textareaId,
    textareaLabel,
    textareaPlaceholder,
    onSubmit,
  } = props;

  function onSubmitHandler(e) {
    // don't send data
    e.preventDefault();

    return onSubmit();
  }

  return (
    <form onSubmit={onSubmitHandler}>
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
