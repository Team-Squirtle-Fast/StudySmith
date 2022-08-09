import { configureStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers/index'

const store = configureStore(
    reducers,
    composeWithDevTools()
)

export default store;