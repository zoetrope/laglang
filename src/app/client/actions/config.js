import {SET_CONFIG} from './ActionTypes';

/**
 * action creators
 */

export function setConfig(config) {
  return { type: SET_CONFIG, config };
}
