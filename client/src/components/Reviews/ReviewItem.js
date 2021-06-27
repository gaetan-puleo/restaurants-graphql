import React from 'react';
import styles from './ReviewItem.module.scss';
import ButtonLink from '../ButtonLink';
import { canBeEdited } from '../../utils/canBeEdited';

export default function ReviewItem(props) {
  const {
    id, content, createdAt, editId, setEditId,
  } = props;

  const toggleEdit = () => (editId === id ? setEditId(null) : setEditId(id));
  const buttonText = `Toggle ${editId === id ? 'off' : 'on'} edit`;
  const reviewCanBeEdited = canBeEdited(createdAt);

  return (
    <li className={styles.item}>
      <p className={styles.content}>{content}</p>
      {reviewCanBeEdited && (<ButtonLink onClick={toggleEdit}>{buttonText}</ButtonLink>)}
    </li>
  );
}
