import { combineReducers } from 'redux';
import { SET_CONFIG, SEARCH_WORD, RECEIVE_WORDS } from './actions/ActionTypes';

function config(state = {}, action) {
  switch (action.type) {
    case SET_CONFIG:
      return action.config;
    default:
      return state;
  }
}

function dictionary(state = {isFetching: false, query: '', words: []}, action) {
  switch (action.type) {
    case SEARCH_WORD:
      return Object.assign({}, state, {isFetching: true, query: action.query});
    case RECEIVE_WORDS:
      return Object.assign({}, state, {isFetching: false, words: action.words});
    default:
      return state;
  }
}

export default combineReducers({
  config,
  dictionary
});
