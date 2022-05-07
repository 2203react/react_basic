export const setMembers = (member) => {
	return {
		type: 'SET_MEMBERS',
		payload: member,
	};
};

export const setYoutube = (data) => {
	return {
		type: 'SET_YOUTUBE',
		payload: data,
	};
};

export const setFlickr = (data) => {
	return {
		type: 'SET_FLICKR',
		payload: data,
	};
};
