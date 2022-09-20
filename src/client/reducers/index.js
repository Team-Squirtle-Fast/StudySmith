import { combineReducers } from 'redux';

// import reducers below
import userReducer from './userReducer'

const reducer = combineReducers({
    user: userReducer,
})

export default reducer;