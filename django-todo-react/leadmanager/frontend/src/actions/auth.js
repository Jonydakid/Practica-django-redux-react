import axios from 'axios'
import {returnError} from './messages'

import {USER_LOADED,USER_LOADING,AUTH_ERROR, LOGIN_SUCCESS, LOGIN_FAILED} from './types'

//Check token and load user

export const loadUser = () =>(dispatch,getState) =>
{
    //User loading
    dispatch({type: USER_LOADING})

    //Get token from state

    const token = getState().auth.token;

    //Headers

    const config = {
        headers:{
            'Content-type':'application/json'
        }
    }

    //If token, add to headers config
    if(token){
        config.headers['Authorization']=  `Token ${token}`
    }

    axios.get('api/auth/user', config)
        .then(res=>{
            dispatch({
                type:USER_LOADED,
                payload: res.data
            });
        }).catch(err =>{
            dispatch(returnError(err.response.data, err.response.status))
            dispatch({
                type: AUTH_ERROR
            })
        })
}


//login de usuario

export const login = (username, password) =>dispatch =>
{
    //Headers

    const config = {
        headers:{
            'Content-type':'application/json'
        }
    }

    //Request body
    const body = JSON.stringify({username, password:password})

    axios.post('api/auth/login',body, config)
        .then(res=>{
            dispatch({
                type:LOGIN_SUCCESS,
                payload: res.data
            });
        }).catch(err =>{
            dispatch(returnError(err.response.data, err.response.status))
            dispatch({
                type: LOGIN_FAILED
            })
        })
}