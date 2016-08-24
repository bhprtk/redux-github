import * as types from '../actions/actionTypes';

export default function userReducer(state = [], action) {
	switch (action.type) {
		case types.LOAD_USER_DATA_SUCCESS:
			return action.data;
		default:
			return state;
	}
}
