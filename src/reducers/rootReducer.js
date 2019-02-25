import { combineReducers } from 'redux';
import students from './students';
import grades from './grades';

export default combineReducers({
  students,
  grades,
});
