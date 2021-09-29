import {combineReducers} from 'redux';
import autReducer from './authReducer';
import {reducer as formReducer} from 'redux-form';

export default combineReducers({
    auth: autReducer,
    form: formReducer
})