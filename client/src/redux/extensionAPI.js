import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const extensionApi = createApi({
	reducerPath: 'api',
	baseQuery: fetchBaseQuery({
		baseUrl: '/api',
	}),
	endpoints: (builder) => ({
		courses: builder.query({
			query: () => '/courses',
		}),
		course: builder.query({
			query: (id) => `/courses/${id}`,
		}),
		currentUser: builder.query({
			query: () => '/me',
		}),
		login: builder.mutation({
			query: (login) => ({
				url: '/login',
				method: 'POST',
				body: login,
			}),
		}),
		logout: builder.mutation({
			query: () => ({
				url: '/logout',
				method: 'DELETE',
			}),
		}),
	}),
});

export const {
	useCoursesQuery,
	useCourseQuery,
	useCurrentUserQuery,
	useLoginMutation,
	useLogoutMutation,
} = extensionApi;