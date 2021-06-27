const ADD_REVIEW = `
	mutation CreateReview ($input: CreateReview) {
		review: createReview(input: $input) {
			id
			content
		}
	}
`;

const EDIT_REVIEW = `
	mutation EditReview ($input: EditReview) {
		review: editReview(input: $input) {
			id
			content
		}
	}
`;

export {
  ADD_REVIEW,
  EDIT_REVIEW,
};
