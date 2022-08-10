import * as types from '../constants/actionTypes.js'

const initialState = {
    // each property that goes into initialState is considered a "slice" of the store
    loggedIn: false,
    username: '',
    firstName: '',
    lastName: '',
    email: '',
    tasks: {3: {taskTitle: 'study front end', dueDate: '2023-04-13'}, 4: {taskTitle: 'study backend', dueDate: '2023-04-14'},
            5: {taskTitle: 'study SDI', dueDate: '2023-04-15'}},
    //skills: {},
    skills: {1: {skillName: 'AWS', skillStatus: 'red', skillNotes: 'Study More'}, 2: {skillName: 'TypeScript', skillStatus: 'yellow', skillNotes: 'TypeScript study enums'},
            3: {skillName: 'Docker', skillStatus: 'green', skillNotes: 'Docker good'}},
    // dailyLog: {},
    dailyLog: {logTitle: 'Redux is challenging', logBody: 'I will get better at Redux', logDate: '8/9/2022'},
    skillsPopUpToggle: false,
    skillsPopUpId: '',
    skillsPopUpName: '',
    skillsPopUpStatus: '',
    skillsPopUpNotes: '',
    logTitle: '',
    logBody: '',
    logDate: '',

    toDoPopUpToggle: false,
    toDoPopUpTaskId: '', 
    toDoPopUpTaskDueDate: '',
    toDoPopUpTaskTitle: '',
    toDoPopUpResourceId: ''
};

// example of what skills & tasks looks like, where the key represents the id
/*
{
1: {skillName: 'AWS', status: 'red'},
2: {skillName: 'TypeScript', status: 'yellow'},
3: {skillName: 'Docker', status: 'green'}
}
*/

// job of redecuer is to return a new state based off of an action
const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.LOGIN_SUCCESS: {
            const { username, firstName, lastName, email, tasks, skills, dailyLog } = action.payload
            // tasks = state.tasks.slice()
            // tasks.push(...action.payload.tasks)
            // skills = state.tasks.slice()
            // skills.push(action.payload.skills)
            // const newDailyLog = {...dailyLog}
            // dailyLog = Object.assign(action.payload.dailyLog, newDailyLog)
            return {
                ...state,
                loggedIn: true,
                username,
                firstName,
                lastName,
                email,
                tasks,
                skills,
                dailyLog
            }
        }
        case types.SIGNUP_SUCCESS: {
            const { username, firstName, lastName, email } = action.payload
            return {
                ...state,
                loggedIn: true,
                username,
                firstName,
                lastName,
                email
            }
        }
        case types.LOGOUT_SUCCESS: {
            return {
                ...state,
                loggedIn: false,
            }
        }
        case types.TOGGLE_SKILLS: {
            const {skillId, skillName, skillStatus, skillNotes} = action.payload;
            return {
                ...state,
                skillsPopUpToggle: !state.skillsPopUpToggle,
                skillsPopUpId: skillId,
                skillsPopUpName: skillName,
                skillsPopUpStatus: skillStatus,
                skillsPopUpNotes: skillNotes,
            }
        }
        case types.TOGGLE_TODO: {
            const {taskId, taskDueDate, taskTitle, resourceId} = action.payload;
            return {
                ...state,
                toDoPopUpToggle: !state.toDoPopUpToggle,
                toDoPopUpTaskId: taskId,
                toDoPopUpTaskDueDate: taskDueDate,
                toDoPopUpTaskTitle: taskTitle,
                toDoPopUpResourceId: resourceId
            }
        }
        case types.ADD_SKILLS: {
            const { skillId, skillName, skillStatus, skillNotes } = action.payload;

            const skillsCopy = JSON.parse(JSON.stringify(state.skills));

            skillsCopy[skillId] = {skillName, skillStatus, skillNotes};

            return {
                ...state,
                skills: skillsCopy
            }
        }
        case types.DAILY_LOG: {
            const { logTitle, logBody, logDate } = action.payload;
            return {
                ...state,
                logTitle,
                logBody,
                logDate,
            }
        }
        case types.DELETE_SKILLS: {
            const skillsCopy = JSON.parse(JSON.stringify(state.skills));
            delete skillsCopy[payload];

            return {
                ...state,
                skills: skillsCopy,
            }
        }
        default: {
            return state;
        }
    }
}

export default userReducer;