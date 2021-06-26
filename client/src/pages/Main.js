import React from 'react'
import Restaurants from '../components/Restaurants'
import AddRestaurant from '../components/AddRestaurant'
import { gql, useQuery} from '@apollo/client';
import {LIST_RESTAURANTS} from '../features/restaurants/queries' 

	export default function Main () {
	const {loading, data, refetch} = useQuery(gql(LIST_RESTAURANTS));

	if(loading) return '...loading';

	return <>
		<Restaurants data={data} refetch={refetch} />
		<AddRestaurant refetch={refetch}/>
	</>
}
