import { useParams } from 'react-router-dom';
import {
	useCourseQuery,
	useAddReviewMutation,
	useDeleteReviewMutation,
	useUpdateReviewMutation,
} from '../../redux/extensionAPI';
import { useState } from 'react';

const CourseDetail = ({ user }) => {
	const { id } = useParams();
	const [addReview, results] = useAddReviewMutation();
	const [deleteReview] = useDeleteReviewMutation();
	const [updateReview] = useUpdateReviewMutation();
	const { data, error, isLoading, isFetching, isSuccess } = useCourseQuery(id);
	const [comment, setComment] = useState('');
	const [stars, setStars] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		addReview({
			comment: comment,
			stars: stars,
			course_id: id,
			user_id: user.id,
		});
		setComment('');
		setStars('');
	};

	const handleDelete = async (id) => {
		await deleteReview(id);
	};

	const handleUpdate = async (reviewId) => {
		const review = {
			id: reviewId,
			comment: comment,
			stars: stars,
			user_id: user.id,
			course_id: id,
		};
		await updateReview(review);
		setComment('');
		setStars('');
	};

	return (
		<div className='course-detail'>
			{isSuccess && (
				<div>
					<h2>{data.name}</h2>
					<h3>{data.platform}</h3>
					<p>{data.description}</p>
					<ul>
						{data.reviews.map((review) => {
							return (
								<li key={review.id}>
									{review.comment} - {review.stars}/5
									<button onClick={() => handleUpdate(review.id)}>
										update
									</button>
									<button onClick={() => handleDelete(review.id)}>
										delete
									</button>
								</li>
							);
						})}
					</ul>
				</div>
			)}
			<form onSubmit={handleSubmit} className='auth-form'>
				<label>
					<span>comment</span>
					<input
						required
						type='text'
						onChange={(e) => setComment(e.target.value)}
						value={comment}
					/>
				</label>
				<label>
					<span>stars</span>
					<input
						required
						type='integer'
						onChange={(e) => setStars(e.target.value)}
						value={stars}
					/>
				</label>
				<button className='btn'>submit</button>
			</form>
		</div>
	);
};

export default CourseDetail;
