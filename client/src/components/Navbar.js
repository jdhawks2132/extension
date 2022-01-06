import { Link } from 'react-router-dom';
import { useLogoutMutation } from '../redux/extensionAPI';

// styles & images
import './Navbar.css';

export default function Navbar({ currentUser }) {
	const [logout] = useLogoutMutation();
	const handleLogout = () => logout().then(() => window.location.reload())

	return (
		<nav className='navbar'>
			<ul>
				<li className='logo'>
					<h1>//Extension</h1>
				</li>

				{!currentUser && (
					<>
						<li>
							<Link to='/login'>Login</Link>
						</li>
						<li>
							<Link to='/signup'>Signup</Link>
						</li>
					</>
				)}

				{currentUser && (
					<li>
						<button className='btn' onClick={handleLogout}>
							Logout
						</button>
					</li>
				)}
			</ul>
		</nav>
	);
}
