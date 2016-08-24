import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as userActions from '../../actions/userActions';

class SearchPage extends Component {
	constructor(props, context) {
		super(props, context);

		this.state = {
			user: ''
		};

		this.searchUser = this.searchUser.bind(this);
		this.onUsernameChange = this.onUsernameChange.bind(this);
	}

	onUsernameChange(event) {
		const user = event.target.value;
		this.setState({user});
	}

	searchUser() {
		this.props.actions.searchUser(this.state.user);
	}

	render() {
		return (
			<div className="jumbotron">
				<h1>Github User Search</h1>

				<input
					className="form-control"
					type="text"
					onChange={this.onUsernameChange}
					placeholder="Enter Username"
					value={this.state.user}
					/>
				<button
					className="btn btn-default"
					onClick={this.searchUser}>
					Search
				</button>
			</div>
		);
	}
}

SearchPage.propTypes = {
	actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
	return {
		users: state.users
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(userActions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
