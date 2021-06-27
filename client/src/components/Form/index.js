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

  const onSubmitHandler = (e) => {
    // don't send data
    e.preventDefault();
    return onSubmit();
  };

  const onChange = (e) => setValue(e.target.value);

  return (
    <form onSubmit={onSubmitHandler}>
      <TextArea
        onChange={onChange}
        id={textareaId}
        label={textareaLabel}
        placeholder={textareaPlaceholder}
        value={value}
      />
      <Button type="submit">{buttonText}</Button>
    </form>
  );
}
