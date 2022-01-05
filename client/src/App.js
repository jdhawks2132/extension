import './App.css';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useCurrentUserQuery } from './redux/extensionAPI';
import Navbar from './components/Navbar';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import Dashboard from './pages/dashboard/Dashboard';
import Course from './pages/course/Course';

function App() {
	const { data, isSuccess } = useCurrentUserQuery();

	const user = null || data;
	return (
		<div className='App'>
			<BrowserRouter>
				<div className='container'>
					<Navbar currentUser={user} />
					<Switch>
						<Route exact path='/'>
							{!user && <Redirect to='/login' />}
							{user && <Dashboard />}
						</Route>
						<Route path='/courses/:id'>
							{!user && <Redirect to='/login' />}
							{user && <Course />}
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
