import axios from 'axios';
const path = process.env.PUBLIC_URL;

export const fetchFlickr = async (opt) => {
	const api_key = 'feb5dbb632085ee9e53c197d363d1a85';
	const method_interest = 'flickr.interestingness.getList';
	const method_search = 'flickr.photos.search';
	const method_user = 'flickr.people.getPhotos';
	let url = '';

	if (opt.type === 'interest') {
		url = `https://www.flickr.com/services/rest/?method=${method_interest}&api_key=${api_key}&format=json&nojsoncallback=1&per_page=${opt.count}`;
	}
	if (opt.type === 'search') {
		url = `https://www.flickr.com/services/rest/?method=${method_search}&api_key=${api_key}&format=json&nojsoncallback=1&per_page=${opt.count}&tags=${opt.tag}`;
	}
	if (opt.type === 'user') {
		url = `https://www.flickr.com/services/rest/?method=${method_user}&api_key=${api_key}&format=json&nojsoncallback=1&per_page=${opt.count}&user_id=${opt.user}`;
	}

	return await axios.get(url);
};
export const fetchYoutube = async () => {
	console.log('fetchYoutube');
	const key = 'AIzaSyCCiJkX1nNqYL222H5m-0fCS65LfzyExlQ';
	const id = 'PLHtvRFLN5v-UVVpNfWqtgZ6YPs9ZJMWRK';
	const num = 7;
	const url = `https://www.googleapis.com/youtube/v3/playlistItems?key=${key}&playlistId=${id}&maxResults=${num}&part=snippet`;

	return await axios.get(url);
};

export const fetchMembers = async () => {
	const url = path + '/DB/department.json';
	return await axios.get(url);
};
