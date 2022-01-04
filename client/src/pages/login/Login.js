import { useState } from 'react';
import { useFetch } from '../../hooks/useFetch';

// styles
import './Login.css';

export default function Login() {
	const [userName, setUserName] = useState('');
	const [password, setPassword] = useState('');

	const { postData, data } = useFetch('http://localhost:3000/login', 'POST');

	const handleSubmit = (e) => {
		e.preventDefault();
		postData(userName, password);
	};

	return (
		<div className='login'>
			<form onSubmit={handleSubmit} className='auth-form'>
				<h2>login</h2>
				<label>
					<span>email:</span>
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
