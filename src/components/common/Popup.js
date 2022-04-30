import { useEffect } from 'react';

//1시 5분까지 갤러리 팝업도 유튜브처럼 변경해보세요.
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
