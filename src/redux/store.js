/* eslint-disable import/no-import-module-exports */
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const store = createStore(rootReducer, applyMiddleware(thunk));
if (module.hot) {
  // Accept hot update
  module.hot.accept();
}
export default store;
