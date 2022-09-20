import * as types from '../constants/actionTypes.js';

export const addSkills = data => ({
  type: types.ADD_SKILLS,
  // payload is an object that contains all the data about an action
  payload: data
});

export const getLogin = (username, firstName, lastName, email, tasks, skills, dailyLog) => ({
  type: types.LOGIN_SUCCESS,
  payload: {
    username,
    firstName,
    lastName,
    email,
    tasks,
    skills,
    dailyLog
  }
});

export const signUp = (username, firstName, lastName, email) => ({
  type: types.SIGNUP_SUCCESS,
  payload: { 
    username,
    firstName, 
    lastName, 
    email
  }
});


export const getLogout = () => ({
  type: types.LOGOUT_SUCCESS
});

export const toggleSkills = (skillId, skillName, skillStatus, skillNotes) => ({
  type: types.TOGGLE_SKILLS,
  payload: {
    skillId,
    skillName,
    skillStatus,
    skillNotes
  }
});

export const toggleToDo = (taskId, taskDueDate, taskTitle, resourceId) => ({
  type: types.TOGGLE_TODO,
  payload: {
    taskId,
    taskDueDate,
    taskTitle,
    resourceId
  }
});

export const dailyLog = (logTitle, logBody, logDate) => ({
  type: types.DAILY_LOG,
  payload: {
    logTitle,
    logBody,
    logDate
  }
})

export const deleteSkills = (skillId) => ({
  type: types.DELETE_SKILLS,
  payload: skillId
})

export const addDailyLog = (logId, logTitle, logBody) => ({
  type: types.ADD_DAILY_LOG,
  payload: {
    logId,
    logTitle,
    logBody
  }
})

export const logOut = () => ({
  type: types.LOGOUT
})

