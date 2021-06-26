const LIST_RESTAURANTS = `
query RestaurantsQuery{
	restaurants {
		name,
    id
    reviews {
    	id,
      content
    }
	}
}
`

export {
	LIST_RESTAURANTS
}
