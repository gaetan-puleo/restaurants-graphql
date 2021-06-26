const ADD_RESTAURANT = `mutation CreateRestaurant ($input: CreateRestaurant) {
  restaurant:createRestaurant(input: $input) {
		id
    name
  }
}`;

const EDIT_RESTAURANT = `mutation EditRestaurant ($input: EditRestaurant) {
  restaurant:editRestaurant(input: $input) {
		id
    name
  }
}`;
export {
  ADD_RESTAURANT,
  EDIT_RESTAURANT,
};
