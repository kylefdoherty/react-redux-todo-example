import { combineReducers } from 'redux';
import todos from './todos_reducer';

const todoApp = combineReducers({todos});

export default todoApp
