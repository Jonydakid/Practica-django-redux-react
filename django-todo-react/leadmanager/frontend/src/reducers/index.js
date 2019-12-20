import {combineReducers} from 'redux';
import errors from './errors'
import leads from './leads';
import messages from './messages'
export default combineReducers({
    leads,
    errors,
    messages
});