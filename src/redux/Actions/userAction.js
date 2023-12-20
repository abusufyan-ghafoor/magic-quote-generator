import { LOGIN_FAILURE, LOGIN_SUCCESS, LOGOUT, SIGNUP_SUCCESS, UPDATE_USER_SUCCESS } from '../actionTypes'

export const signupSuccess = (userData) => ({
  type: SIGNUP_SUCCESS,
  payload: userData
})

export const loginSuccess = (loginData) => ({
  type: LOGIN_SUCCESS,
  payload: loginData
})

export const loginFailure = () => ({
  type: LOGIN_FAILURE,
  payload: 'Invalid username or password'
})

export const signup = (userData) => (dispatch) => {
  const userId = Math.floor(Math.random() * 1000)
  const userDataWithId = { ...userData, id: userId }
  dispatch(signupSuccess(userDataWithId))
}
export const login = (loginData, loginMessage) => (dispatch, getState) => {
  // const a = getState().user.users
  if (loginMessage === 'success') {
    dispatch(loginSuccess(loginData))
  } else {
    dispatch(loginFailure())
  }
}
export const logout = () => (dispatch) => {
  dispatch({
    type: LOGOUT,
    payload: 'Logout Success'
  })
}
export const userEdit = (updatedData) => (dispatch) => {
  dispatch({
    type: UPDATE_USER_SUCCESS,
    payload: updatedData
  })
}
