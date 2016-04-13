import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './styles/styles.styl';
import configureStore from './store/configureStore';
const store = configureStore({});

function render() {
  const Router = require('./containers/Router.jsx').default;

  ReactDOM.render(
    <Provider store={ store }>
      <Router />
    </Provider>,
    document.getElementById('root')
  );
};

if (module.hot) {
  module.hot.accept('./containers/Router.jsx', render);
}

render();
