import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './store/configureStore';
const store = configureStore({});

// Render the root component normally
const rootEl = document.getElementById('root');

let render = () => {
  const Router = require('./containers/Router.jsx').default;

  ReactDOM.render(
    <Provider store={store}>
      <Router />
    </Provider>,
    rootEl
  );
};

if (module.hot) {
  module.hot.accept('./containers/Router.jsx', render);
}

render();
