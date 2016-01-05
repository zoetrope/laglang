import {SEARCH_WORD, RECEIVE_WORDS} from './ActionTypes';

export function searchWordAction(query) {
  return {
    type: SEARCH_WORD,
    query: query
  };
}

export function receiveWordsAction(searchResult) {
  return {
    type: RECEIVE_WORDS,
    searchResult: searchResult
  };
}

export function searchWord(query) {
  return dispatch => {
    dispatch(searchWordAction(query));
    return fetch('/api/v1/dictionary/search?query=' + query)
      .then(r => r.json())
      .then(searchResult=> dispatch(receiveWordsAction(searchResult)));
  };
}

export function searchWordIfNeeded(query) {
  return (dispatch, getState) => {
    if (!getState().isFetching) {
      return dispatch(searchWord(query));
    }
  };
}
