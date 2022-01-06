import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const extensionApi = createApi({
	reducerPath: 'api',
	baseQuery: fetchBaseQuery({
		baseUrl: '/api',
	}),
	tagTypes: ['User', 'Course', 'Review'],
	endpoints: (builder) => ({
		courses: builder.query({
			query: () => '/courses',
			providesTags: ['Course', 'Review'],
		}),
		course: builder.query({
			query: (id) => `/courses/${id}`,
			providesTags: ['Course', 'Review'],
		}),
		currentUser: builder.query({
			query: () => '/me',
			providesTags: ['User'],
		}),
		login: builder.mutation({
			query: (login) => ({
				url: '/login',
				method: 'POST',
				body: login,
			}),
			invalidatesTags: ['User'],
		}),
		logout: builder.mutation({
			query: () => ({
				url: '/logout',
				method: 'DELETE',
			}),
		}),
		addReview: builder.mutation({
			query: (review) => ({
				url: '/reviews',
				method: 'POST',
				body: review,
			}),
			invalidatesTags: ['Review', 'Course'],
		}),
		updateReview: builder.mutation({
			query: (id, update) => ({
				url: `/reviews/${id}`,
				method: 'PATCH',
				body: update,
			}),
			invalidatesTags: ['Review', 'Course'],
		}),
		deleteReview: builder.mutation({
			query: (id) => ({
				url: `/reviews/${id}`,
				method: 'DELETE',
			}),
			invalidatesTags: ['Review', 'Course'],
		}),
	}),
});

export const {
	useAddReviewMutation,
	useUpdateReviewMutation,
	useDeleteReviewMutation,
	useCoursesQuery,
	useCourseQuery,
	useCurrentUserQuery,
	useLoginMutation,
	useLogoutMutation,
} = extensionApi;
