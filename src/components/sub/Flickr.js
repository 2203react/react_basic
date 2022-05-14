import Layout from '../common/Layout';
import { useEffect, useState, useRef } from 'react';
import axios from 'axios';

function Flickr() {
	const frame = useRef(null);
	const [items, setItems] = useState([]);

	const fetchFlickr = async (opt) => {
		const api_key = 'feb5dbb632085ee9e53c197d363d1a85';
		const method_interest = 'flickr.interestingness.getList';
		//search method추가
		const method_search = 'flickr.photos.search';
		let url = '';

		//인수로 전달받은 객체의 type이 interest면 interest url반환
		if (opt.type === 'interest') {
			url = `https://www.flickr.com/services/rest/?method=${method_interest}&api_key=${api_key}&format=json&nojsoncallback=1&per_page=${opt.count}`;
		}
		//인수로 전달받은 객체의 type이 search면 search url반환
		if (opt.type === 'search') {
			url = `https://www.flickr.com/services/rest/?method=${method_search}&api_key=${api_key}&format=json&nojsoncallback=1&per_page=${opt.count}&tags=${opt.tag}`;
		}

		await axios.get(url).then((json) => {
			setItems(json.data.photos.photo);
		});
		frame.current.classList.add('on');
	};

	useEffect(() => {
		fetchFlickr({
			type: 'interest',
			count: 500,
		});
	}, []);

	return (
		<Layout name={'Flickr'}>
			<button
				onClick={() => {
					frame.current.classList.remove('on');
					fetchFlickr({
						type: 'interest',
						count: 500,
					});
				}}>
				interest
			</button>

			<button
				onClick={() => {
					frame.current.classList.remove('on');
					fetchFlickr({
						type: 'search',
						count: 500,
						tag: '바다',
					});
				}}>
				search
			</button>

			<div className='frame' ref={frame}>
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
			</div>
		</Layout>
	);
}

export default Flickr;
