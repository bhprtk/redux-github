import React, {Component} from 'react';
import {Link} from 'react-router';

class SearchPage extends Component {
	render() {
		return (
			<div className="jumbotron">
				<h1>Github User Search</h1>
				<input
					type="text"
					onChange={e => this.setState({user: e.target.value})}
					placeholder="Enter Username"
					value={this.state.user}
					/>
			</div>
		);
	}
}

export default SearchPage;
