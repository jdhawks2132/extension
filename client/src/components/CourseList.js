import { Link } from 'react-router-dom';

// styles
import './CourseList.css';

export default function CourseList() {
	return (
		<div className='course-list'>
			<Link to='/courses/1'>
				<h2>Course Name</h2>
				<h3>Platform</h3>
				<p>Course Description</p>
			</Link>
		</div>
	);
}
