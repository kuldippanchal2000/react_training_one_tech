/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-confusing-arrow */
/* eslint-disable default-param-last */

import * as types from '../actions/actiontypes';

const initialState = {
  users: [],
  user: {},
  loading: false,
};

const userReducers = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case types.ADD_USERS:
      return {
        ...state,
        loading: false,
      };
    case types.UPDATE_USER:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case types.DELETE_USERS:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default userReducers;
