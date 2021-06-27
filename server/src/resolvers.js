import db from './db.js';
const Mutation = {
	createReview: (root, {input}) => {
		const id = db.reviews.create(input);
		return db.reviews.get(id)
	},
	editReview: (root, {input}) => {
		const id = db.reviews.update(input);
		return db.reviews.get(id)
	},
	createRestaurant: (root, {input}) => {
		const id = db.restaurants.create(input);
		return db.restaurants.get(id)
	},
	editRestaurant: (root, {input}) => {
		const id = db.restaurants.update(input);
		return db.restaurants.get(id)
	},
}

const Query = {
	restaurants: () => db.restaurants.list()
}

const Restaurant  = {
	reviews: (restaurant) =>  db.reviews.list().filter(review => review.restaurantId === restaurant.id) 
}

const resolvers = {Query, Restaurant, Mutation}
export default resolvers;