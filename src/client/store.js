import { configureStore } from '@reduxjs/toolkit';
// import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './reducers/index'

const store = configureStore({
    reducer,
})

export default store;