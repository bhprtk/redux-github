import * as types from '../actions/actionTypes';

export default function userReducer(state = [], action) {
	switch (action.type) {
		case types.SEARCH_USER:
			return [...state, Object.assign({}, action.user)];
		default:
			return state;
	}
}
