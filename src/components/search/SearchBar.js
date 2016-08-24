import React, {PropTypes} from 'react';

const SearchBar = ({onUsernameChange, searchUser, user}) => {
	return (
		<div className="jumbotron">
			<h1>Github User Search</h1>

			<input
				className="form-control"
				type="text"
				onChange={onUsernameChange}
				placeholder="Enter Username"
				value={user}
				/>
			<button
				className="btn btn-default"
				onClick={searchUser}>
				Search
			</button>
		</div>
	);
};

SearchBar.propTypes = {
	onUsernameChange: PropTypes.func.isRequired,
	searchUser: PropTypes.func.isRequired,
	user: PropTypes.string.isRequired
};

export default SearchBar;
