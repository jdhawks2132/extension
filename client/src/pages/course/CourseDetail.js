import { useParams } from 'react-router-dom';
import { useCourseQuery } from '../../redux/extensionAPI';

const CourseDetail = () => {
	const { id } = useParams();
	const { data, error, isLoading, isFetching, isSuccess } = useCourseQuery(id);

	console.log(data);
	return (
		<div className='course-detail'>
			{isSuccess && (
				<div>
					<h2>{data.name}</h2>
					<h3>{data.platform}</h3>
					<p>{data.description}</p>
					<ul>
						<li>Review Comment - ⭐️⭐️⭐️</li>
						<li>Review Comment - ⭐️⭐️</li>
					</ul>
				</div>
			)}
		</div>
	);
};

export default CourseDetail;
