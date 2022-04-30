import { useEffect } from 'react';

function Popup(props) {
	useEffect(() => {
		document.body.style.overflow = 'hidden';

		return () => {
			document.body.style.overflow = 'auto';
		};
	}, []);

	return (
		<aside className='popup'>
			<div className='con'>{props.children}</div>
		</aside>
	);
}

export default Popup;
