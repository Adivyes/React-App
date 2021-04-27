import counterReducer from './counter';
import loggedReducer from './isLogged';
import ListReducers from './addItem'
import {combineReducers} from 'redux';

const allReducers = combineReducers ({
    counter: counterReducer,
    isLogged: loggedReducer,
    addItem: ListReducers
});

export default allReducers;