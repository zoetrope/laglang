import {SEARCH_WORD, RECEIVE_WORDS} from './ActionTypes';

export function searchWord(word) {
  return {
    type: SEARCH_WORD,
    word: word
  };
}

export function receiveWords(words) {
  return {
    type: RECEIVE_WORDS,
    words: words
  };
}

export function getWord(word) {
  return dispatch => {
    dispatch(searchWord(word));
    return fetch('/api/v1/word/search?word=' + word)
      .then(r => r.json())
      .then(words=> dispatch(receiveWords(words)));
  };
}

export function searchWordsIfNeeded(word) {
  return (dispatch, getState) => {
    if (!getState().isFetching) {
      return dispatch(getWord(word));
    }
  };
}
