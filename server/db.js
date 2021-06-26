const { DataStore } = require('notarealdb');

const store = new DataStore('./data');

module.exports = {
  restaurants: store.collection('restaurants'),
};
