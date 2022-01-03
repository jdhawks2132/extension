import CourseList from '../../components/CourseList';
// styles
import './Dashboard.css';

export default function Dashboard() {
	return (
		<div>
			<h2 className='page-title'>Dashboard</h2>
			<CourseList />
		</div>
	);
}
