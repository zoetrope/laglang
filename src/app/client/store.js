import { compose, applyMiddleware, createStore as reduxCreateStore} from 'redux';
import rootReducers from './reducers';
import { persistState } from 'redux-devtools';
import DevTools from './router/devtools';
import thunkMiddleware from 'redux-thunk';

let finalCreateStore;
if (process.env.NODE_ENV === 'production') {
  finalCreateStore = compose(
    applyMiddleware(thunkMiddleware)
  )(reduxCreateStore).bind(null, rootReducers);
} else {
  try {
    finalCreateStore = compose(
      applyMiddleware(thunkMiddleware),
      DevTools.instrument(),
      persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
    )(reduxCreateStore).bind(null, rootReducers);
    console.log('dev tools added');
  } catch (e) {
    finalCreateStore = reduxCreateStore.bind(null, rootReducers);
    console.log('dev tools failed' + e);
  }
}


export const createStore = finalCreateStore;
