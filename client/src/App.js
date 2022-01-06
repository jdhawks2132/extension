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
