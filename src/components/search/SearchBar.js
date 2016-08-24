import React, {PropTypes} from 'react';

const SearchBar = ({onUsernameChange, searchUser, user}) => {
	return (
		<div className="jumbotron">
			<h2 className="text-center">Github Stalker</h2>
			<form
				onSubmit={searchUser}
				className="row">
				<input
					style={styles.searchBar}
					className="col-md-10 col-sm-10 col-xs-10"
					type="text"
					onChange={onUsernameChange}
					placeholder="Enter Username"
					value={user}
					/>
				<button
					style={styles.button}
					className="btn btn-default col-md-2 col-sm-2 col-xs-2">
					Search
				</button>

			</form>
		</div>
	);
};

SearchBar.propTypes = {
	onUsernameChange: PropTypes.func.isRequired,
	searchUser: PropTypes.func.isRequired,
	user: PropTypes.string.isRequired
};

const styles = {
	searchBar: {
		height: 50
	},
	button: {
		height: 50
	}
};

export default SearchBar;
