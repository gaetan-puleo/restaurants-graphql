import React from 'react';
import styles from './index.module.scss';
import RestaurantItem from './RestaurantItem';

export default function Restaurants (props) {
	const {data, refetch} = props;
	return (
		<ul className={styles.list}>
			{data.restaurants.map(({name, id, reviews}) => (
				<RestaurantItem 
					refetch={refetch}
					key={id} 
					id={id} 
					name={name} 
					reviews={reviews} />)
		)}
	</ul>)
}

