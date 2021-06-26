const ADD_REVIEW = `
	mutation CreateReview ($input: CreateReview) {
		review: createReview(input: $input) {
			id
			content
		}
	}
`;

export {
	ADD_REVIEW
}
