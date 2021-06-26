const db = require('./db');

const Mutation = {
	createReview: (root, {input}) => {
		const id = db.reviews.create(input);
		return db.reviews.get(id)
	},
	createRestaurant: (root, {input}) => {
		const id = db.restaurants.create(input);
		return db.restaurants.get(id)
	}
}

const Query = {
	restaurants: () => db.restaurants.list()
}

const Restaurant  = {
	reviews: (restaurant) =>  db.reviews.list().filter(review => review.restaurantId === restaurant.id) 
}

module.exports = {Query, Restaurant, Mutation}
