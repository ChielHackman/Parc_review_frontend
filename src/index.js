import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';
import App from './App';
import ParcList from './ParcList';
import Parc from './Parc';

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={ParcList} />
      <Route path="/parc/:parcId" component={Parc}/>
    </Route>
  </Router>
), document.getElementById('root'));
