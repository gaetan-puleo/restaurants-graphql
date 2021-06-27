import crypto from 'crypto';
import utils from './utils.js'
const restaurants = [{name: 'Big Fernand', id: 'toto', createdAt: '0'}];
const reviews = [{content: 'Big Fernand c\'est top', id: 'titi',  restaurantId: 'toto', createdAt:'0'}];

// 60 seconds * 60 minutes * 24 days * 30 days * 3 month * 1000 (to  convert in ms)
const THREE_MONTHS = 60 * 60 * 24 * 30 * 3 * 1000;

const Mutation = {
	createReview: (root, {input}) => {
		// generate true unique id
		const id = crypto.randomBytes(16).toString("hex")
		const review = {...input, id, createdAt: `${Date.now()}`};
		reviews.push(review)
		return review;
	},
	editReview: (root, {input}) => {
		let index = reviews.findIndex(r => r.id === input.id)
		const review = reviews[index];

		// if created more than 5min ago, we throw an error
		if(!utils.canBeEdited(review.createdAt)) {
			throw new Error('You cannot edit this review')
		}

		reviews[index] = {...review, ...input}
		return reviews[index];
	},
	createRestaurant: (root, {input}) => {
		// generate true unique id
		const id = crypto.randomBytes(16).toString("hex")
		const current = {...input, id: id, createdAt: `${Date.now()}`}
		restaurants.push(current);
		return current;
	},
	editRestaurant: (root, {input}) => {
		let index = restaurants.findIndex(r => r.id === input.id)

		const restaurant = restaurants[index]

		// if created more than 5min ago, we throw an error
		if(!utils.canBeEdited(restaurant.createdAt)) {
			throw new Error('You cannot edit this restaurant')
		}

		restaurants[index] = {...restaurant, ...input};
		return restaurants[index]
	},
}

const Query = {
	restaurants: () => restaurants.filter((r) => {
		// check if the diff between current timestamp and oldTimestamp is <  THREE_MONTHS
		return Date.now() - Number(r.createdAt) < THREE_MONTHS;
	})	
}

const Restaurant = {
	reviews: (restaurant) => reviews.filter(review => review.restaurantId === restaurant.id)
}

const resolvers = {Query, Restaurant, Mutation}
export default resolvers;
