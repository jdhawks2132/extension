import { createSlice } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';

let lastId = 0;

const slice = createSlice({
	name: 'courses',
	initialState: [],
	reducers: {
		courseAdded: (courses, action) => {
			courses.push({
				id: lastId++,
				name: action.payload.name,
				description: action.payload.description,
			});
		},
		courseRemoved: (courses, action) => {
			courses.filter((course) => course.id !== action.payload.id);
		},
		courseUpdated: (courses, action) => {
			courses.map((course) =>
				course.id !== action.payload.id
					? course
					: {
							name: action.payload.name,
							description: action.payload.description,
					  }
			);
		},
	},
});

export const getCourseReviews = (courseId) =>
	createSelector(
		(state) => state.entities.reviews,
		(reviews) => reviews.filter((review) => review.course_id === courseId)
	);

export const { courseAdded, courseRemoved, courseUpdated } = slice.actions;
export default slice.reducer;
