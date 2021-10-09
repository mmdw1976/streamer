import {combineReducers} from 'redux';
import autReducer from './authReducer';
import {reducer as formReducer} from 'redux-form';
import streamReducer from './streamReducer';

export default combineReducers({
    auth: autReducer,
    form: formReducer,
    streams: streamReducer
})