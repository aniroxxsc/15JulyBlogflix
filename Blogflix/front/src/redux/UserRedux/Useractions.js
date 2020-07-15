import { FETCH_USER_REQUEST, FETCH_USER_SUCCESS, FETCH_USER_FAILURE, LOGOUT } from "./UserActionTypes"
import axios from 'axios'



export const fetchUserRequest = () => {
    return {
        type: FETCH_USER_REQUEST
    }
}


export const fetchUserSuccess = (userdata,token) => {
    return {
        type: FETCH_USER_SUCCESS,
        payload: {userdata,token}
    }
}

export const fetchUserFailure = error => {
    return {
        type: FETCH_USER_FAILURE,
        payload: error
    }
}

export const logout = () => {
    return {
        type: LOGOUT,
    }
}

export const fetchUser = token => {
    return (dispatch) => {
        dispatch(fetchUserRequest)
        axios.get('http://localhost:8000/auth/users/me',{ 
          headers: {
           Authorization: 'Token '+ token } 
      })
      .then(res => {
          const user = res.data
          dispatch(fetchUserSuccess(user,token))
      })
      .catch(error => {
          const errMsg = error.message
          dispatch(fetchUserFailure(errMsg))
      })

    }
}