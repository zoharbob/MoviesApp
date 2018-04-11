import { combineReducers } from 'redux';
import moviesReducer from './moviesReducer';
import dialogReducer from "./dialogReducer";

const rootReducer = combineReducers({
    movies: moviesReducer,
    dialogVisibility: dialogReducer
});

export default rootReducer;

