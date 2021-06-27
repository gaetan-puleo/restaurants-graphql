const LIST_RESTAURANTS = `
query RestaurantsQuery{
	restaurants {
		name
    id
		createdAt
    reviews {
			createdAt
    	id
      content
    }
	}
}
`;

export {
  LIST_RESTAURANTS,
};
