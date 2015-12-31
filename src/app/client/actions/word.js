import {SEARCH_WORD, RECEIVE_WORDS} from './ActionTypes';

export function searchWordAction(query) {
  return {
    type: SEARCH_WORD,
    query: query
  };
}

export function receiveWordsAction(words) {
  return {
    type: RECEIVE_WORDS,
    words: words
  };
}

export function searchWord(query) {
  return dispatch => {
    dispatch(searchWordAction(query));
    return fetch('/api/v1/word/search?query=' + query)
      .then(r => r.json())
      .then(words=> dispatch(receiveWordsAction(words)));
  };
}

export function searchWordIfNeeded(query) {
  return (dispatch, getState) => {
    if (!getState().isFetching) {
      return dispatch(searchWord(query));
    }
  };
}
