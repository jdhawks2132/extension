import './App.css';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import configureStore from './redux/store';
import { courseAdded } from './redux/courses';
import { reviewAdded } from './redux/reviews';
import Navbar from './components/Navbar';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import Dashboard from './pages/dashboard/Dashboard';
import Course from './pages/course/Course';

const store = configureStore();

store.dispatch(
	courseAdded({
		name: 'Redux Tutorial',
		description: 'Redux Tutorial on YouTube',
	})
);

store.dispatch(
	reviewAdded({ stars: 4, comment: 'great', course_id: 0, user_id: 1 })
);

function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<div className='container'>
					<Navbar />
					<Switch>
						<Route exact path='/'>
							<Dashboard />
						</Route>
						<Route path='/courses/:id'>
							<Course />
						</Route>
						<Route path='/login'>
							<Login />
						</Route>
						<Route path='/signup'>
							<Signup />
						</Route>
					</Switch>
				</div>
			</BrowserRouter>
		</div>
	);
}

export default App;
