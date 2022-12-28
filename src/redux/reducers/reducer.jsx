/* eslint-disable object-curly-newline */
/* eslint-disable no-confusing-arrow */
/* eslint-disable default-param-last */
/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */

import { ADD_EMPLOYEE, DELETE_EMPLOYEE, EDIT_EMPLOYEE, GET_EMPLOYEE } from '../actions/actiontypes';

const initialstate = {
  employees: [],
};

const reducer = (state = initialstate, action) => {
  switch (action.type) {
    case GET_EMPLOYEE:
      return {
        ...state,
      };
    case ADD_EMPLOYEE:
      return {
        ...state,
        employees: state.employees.concat(action.payload),
      };
    case EDIT_EMPLOYEE:
      return {
        ...state,
        employees: state.employees.map((content) =>
          content.id === action.payload.id
            ? {
                ...content,
                username: action.payload.username,
                department: action.payload.department,
              }
            : content,
        ),
      };
    case DELETE_EMPLOYEE:
      return {
        ...state,
        employees: state.employees.filter((item) => item.id !== action.payload),
      };
    default:
      return state;
  }
};

export default reducer;
