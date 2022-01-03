import { useState } from 'react';

// styles
import './Signup.css';

export default function Signup() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [userName, setUserName] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(email, password, userName);
	};

	return (
		<div className='signup'>
			<form onSubmit={handleSubmit} className='auth-form'>
				<h2>sign up</h2>
				<label>
					<span>email:</span>
					<input
						required
						type='email'
						onChange={(e) => setEmail(e.target.value)}
						value={email}
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
				<label>
					<span>user name:</span>
					<input
						required
						type='text'
						onChange={(e) => setUserName(e.target.value)}
						value={userName}
					/>
				</label>
				<button className='btn'>Sign up</button>
			</form>
		</div>
	);
}
