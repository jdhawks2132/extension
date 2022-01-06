import { createSlice } from '@reduxjs/toolkit';

let lastId = 0;

const slice = createSlice({
	name: 'reviews',
	initialState: [],
	reducers: {
		reviewAdded: (reviews, action) => {
			reviews.push({
				id: lastId++,
				stars: action.payload.stars,
				comment: action.payload.comment,
				user_id: action.payload.user_id,
				course_id: action.payload.course_id,
			});
		},

		reviewRemoved: (reviews, action) => {
			reviews.filter((review) => review.id !== action.payload.id);
		},
		reviewUpdated: (reviews, action) => {
			reviews.map((review) =>
				review.id !== action.payload.id
					? review
					: {
							stars: action.payload.stars,
							comment: action.payload.comment,
							user_id: action.payload.user_id,
							course_id: action.payload.course_id,
					  }
			);
		},
	},
});

export const { reviewAdded, reviewRemoved, reviewUpdated } = slice.actions;
export default slice.reducer;
