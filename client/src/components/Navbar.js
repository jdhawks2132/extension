import { Link } from 'react-router-dom';

// styles & images
import './Navbar.css';

export default function Navbar({ setCurrentUser, currentUser }) {
	const handleLogout = () => {
		setCurrentUser(null);
		fetch('api/logout', { method: 'DELETE' });
	};
	return (
		<nav className='navbar'>
			<ul>
				<li className='logo'>
					<h1>//Extension</h1>
				</li>
				<>
					<li>
						<Link to='/login'>Login</Link>
					</li>
					<li>
						<Link to='/signup'>Signup</Link>
					</li>
					<li>
						<button className='btn' onClick={handleLogout}>
							Logout
						</button>
					</li>
				</>
			</ul>
		</nav>
	);
}
