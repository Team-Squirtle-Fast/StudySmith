import * as types from '../constants/actionTypes.js';

export const addSkills = data => ({
  type: types.ADD_SKILLS,
  // payload is an object that contains all the data about an action
  payload: data
});

export const getLogin = (username, password) => ({
  type: LOGIN_SUCCESS,
  payload: { username, password }
});

export const getLogout = () => ({
  type: LOGOUT_SUCCESS
});