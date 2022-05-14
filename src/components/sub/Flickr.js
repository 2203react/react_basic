import Layout from '../common/Layout';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Flickr() {
	const [items, setItems] = useState([]);

	const fetchFlickr = async () => {
		const api_key = 'feb5dbb632085ee9e53c197d363d1a85';
		const method = 'flickr.interestingness.getList';
		const per_page = 50;
		const url = `https://www.flickr.com/services/rest/?method=${method}&api_key=${api_key}&format=json&nojsoncallback=1&per_page=${per_page}`;

		await axios.get(url).then((json) => {
			setItems(json.data.photos.photo);
		});
	};

	useEffect(() => {
		fetchFlickr();
	}, []);

	return (
		<Layout name={'Flickr'}>
			<div className='frame'>
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
