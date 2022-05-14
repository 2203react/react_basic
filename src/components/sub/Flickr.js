import Layout from '../common/Layout';
import { useEffect, useState, useRef } from 'react';
import axios from 'axios';

function Flickr() {
	const frame = useRef(null);
	const [items, setItems] = useState([]);

	const fetchFlickr = async () => {
		const api_key = 'feb5dbb632085ee9e53c197d363d1a85';
		const method_interest = 'flickr.interestingness.getList';
		const per_page = 500;
		const url = `https://www.flickr.com/services/rest/?method=${method_interest}&api_key=${api_key}&format=json&nojsoncallback=1&per_page=${per_page}`;

		await axios.get(url).then((json) => {
			setItems(json.data.photos.photo);
		});
		//await 데이터호출이 완료되면 frame보임 처리
		frame.current.classList.add('on');
	};

	useEffect(() => {
		fetchFlickr();
	}, []);

	return (
		<Layout name={'Flickr'}>
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
