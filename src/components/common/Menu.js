import { NavLink } from 'react-router-dom';
import { forwardRef, useImperativeHandle, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Menu = forwardRef((props, ref) => {
	const [open, setOpen] = useState(false);

	useImperativeHandle(ref, () => {
		return {
			open: () => setOpen(true),
			close: () => setOpen(false),
		};
	});

	return (
		<AnimatePresence>
			{open && (
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
			)}
		</AnimatePresence>
	);
});

export default Menu;
