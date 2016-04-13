import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import Counter from './Counter.jsx';
import Async from './Async.jsx';
import App from './App.jsx';

const NoMatch = () => <span>No such route</span>;

export default function() {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <Route path="counter" component={Counter}/>
        <Route path="async" component={Async}/>
        <Route path="*" component={NoMatch}/>
      </Route>
    </Router>
  );
}
