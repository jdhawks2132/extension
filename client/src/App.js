import './App.css';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import Dashboard from './pages/dashboard/Dashboard';
import Course from './pages/course/Course';

function App() {
	const [currentUser, setCurrentUser] = useState(null);
	const [authenticated, setAuthenticated] = useState(false);
	console.log(currentUser);
	useEffect(() => {
		fetch('api/me', {
			credentials: 'include',
		}).then((res) => {
			if (res.ok) {
				res.json().then((user) => {
					setCurrentUser(user);
					setAuthenticated(true);
				});
			} else {
				setAuthenticated(true);
			}
		});
	}, []);

	return (
		<div className='App'>
			<BrowserRouter>
				<div className='container'>
					<Navbar setCurrentUser={setCurrentUser} currentUser={currentUser} />
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
