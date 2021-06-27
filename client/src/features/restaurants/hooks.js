import { useQuery, gql, useMutation } from '@apollo/client';

import { EDIT_RESTAURANT, ADD_RESTAURANT } from './mutations';
import { EDIT_REVIEW, ADD_REVIEW } from '../reviews/mutations';
import { LIST_RESTAURANTS } from './queries';

/**
	* @function useRestaurants
	* @description Manage restaurants states and API calls
	*/
export function useRestaurants() {
  const { loading, data, refetch } = useQuery(gql(LIST_RESTAURANTS));
  const [mutateEditRestaurant] = useMutation(gql(EDIT_RESTAURANT));
  const [mutateAddRestaurant] = useMutation(gql(ADD_RESTAURANT));

  const [mutateEditReview] = useMutation(gql(EDIT_REVIEW));
  const [mutateAddReview] = useMutation(gql(ADD_REVIEW));

  const editRestaurant = (input) => mutateEditRestaurant({ variables: { input } })
    .then(() => refetch());

  const addRestaurant = (input) => mutateAddRestaurant({ variables: { input } })
    .then(() => refetch());

  const editReview = (input) => mutateEditReview({ variables: { input } })
    .then(() => refetch());

  const addReview = (input) => mutateAddReview({ variables: { input } })
    .then(() => refetch());

  return {
    loading, data, editRestaurant, addRestaurant, editReview, addReview,
  };
}
