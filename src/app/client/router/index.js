import React from 'react';
import { render } from 'react-dom';
import Router from 'react-router';
import { Provider } from 'react-redux';
import DevTools from './devtools';
import { createHistory } from 'history';
import toString from './toString';
import { Promise } from 'when';
import createRoutes from './routes';
import { createStore } from '../store';

export function run() {
  // init promise polyfill
  window.Promise = window.Promise || Promise;
  // init fetch polyfill
  window.self = window;
  require('whatwg-fetch');

  const store = createStore(window['--app-initial']);

  if (process.env.NODE_ENV !== 'production') {
    store.subscribe(() => {
      console.log('%c[STORE]', 'color: green', store.getState());
    });
  }

  var monitor = null;
  if (process.env.NODE_ENV !== 'production') {
    monitor = <DevTools />;
  }

  render(
    <div>
      <Provider store={store}>
        <div>
          <Router history={createHistory()}>{createRoutes({store, first: {time: true}})}</Router>
          {monitor}
        </div>
      </Provider>
    </div>,
    document.getElementById('app')
  );
}

// Export it to render on the Golang sever, keep the name sync with -
// src/app/server/react.go#L65
export const renderToString = toString;

require('../css');

// Style live reloading
if (module.hot) {
  let c = 0;
  module.hot.accept('../css', () => {
    require('../css');
    const a = document.createElement('a');
    const link = document.querySelector('link[rel="stylesheet"]');
    a.href = link.href;
    a.search = '?' + c++;
    link.href = a.href;
  });
}
