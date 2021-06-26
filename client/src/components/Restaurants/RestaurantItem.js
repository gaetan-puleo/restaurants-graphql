import React, {useState} from 'react';
import Reviews from '../Reviews'
import AddReview from '../AddReview';
import styles from './RestaurantItem.module.scss';

export default function RestaurantItem (props) {
	const {name, reviews, id, refetch} = props;

	const [editMode, setEdit] = useState(false);
	return (
		<li className={styles.item}>
			<header className={styles.header}>
				<h2>{name}</h2>
				{!editMode && <button className={styles.link} onClick={() => setEdit(true)}>Add a review</button>}
			</header>
			<Reviews reviews={reviews} />
			{editMode && <AddReview restaurantId={id} refetch={refetch}/>}
		</li>)
}
