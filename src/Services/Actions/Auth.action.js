import { LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT_FAIL, LOGOUT_SUCCESS, SIGNUP_FAIL, SIGNUP_SUCCESS } from "../Constants/Action.type";
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../../Firebase";

const provider = new GoogleAuthProvider();

export const LogInSuccess = (user) => {
    return{
        type : LOGIN_SUCCESS,
        payload : user
    }
}

export const LogInFail = (err) => {
    return{
        type : LOGIN_FAIL,
        payload : err
    }
}

export const SignUpSuccess = (user) => {
    return{
        type : SIGNUP_SUCCESS,
        payload : user
    }
}

export const signUpFail = (err) => {
    return{
        type : SIGNUP_FAIL,
        payload : err
    }
}

export const LogOUTSuccess = () => {
    return{
        type : LOGOUT_SUCCESS,
    }
}

export const LogOutFail = (err) => {
    return{
        type : LOGOUT_FAIL,
        payload : err
    }
}

export const SignUpwithEmail = (email,password) => {

    return dispatch => {
        createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
            const user = userCredential.user
            console.log(user,"user");
            dispatch(SignUpSuccess(user))
        }).catch((error) => {
            dispatch(signUpFail(error.code))
        })
    }
}

export const LognInwithGoogle = () => {

    return dispatch => {
        signInWithPopup(auth,provider).then((userCredential) => {
            const user = userCredential.user;
            dispatch(LogInSuccess(user))
        }).catch((error) => {
            dispatch(LogInFail(error.code))
        })
    }
}

export const LoginwithEmail = (email,password) => {

    return dispatch => {
        signInWithEmailAndPassword(auth,email,password).then((userCredential) => {
            const user = userCredential.user;
            dispatch(LogInSuccess(user))
        }).catch((error) => {
            dispatch(LogInFail(error.code))
        })
    }
}

export const Logout = () => {

    return dispatch => {
        signOut(auth).then(() => {
            console.log("logout successful");
            dispatch(LogOUTSuccess())
        }).catch((error) => {
            console.log(error.code);
            dispatch(LogOutFail(error.code))
        })
    }
}