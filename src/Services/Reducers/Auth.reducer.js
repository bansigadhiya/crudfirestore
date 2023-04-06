import { LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT_FAIL, LOGOUT_SUCCESS, SIGNUP_FAIL, SIGNUP_SUCCESS } from "../Constants/Action.type"

const initialState = {
    isLoading : false,
    user : null,
    error : null
}

const AuthReducer = (state = initialState,action) => {
    switch(action.type){
        case LOGIN_SUCCESS : 
            return {
                ...state,
                user : action.payload,
                error : null,
                isLoading : false
            }
            break;
        case LOGIN_FAIL :
            return{
                ...state,
                user : null,
                error : action.payload,
                isLoading : false
            }
            break;
        case SIGNUP_SUCCESS :
            return{
                ...state,
                user : action.payload,
                error : null,
                isLoading : false
            }
            break
        case SIGNUP_FAIL :
            return{
                ...state,
                user : null,
                error : action.payload,
                isLoading : false
            }
            break;
        case LOGOUT_SUCCESS :
            return {
                ...state,
                user : null,
                error : null,
                isLoading : false
            }
            break;
        case LOGOUT_FAIL :
            return{
                ...state,
                user : null,
                error : action.payload,
                isLoading : false
            }
        default :
            return state
    }
}

export default AuthReducer;