import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import Main from './main';
import Home from './home';
import Bookcity from './containers/bookcity';
import './style.css';

let routes = <Route path="/" component={Main}>
    <IndexRoute component={Home} />
    <Route path="/bookcity" component={Bookcity} />
</Route>;

ReactDOM.render(
    <Router routes={routes} history={hashHistory} />, document.getElementById('root'));
