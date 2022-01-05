import { Link } from 'react-router-dom';

// styles
import './CourseList.css';

export default function CourseList({ course }) {
	const { name, platform, id, description } = course;
	return (
		<div className='course-list'>
			<Link to={`/courses/${id}`}>
				<h2>{name}</h2>
				<h3>{platform}</h3>
				<p>{description}</p>
			</Link>
		</div>
	);
}
