import React, { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setYoutube } from '../../redux/actions';
import axios from 'axios';
import Layout from '../common/Layout';
import Popup from '../common/Popup';

function Youtube() {
	//store에 youtubeReuder데이터를 가져옴 (빈배열)
	const vidData = useSelector((store) => store.youtubeReducer.youtube);
	//dispatch 전송함수 활성화
	const dispatch = useDispatch();
	const pop = useRef(null);

	const [index, setIndex] = useState(0);
	const [loading, setLoading] = useState(false);

	//axios 데이타 호출 구문을 함수로 패키징
	const fetchYoutube = async () => {
		const key = 'AIzaSyCCiJkX1nNqYL222H5m-0fCS65LfzyExlQ';
		const id = 'PLHtvRFLN5v-UVVpNfWqtgZ6YPs9ZJMWRK';
		const url = `https://www.googleapis.com/youtube/v3/playlistItems?key=${key}&playlistId=${id}&maxResults=3&part=snippet`;

		//해당 함수에서 axios로 유튜브 데이터를 받아오면 받아온 정보값을 dispatch함수로 다시 reducer에 전달
		await axios.get(url).then((json) => {
			dispatch(setYoutube(json.data.items));
			setLoading(true);
		});
	};

	useEffect(() => {
		fetchYoutube();
	}, []);

	return (
		<>
			<Layout name={'Youtube'}>
				{vidData.map((item, idx) => {
					let desc = item.snippet.description;
					let desc_len = desc.length;
					let date = item.snippet.publishedAt;

					return (
						<article
							key={idx}
							onClick={() => {
								setIndex(idx);
								pop.current.open();
							}}>
							<div className='inner'>
								<div className='pic'>
									<img src={item.snippet.thumbnails.medium.url} />
								</div>
								<h2>{item.snippet.title}</h2>
								<p>{desc_len > 200 ? desc.substr(0, 200) + '...' : desc}</p>
								<span>{date.split('T')[0]}</span>
							</div>
						</article>
					);
				})}
			</Layout>

			<Popup ref={pop}>
				{loading && (
					<iframe
						src={
							'https://www.youtube.com/embed/' +
							vidData[index].snippet.resourceId.videoId
						}
						frameBorder='0'></iframe>
				)}
				<span onClick={() => pop.current.close()}>close</span>
			</Popup>
		</>
	);
}

export default Youtube;
