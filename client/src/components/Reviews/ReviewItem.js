import React from 'react';
import styles from './ReviewItem.module.scss';
import ButtonLink from '../ButtonLink';

export default function ReviewItem(props) {
  const {
    id, content, editId, closeEdit, openEdit,
  } = props;

  return (
    <li className={styles.item}>
      <p>{content}</p>
      {editId === id && <ButtonLink onClick={closeEdit}>toggle off edit</ButtonLink>}
      {editId !== id && <ButtonLink onClick={openEdit}>toggle on edit</ButtonLink>}
    </li>
  );
}
