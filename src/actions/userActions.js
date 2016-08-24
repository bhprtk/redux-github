import * as types from './actionTypes';
import userApi from '../api/userApi';
import {get} from 'jquery';

export function loadUserDataSuccess(data) {
	return { type: types.LOAD_USER_DATA_SUCCESS, data};
}

export function loadUserData(user) {
	console.log('user', user);
	return dispatch => {
		return get(`https://api.github.com/users/${user}`).then(data => {
			dispatch(loadUserDataSuccess(data));
		}).catch(error => {
			throw(error);
		});
	};
}

// A reducer is just a function that accepts a state and an action and returns a new state.
