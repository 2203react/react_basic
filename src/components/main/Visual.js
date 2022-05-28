import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
import { useEffect, useState, useRef } from 'react';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css';

function Visual() {
	const path = process.env.PUBLIC_URL;
	const frame = useRef(null);
	const cursor = useRef(null);
	const [num, setNum] = useState(3);
	let isCursor = false;

	const handleResize = () => {
		const wid = window.innerWidth;
		wid < 1180 ? setNum(1) : setNum(3);
	};

	const mouseMove = (e) => {
		if (isCursor) {
			cursor.current.style.left = e.clientX + 'px';
			cursor.current.style.top = e.clientY + 'px';
		}
	};

	useEffect(() => {
		handleResize();
		window.addEventListener('resize', handleResize);
		window.addEventListener('mousemove', mouseMove);

		frame.current.addEventListener('mouseenter', () => {
			isCursor = true;
			cursor.current.style.display = 'block';
		});
		frame.current.addEventListener('mouseleave', () => {
			isCursor = false;
			cursor.current.style.display = 'none';
		});

		return () => {
			window.removeEventListener('resize', handleResize);
			window.removeEventListener('mousemove', mouseMove);
		};
	}, []);

	return (
		<figure className='myScroll' ref={frame}>
			<Swiper
				loop={true}
				slidesPerView={num}
				spaceBetween={50}
				grabCursor={true}
				centeredSlides={true}
				pagination={{ clickable: true }}
				navigation={true}
				modules={[Pagination, Navigation]}
				className='swiper'>
				{[1, 2, 3, 4, 5].map((num) => {
					return (
						<SwiperSlide
							onMouseEnter={() => (cursor.current.style = ' transform: translate(-50%, -50%) scale(8) ')}
							onMouseLeave={() => (cursor.current.style = 'transform: translate(-50%, -50%) scale(1) ')}>
							<video src={`${path}/img/vid${num}.mp4`} loop autoPlay muted></video>
						</SwiperSlide>
					);
				})}
			</Swiper>

			<div className='cursor' ref={cursor}></div>
		</figure>
	);
}

export default Visual;
