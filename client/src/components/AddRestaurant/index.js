import React, {useState} from 'react';
import Button from '../Button';
import TextArea from '../TextArea';
import {gql, useMutation} from '@apollo/client'
import {ADD_RESTAURANT} from '../../features/restaurants/mutations'

export default function AddRestaurant (props) {
	const {refetch} = props;
	const [name, setName] = useState("");
	const [addRestaurant]  = useMutation(gql(ADD_RESTAURANT)); 

	function onSubmit(e) {
		e.preventDefault();
		addRestaurant({variables: {input:{name}}})
			.then(refetch)
			.catch(e => console.log(e))
	}
	return (
		<form onSubmit={onSubmit}>
			<TextArea label="Add a new restaurant" value={name} onChange={(e) => setName(e.target.value) }/>
			<Button type="submit">Add</Button>
		</form>
	)
}
