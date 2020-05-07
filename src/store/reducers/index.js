import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import listViewReducer from './listViewReducer';

const rootReducer = combineReducers({
  counter: counterReducer,
  listView: listViewReducer,
});

export default rootReducer;
