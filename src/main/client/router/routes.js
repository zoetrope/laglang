import React from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';
import App from '#app/components/app';
import Homepage from '#app/components/homepage';
import Usage from '#app/components/usage';
import Dictionary from '#app/components/dictionary';
import Memo from '#app/components/memo';
import NotFound from '#app/components/not-found';

/**
 * Returns configured routes for different
 * environments. `w` - wrapper that helps skip
 * data fetching with onEnter hook at first time.
 * @param {Object} - any data for static loaders and first-time-loading marker
 * @returns {Object} - configured routes
 */
export default ({store, first}) => {

  // Make a closure to skip first request
  function w(loader) {
    return (nextState, replaceState, callback) => {
      if (first.time) {
        first.time = false;
        return callback();
      }
      return loader ? loader({store, nextState, replaceState, callback}) : callback();
    };
  }

  return <Route path="/" component={App}>
    <IndexRoute component={Homepage} onEnter={w(Homepage.onEnter)}/>
    <Route path="/dictionary" component={Dictionary} onEnter={w(Dictionary.onEnter)}/>
    <Route path="/memo" component={Memo} onEnter={w(Memo.onEnter)}/>
    <Route path="/usage" component={Usage} onEnter={w(Usage.onEnter)}/>
    {/* Server redirect in action */}
    <Redirect from="/docs" to="/usage" />
    <Route path="*" component={NotFound} onEnter={w(NotFound.onEnter)}/>
  </Route>;
};
