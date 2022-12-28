import { combineReducers } from 'redux';
import reducer from './reducer';
import userReducer from './userreducer';

export default combineReducers({
  reducer,
  data: userReducer,
});
