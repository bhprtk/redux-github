/*eslint-disable import/default */
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
// import configureStore from './store/configureStore';
// import {Provider} from 'react-redux';
// import { Router, browserHistory } from 'react-router';
// import routes from './routes';
// import {loadCourses} from './actions/courseActions';
// import {loadAuthors} from './actions/authorActions';
// import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/toastr/build/toastr.min.css';


render(
	<h1>hello</h1>,
	document.getElementById('app')
);