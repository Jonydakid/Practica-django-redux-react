import {combineReducers} from 'redux';
import errors from './errors'
import leads from './leads';
import messages from './messages'
import auth from './auth'
export default combineReducers({
    leads,
    errors,
    messages,
    auth
});