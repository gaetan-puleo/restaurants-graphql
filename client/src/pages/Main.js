import React, {useState} from 'react';
import { gql, useQuery } from '@apollo/client';
import Restaurants from '../components/Restaurants';
import AddRestaurant from '../components/AddRestaurant';
import { LIST_RESTAURANTS } from '../features/restaurants/queries';
import EditRestaurant from '../components/EditRestaurant';

export default function Main() {
  const { loading, data, refetch } = useQuery(gql(LIST_RESTAURANTS));

	const [editId, setEditId] = useState(null)
  if (loading) return '...loading';

  return (
    <>
      <Restaurants 
				data={data} 
				refetch={refetch} 
				setEditId={setEditId}
				editId={editId}
			/>

			{!editId && <AddRestaurant refetch={refetch} />}
			{editId && (
				<EditRestaurant 
					restaurant={data.restaurants.find(r => r.id === editId)} 
					refetch={refetch}
					closeEdit={() => setEditId(null)}
				/>)}

    </>
  );
}
