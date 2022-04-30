import { useEffect, useState } from 'react';

function Popup(props) {
	const [open, setOpen] = useState(true);
	useEffect(() => {
		document.body.style.overflow = 'hidden';

		return () => {
			document.body.style.overflow = 'auto';
		};
	}, []);

	return (
		<>
			{open ? (
				<aside className='popup'>
					<div className='con'>{props.children}</div>
				</aside>
			) : null}
		</>
	);
}

export default Popup;
