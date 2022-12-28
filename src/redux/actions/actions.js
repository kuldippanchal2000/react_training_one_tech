/* eslint-disable no-console */
/* eslint-disable object-curly-newline */
/* eslint-disable arrow-body-style */
/* eslint-disable implicit-arrow-linebreak */
import axios from 'axios';
import {
  ADD_EMPLOYEE,
  ADD_USERS,
  DELETE_EMPLOYEE,
  DELETE_USERS,
  EDIT_EMPLOYEE,
  GET_EMPLOYEE,
  GET_USERS,
  UPDATE_USER,
} from './actiontypes';

export function getEmployee() {
  return (dispatch) => {
    return dispatch({
      type: GET_EMPLOYEE,
    });
  };
}

export function addEmployee(data) {
  return (dispatch) => {
    return dispatch({
      type: ADD_EMPLOYEE,
      payload: data,
    });
  };
}

export function editEmployee(data) {
  return (dispatch) => {
    return dispatch({
      type: EDIT_EMPLOYEE,
      payload: data,
    });
  };
}

export function deleteEmployee(employeeId) {
  return (dispatch) => {
    return dispatch({
      type: DELETE_EMPLOYEE,
      payload: employeeId,
    });
  };
}

// day15 task
export const getUsers = (users) => ({
  type: GET_USERS,
  payload: users,
});

export const userAdded = () => ({
  type: ADD_USERS,
});

export const userUpdated = (users) => {
  return {
    type: UPDATE_USER,
    payload: users,
  };
};
export const userDeleted = () => ({
  type: DELETE_USERS,
});

export const loadUsers = () => {
  return (dispatch) => {
    axios
      .get(`${process.env.REACT_APP_API}`)
      .then((resp) => {
        dispatch(getUsers(resp.data));
      })
      .catch((error) => console.log(error));
  };
};

export const addUser = (user) => {
  return (dispatch) => {
    axios
      .post(`${process.env.REACT_APP_API}/`, user)
      .then((resp) => {
        dispatch(userAdded(resp));
        dispatch(loadUsers());
      })
      .catch((error) => console.log(error));
  };
};

export const updateUser = (user) => {
  return (dispatch) => {
    axios
      .patch(`${process.env.REACT_APP_API}/${user.id}`, user)
      .then((resp) => {
        dispatch(userUpdated(resp.data.data));
        dispatch(loadUsers());
      })
      .catch((error) => console.log(error));
  };
};

export const deleteUser = (id) => {
  return (dispatch) => {
    axios
      .delete(`${process.env.REACT_APP_API}/${id}`)
      .then(() => {
        dispatch(userDeleted());
        dispatch(loadUsers());
      })
      .catch((error) => console.log(error));
  };
};
