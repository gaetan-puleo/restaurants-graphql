const { DataStore } = require('notarealdb');

const store = new DataStore('./data');

module.exports = {
  restaurants: store.collection('restaurants'),
  reviews: store.collection('reviews'),
};
