import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
import { useEffect, useState } from 'react';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css';

function Visual() {
	const [num, setNum] = useState(3);

	const handleResize = () => {
		const wid = window.innerWidth;
		wid < 1180 ? setNum(1) : setNum(3);
	};

	useEffect(() => {
		window.addEventListener('resize', handleResize);
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
				<SwiperSlide>1</SwiperSlide>
				<SwiperSlide>2</SwiperSlide>
				<SwiperSlide>3</SwiperSlide>
				<SwiperSlide>4</SwiperSlide>
				<SwiperSlide>5</SwiperSlide>
			</Swiper>
		</figure>
	);
}

export default Visual;
