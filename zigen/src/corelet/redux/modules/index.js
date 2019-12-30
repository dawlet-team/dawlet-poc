import { combineReducers } from 'redux';
import dawlets from './dawlets';
import player from './player';

export default combineReducers({
  dawlets,
  player,
});
