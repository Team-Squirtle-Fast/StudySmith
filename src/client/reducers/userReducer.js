import * as types from '../constants/actionTypes.js'

const initialState = {
    loggedIn: false,
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.LOGIN: {
            return {
                ...state,
                loggedIn: true
            }
        }
        default: {
            return state
        }
    }
}

export default userReducer;