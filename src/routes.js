import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App';
import ResultsPage from './components/results/ResultsPage';
import SearchPage from './components/search/SearchPage';


export default (
	<Route path="/" component={App}>
		<IndexRoute component={SearchPage} />
		<Route path="profiles" component={ResultsPage} />
	</Route>
);
