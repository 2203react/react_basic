import { combineReducers } from 'redux';

const initMember = {
	members: [
		{
			name: 'Tom',
			position: 'CEO',
			pic: 'member1.jpg',
		},
		{
			name: 'Julia',
			position: 'Vice President',
			pic: 'member2.jpg',
		},
		{
			name: 'Emma',
			position: 'Back-end Developer',
			pic: 'member3.jpg',
		},
		{
			name: 'David',
			position: 'Designer',
			pic: 'member4.jpg',
		},
	],
};

const memberReducer = (state = initMember, action) => {
	switch (action.type) {
		case 'SET_MEMBERS':
			return { ...state, members: action.payload };

		default:
			return state;
	}
};

const youtubeReducer = (state = { youtube: [] }, action) => {
	switch (action.type) {
		case 'SET_YOUTUBE':
			return { ...state, youtube: action.payload };

		default:
			return state;
	}
};

const reducers = combineReducers({
	memberReducer,
	youtubeReducer,
});

export default reducers;
