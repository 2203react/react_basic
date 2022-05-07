import { Route, Switch } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setYoutube } from './redux/actions';
import axios from 'axios';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Main from './components/main/Main';
import Youtube from './components/sub/Youtube';
import Gallery from './components/sub/Gallery';
import Department from './components/sub/Department';
import Location from './components/sub/Location';
import Join from './components/sub/Join';
import Community from './components/sub/Community';

import './scss/style.scss';

function App() {
	//App컴포넌트함수가 실행되자마자 store의 빈 reducer 데이터를 가져옴
	const vidData = useSelector((store) => store.youtubeReducer.youtube);
	const dispatch = useDispatch();

	const fetchYoutube = async () => {
		const key = 'AIzaSyCCiJkX1nNqYL222H5m-0fCS65LfzyExlQ';
		const id = 'PLHtvRFLN5v-UVVpNfWqtgZ6YPs9ZJMWRK';
		const num = 7;
		const url = `https://www.googleapis.com/youtube/v3/playlistItems?key=${key}&playlistId=${id}&maxResults=${num}&part=snippet`;

		await axios.get(url).then((json) => {
			dispatch(setYoutube(json.data.items));
		});
	};

	//App컴포넌트가 실제  출력이 되면 fetchYoutube함수를 호출해서
	//비동기로 받아진   데이터를 리듀서를 통해서 store에 전역으로 저장해줌
	useEffect(() => {
		fetchYoutube();
	}, []);

	//추가된 데이터확인
	useEffect(() => {
		console.log(vidData);
	}, [vidData]);

	return (
		<>
			<Switch>
				<Route exact path='/' component={Main}></Route>

				<Route path='/'>
					<Header type={'sub'} />
				</Route>
			</Switch>

			<Route path='/department' component={Department}></Route>
			<Route path='/community' component={Community}></Route>
			<Route path='/youtube' component={Youtube}></Route>
			<Route path='/gallery' component={Gallery}></Route>
			<Route path='/location' component={Location}></Route>
			<Route path='/join' component={Join}></Route>

			<Footer />
		</>
	);
}

export default App;
