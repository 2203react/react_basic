import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
import { useEffect, useState, useRef } from 'react';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css';

function Visual() {
	const path = process.env.PUBLIC_URL;
	const cursor = useRef(null);
	const [num, setNum] = useState(3);

	const handleResize = () => {
		const wid = window.innerWidth;
		wid < 1180 ? setNum(1) : setNum(3);
	};

	const mouseMove = (e) => {
		cursor.current.style.left = e.clientX + 'px';
		cursor.current.style.top = e.clientY + 'px';
	};

	useEffect(() => {
		handleResize();
		window.addEventListener('resize', handleResize);
		window.addEventListener('mousemove', mouseMove);

		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return (
		<figure className='myScroll'>
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
