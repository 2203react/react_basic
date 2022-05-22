import { NavLink } from 'react-router-dom';

function Menu() {
	return (
		<nav className='menuM'>
			<h1>
				<NavLink to='/'>LOGO</NavLink>
			</h1>

			<ul id='gnbMo'>
				<li>
					<NavLink to='/department'>Department</NavLink>
				</li>
				<li>
					<NavLink to='/community'>Community</NavLink>
				</li>
				<li>
					<NavLink to='/flickr'>Flickr</NavLink>
				</li>
				<li>
					<NavLink to='/youtube'>Youtube</NavLink>
				</li>
				<li>
					<NavLink to='/location'>Location</NavLink>
				</li>
				<li>
					<NavLink to='/join'>Join</NavLink>
				</li>
			</ul>
		</nav>
	);
}

export default Menu;
