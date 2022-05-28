import { useEffect, useRef } from 'react';

function Layout(props) {
	const frame = useRef(null);
	const path = process.env.PUBLIC_URL;

	useEffect(() => {
		frame.current.classList.add('on');
	}, []);

	return (
		<section ref={frame} className={`common ${props.name}`}>
			<figure>
				<img src={`${path}${props.pic}`} />
			</figure>
			<div className='inner'>
				<h1>{props.name}</h1>
				{/* 해당 컴포넌트의 자식 요소를 호출 */}
				{props.children}
			</div>
		</section>
	);
}

export default Layout;
