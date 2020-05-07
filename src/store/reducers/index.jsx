import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import listView from './listView';

const rootReducer = combineReducers({
  counter: counterReducer,
  listView: listView,
});

export default rootReducer;
