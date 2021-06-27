import { DataStore } from 'notarealdb';

const store = new DataStore('./src/data');

export default {
  restaurants: store.collection('restaurants'),
  reviews: store.collection('reviews'),
};
