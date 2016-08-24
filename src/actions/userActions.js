import * as types from './actionTypes';

export function searchUser(user) {
	return { type: types.SEARCH_USER, user};
}


// A reducer is just a function that accepts a state and an action and returns a new state.
