import { Link } from 'react-router-dom';

// styles & images
import './Navbar.css';

export default function Navbar() {
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
				</>
			</ul>
		</nav>
	);
}
