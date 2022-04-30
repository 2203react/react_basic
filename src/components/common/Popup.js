import { useEffect, useState, forwardRef, useImperativeHandle } from 'react';

/*
  forwardRef는 자식 컴포넌트 자신을 통채로 전달해서 부모 컴포넌트가 참조할수 있게 처리
  
  forwardRef로 감싸져 있으면 자식 컴포넌트의 다양한 정보값을 return으로 내보내서 부모 컴포넌트가 자유롭게 사용가능

  const 변수명 = forwarRef(화살표 함수)
*/

const Popup = forwardRef((props, ref) => {
	const [open, setOpen] = useState(false);

	useImperativeHandle(ref, () => {
		return {
			open: () => setOpen(true),
			close: () => setOpen(false),
		};
	});

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
});

export default Popup;
