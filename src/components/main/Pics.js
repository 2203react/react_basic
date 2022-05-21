import { useSelector } from 'react-redux';
import { useState, useRef } from 'react';
import Popup from '../common/Popup';

function Pics() {
	const { flickr } = useSelector((store) => store.flickrReducer);
	const [index, setIndex] = useState(0);
	const pop = useRef(null);
	return (
		<>
			<section id='pics' className='myScroll'>
				<h1>Recent Gallery</h1>

				{flickr.map((pic, idx) => {
					if (idx < 5) {
						return (
							<li
								key={idx}
								onClick={() => {
									setIndex(idx);
									pop.current.open();
								}}>
								<img
									src={`https://live.staticflickr.com/${pic.server}/${pic.id}_${pic.secret}_s.jpg`}
								/>
							</li>
						);
					}
				})}
			</section>

			<Popup ref={pop}>
				{flickr.length !== 0 && (
					<>
						<img
							src={`https://live.staticflickr.com/${flickr[index].server}/${flickr[index].id}_${flickr[index].secret}_b.jpg`}
						/>
						<span className='close' onClick={() => pop.current.close()}>
							close
						</span>
					</>
				)}
			</Popup>
		</>
	);
}

export default Pics;
