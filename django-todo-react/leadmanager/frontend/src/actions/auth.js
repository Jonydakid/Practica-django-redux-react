import axios from 'axios'
import {returnError} from './messages'

import {USER_LOADED,USER_LOADING,AUTH_ERROR, LOGIN_SUCCESS, LOGIN_FAILED, LOGOUT_SUCCESS, 
    REGISTER_SUCCESS, REGISTER_FAIL} from './types'

//Check token and load user

export const loadUser = () =>(dispatch,getState) =>
{
    //User loading
    dispatch({type: USER_LOADING})

    

    axios.get('api/auth/user', tokenConfig(getState))
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

//logout de usuario

export const logout = () =>(dispatch,getState) =>
{
    axios.post('api/auth/logout/',null, tokenConfig(getState))
        .then(res=>{
            dispatch({
                type:LOGOUT_SUCCESS
            });
        }).catch(err =>{
            dispatch(returnError(err.response.data, err.response.status))
            
        })
}

// Helper que setea la config del token

export const  tokenConfig = (getState)=>{
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

    return config
}

//Register de usuario

export const register = ({username, password, email}) =>dispatch =>
{
    //Headers

    const config = {
        headers:{
            'Content-type':'application/json'
        }
    }

    //Request body
    const body = JSON.stringify({username, email, password:password})

    axios.post('api/auth/register',body, config)
        .then(res=>{
            dispatch({
                type:REGISTER_SUCCESS,
                payload: res.data
            });
        }).catch(err =>{
            dispatch(returnError(err.response.data, err.response.status))
            dispatch({
                type: REGISTER_FAIL
            })
        })
}