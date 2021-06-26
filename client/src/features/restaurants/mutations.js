// We want the tabs here
/* eslint-disable no-tabs */
const ADD_RESTAURANT = `mutation CreateRestaurant ($input: CreateRestaurant) {
  restaurant:createRestaurant(input: $input) {
		id
    name
  }
}`;

export {
  ADD_RESTAURANT,
};
