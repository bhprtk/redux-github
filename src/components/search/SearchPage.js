import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as userActions from '../../actions/userActions';
import SearchBar from './SearchBar';

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
		this.props.actions.loadUserData(this.state.user);
	}

	render() {
		// console.log('this.props.userData', this.props.userData);
		return (
			<SearchBar
				onUsernameChange={this.onUsernameChange}
				searchUser={this.searchUser}
				user={this.state.user} />
		);
	}
}

SearchPage.propTypes = {
	actions: PropTypes.object.isRequired,
	userData: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
	return {
		userData: state.userData
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(userActions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
