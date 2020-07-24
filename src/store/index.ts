import { createStore, combineReducers } from 'redux';

import { greetReducer } from './modules/greet';

const rootReducer = combineReducers({ greetReducer });
const store = createStore(rootReducer);

export default store;
