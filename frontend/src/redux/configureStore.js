import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import users from 'redux/modules/users';


const env = process.env.NODE_ENV;

// Apply all env
const middlewares = [thunk];

// Apply dev env
if (env === 'development') {
    // Dynamic package loading
    const { logger } = require('redux-logger');
    middlewares.push(logger);
}

const reducer = combineReducers({
    users
});

let store = initialState => createStore(reducer, applyMiddleware(...middlewares));

export default store();