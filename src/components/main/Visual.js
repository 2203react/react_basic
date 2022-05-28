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

	useEffect(() => {
		handleResize();
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return (
		<figure className='myScroll'>
			<Swiper loop={true} slidesPerView={num} spaceBetween={50} grabCursor={true} centeredSlides={true} pagination={{ clickable: true }} navigation={true} modules={[Pagination, Navigation]} className='swiper'>
				<SwiperSlide>
					<video src={`${path}/img/vid1.mp4`} loop autoPlay muted></video>
				</SwiperSlide>
				<SwiperSlide>
					<video src={`${path}/img/vid2.mp4`} loop autoPlay muted></video>
				</SwiperSlide>
				<SwiperSlide>
					<video src={`${path}/img/vid3.mp4`} loop autoPlay muted></video>
				</SwiperSlide>
				<SwiperSlide>
					<video src={`${path}/img/vid4.mp4`} loop autoPlay muted></video>
				</SwiperSlide>
				<SwiperSlide>
					<video src={`${path}/img/vid5.mp4`} loop autoPlay muted></video>
				</SwiperSlide>
			</Swiper>

			<div className='cursor' ref={cursor}></div>
		</figure>
	);
}

export default Visual;
