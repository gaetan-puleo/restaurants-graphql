import crypto from 'crypto';

const restaurants = [{name: 'Big Fernand', id: 'toto'}];
const reviews = [];

const Mutation = {
	createReview: (root, {input}) => {
		const id = crypto.randomBytes(16).toString("hex")
		const review = {...input, id};
		reviews.push(review)
		return review;
	},
	editReview: (root, {input}) => {
		let index = reviews.findIndex(r => r.id === input.id)
		reviews[index] = {...input}
		return reviews[index];
	},
	createRestaurant: (root, {input}) => {
		const id = crypto.randomBytes(16).toString("hex")
		const current = {...input, id: id}
		restaurants.push(current);
		return current;
	},
	editRestaurant: (root, {input}) => {
		let index = restaurants.findIndex(r => r.id === input.id)
		restaurants[index] = {...restaurants[index],...input};
		return restaurants[index]
	},
}

const Query = {
	restaurants: () => restaurants
}

const Restaurant  = {
	reviews: (restaurant) =>  reviews.filter(review => review.restaurantId === restaurant.id) 
}

const resolvers = {Query, Restaurant, Mutation}
export default resolvers;
