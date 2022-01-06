import CourseList from '../../components/CourseList';
import { useCoursesQuery } from '../../redux/extensionAPI';
// styles
import './Dashboard.css';

export default function Dashboard() {
	const { data, error, isLoading, isFetching, isSuccess } = useCoursesQuery();

	// console.log(data);
	return (
		<div>
			<h2 className='page-title'>Dashboard</h2>
			{isLoading && <h2>...Loading</h2>}
			{isFetching && <h2>Fetching</h2>}
			{error && <h2>Error</h2>}
			{isSuccess && (
				<div>
					{data.map((course) => (
						<CourseList course={course} key={course.id} />
					))}
				</div>
			)}
		</div>
	);
}
