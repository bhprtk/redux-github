import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function userReducer(state = initialState.userData, action) {
	switch (action.type) {
		case types.LOAD_USER_DATA_SUCCESS:
			console.log('action', action);
			return action.data;
		default:
			return state;
	}
}
