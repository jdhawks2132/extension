import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useLoginMutation } from '../../redux/extensionAPI';

// styles
import './Login.css';

export default function Login({ user }) {
	const [userName, setUserName] = useState('');
	const [password, setPassword] = useState('');
	const history = useHistory();
	const [login, result] = useLoginMutation();

	const handleSubmit = (e) => {
		e.preventDefault();
		login({ username: userName, password: password })
	};

	useEffect(() => {
		console.log('user', user);
		if (user) {
			history.push('/');
		}
	}, [user, history]);

	return (
		<div className='login'>
			<form onSubmit={handleSubmit} className='auth-form'>
				<h2>login</h2>
				<label>
					<span>username</span>
					<input
						required
						type='text'
						onChange={(e) => setUserName(e.target.value)}
						value={userName}
					/>
				</label>
				<label>
					<span>password:</span>
					<input
						required
						type='password'
						onChange={(e) => setPassword(e.target.value)}
						value={password}
					/>
				</label>
				<button className='btn'>Log in</button>
			</form>
		</div>
	);
}
