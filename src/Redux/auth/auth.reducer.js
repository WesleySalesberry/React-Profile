import {LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT, CLEAR_USER, USER_LOADED} from '../types'

const INITAL_STATE = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    loading: true,
    user: null
}

export const authReducer = (state = INITAL_STATE, action) => {
    const { type, payload } = action
    switch(type){
        case USER_LOADED:
            return {
                ...state,
                isAuthenticated: true,
                loading: false,
                user: payload
            }

        case LOGIN_SUCCESS:
            localStorage.setItem('token', payload.token)
            return{
                ...state,
                ...payload,
                isAuthenticated: true,
                loading: false
            }

        case LOGIN_FAIL:
        case LOGOUT:
        case CLEAR_USER:
            localStorage.removeItem('token')
            return {
                ...state,
                token: null,
                isAuthenticated: false,
                loading: false,
                user: null
            }
        
        default:
            return state;
    }
}

