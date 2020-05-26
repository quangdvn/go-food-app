import { combineReducers } from 'redux';
import authReducer from './authReducer';
import serviceReducer from './serviceReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  service: serviceReducer,
});

export default rootReducer;
