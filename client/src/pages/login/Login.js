import { useState, useEffect } from 'react';
import { useFetch } from '../../hooks/useFetch';
import { useHistory } from 'react-router-dom';

// styles
import './Login.css';

export default function Login() {
	const [userName, setUserName] = useState('');
	const [password, setPassword] = useState('');
	const history = useHistory();

	const { postData, data } = useFetch('api/login', 'POST');

	const handleSubmit = (e) => {
		e.preventDefault();
		postData({ username: userName, password: password });
	};

	useEffect(() => {
		if (data) {
			console.log(data);
			history.push('/');
		}
	}, [data, history]);

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
