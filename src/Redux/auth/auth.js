import { api } from '../../Utils/api'
import { setAuthToken } from '../../Utils/token'

import { LOGIN_SUCCESS, LOGIN_FAIL, CLEAR_USER, LOGOUT,USER_LOADED, AUTH_ERROR } from '../types'

export const loadUser = () => async dispatch => {
    let token;
    if(localStorage.token){
            setAuthToken(localStorage.token)
            token = localStorage.token
        }
        
    try {
        const response = await api.get('/auth/user', 
        {
            headers: {'Authorization': 'Bearer '+token}
        })
        
        dispatch({
            type: USER_LOADED,
            payload: response.data.data
        })
    } catch (error) {
        dispatch({
            type: AUTH_ERROR
        })
    }
}

export const login = ( email, password ) => async dispatch => {
    
    const body = JSON.stringify({email, password})
    try {
        const response = await api.post('auth/login', body)

        dispatch({
            type: LOGIN_SUCCESS, 
            payload: response.data
        })
        dispatch(loadUser())
    } catch (error) {
        console.log(error)
        dispatch({
            type: LOGIN_FAIL
        })
    }
}

export const logout = () => dispatch => {
    dispatch({
        type: CLEAR_USER
    })

    dispatch({
        type: LOGOUT
    })
}
