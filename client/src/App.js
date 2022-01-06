import './App.css';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { useCurrentUserQuery } from './redux/extensionAPI';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import Dashboard from './pages/dashboard/Dashboard';
import Course from './pages/course/Course';
// import { useLogoutMutation } from './redux/extensionAPI';

function App() {
	const { data, isSuccess } = useCurrentUserQuery();
	console.log("SUCCESS?", isSuccess)
	console.log("DATA", data)

	useEffect(() => {
		if (isSuccess) {
			console.log("Successful login on app level")
		} else {
			console.log("Not logged in on app level")
		}
	}, [isSuccess, data])

	return (
		<div className='App'>
			<BrowserRouter>
				<div className='container'>
					<Navbar currentUser={data} />
					<Switch>
						<Route exact path='/'>
							{!data && <Redirect to='/login' />}
							{data && <Dashboard />}
						</Route>
						<Route path='/courses/:id'>
							{!data && <Redirect to='/login' />}
							{data && <Course />}
						</Route>
						<Route path='/login'>
							<Login user={data} />
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
