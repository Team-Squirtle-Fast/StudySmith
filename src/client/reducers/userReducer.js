import * as types from '../constants/actionTypes.js'

const initialState = {
    // each property that goes into initialState is considered a "slice" of the store
    loggedIn: false,
};

// job of redecuer is to return a new state based off of an action
const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.LOGIN_SUCCESS: {
            return {
                ...state,
                loggedIn: true
            }
        }
        case types.LOGOUT_SUCCESS: {
            return {
                ...state,
                loggedIn: false,
            }
        }
        default: {
            return state;
        }
    }
}

export default userReducer;