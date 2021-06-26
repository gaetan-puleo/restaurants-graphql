import React from 'react';
import styles from './ReviewItem.module.scss';

export default function ReviewItem (props) {
	const {content} = props;
	return ( 
		<li className={styles.item}>
			<p>{content}</p>
		</li>
	)
}
