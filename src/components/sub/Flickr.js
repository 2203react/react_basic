import Layout from '../common/Layout';
import { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import Masonry from 'react-masonry-component';
const path = process.env.PUBLIC_URL;

function Flickr() {
	const frame = useRef(null);
	const input = useRef(null);
	const [items, setItems] = useState([]);
	const [loading, setLoading] = useState(true);
	const [enableClick, setEnableClick] = useState(true);

	const masonryOptions = {
		transitionDuration: '0.5s',
	};

	const fetchFlickr = async (opt) => {
		const api_key = 'feb5dbb632085ee9e53c197d363d1a85';
		const method_interest = 'flickr.interestingness.getList';
		const method_search = 'flickr.photos.search';
		let url = '';

		if (opt.type === 'interest') {
			url = `https://www.flickr.com/services/rest/?method=${method_interest}&api_key=${api_key}&format=json&nojsoncallback=1&per_page=${opt.count}`;
		}

		if (opt.type === 'search') {
			url = `https://www.flickr.com/services/rest/?method=${method_search}&api_key=${api_key}&format=json&nojsoncallback=1&per_page=${opt.count}&tags=${opt.tag}`;
		}

		await axios.get(url).then((json) => {
			if (json.data.photos.photo.length === 0) {
				alert('해당 검색어의 이미지가 없습니다.');
				return;
			}
			setItems(json.data.photos.photo);
		});

		setTimeout(() => {
			frame.current.classList.add('on');
			setLoading(false);
			setTimeout(() => setEnableClick(true), 1000);
		}, 1000);
	};
	const showInterest = () => {
		if (enableClick) {
			setEnableClick(false);
			setLoading(true);
			frame.current.classList.remove('on');
			fetchFlickr({
				type: 'interest',
				count: 100,
			});
		}
	};
	const showSearch = () => {
		const tag = input.current.value.trim();
		if (!tag) {
			alert('검색어를 입력하세요');
			return;
		}
		input.current.value = '';

		if (enableClick) {
			setEnableClick(false);
			setLoading(true);
			frame.current.classList.remove('on');

			fetchFlickr({
				type: 'search',
				count: 100,
				tag: tag,
			});
		}
	};

	useEffect(() => {
		fetchFlickr({
			type: 'interest',
			count: 100,
		});
	}, []);

	return (
		<Layout name={'Flickr'}>
			<button onClick={showInterest}>interest</button>

			<div className='searchBox'>
				<input
					type='text'
					ref={input}
					onKeyUp={(e) => {
						if (e.key === 'Enter') showSearch();
					}}
				/>
				<button onClick={showSearch}>search</button>
			</div>

			{loading ? (
				<img src={path + '/img/loading.gif'} className='loading' />
			) : null}

			<div className='frame' ref={frame}>
				<Masonry elementType={'div'} options={masonryOptions}>
					{items.map((item, idx) => {
						return (
							<article key={idx}>
								<div className='inner'>
									<div className='pic'>
										<img
											src={`https://live.staticflickr.com/${item.server}/${item.id}_${item.secret}_m.jpg`}
										/>
									</div>
									<h2>{item.title}</h2>
								</div>
							</article>
						);
					})}
				</Masonry>
			</div>
		</Layout>
	);
}

export default Flickr;

/*  
keyDown : 키를 누르는 시점
keyUp : 키를 눌렀다 떼는 시점
keyPress : 키룰 눌렀다 떼는 시점 (한영변환 같은 특수키 안 먹음)
*/
