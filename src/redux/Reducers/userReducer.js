// redux/reducers/userReducer.js

import { LOGIN_FAILURE, LOGIN_SUCCESS, LOGOUT, SIGNUP_SUCCESS, UPDATE_USER_SUCCESS } from '../actionTypes'

const initialState = {
  users: [
    {
      firstName: 'dscsd',
      lastName: 'Abu Sufyan',
      userName: 'Sufyan',
      gender: 'female',
      image:
        'https://images.unsplash.com/photo-1695653423053-64e76a128f1c?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      email: 'sufyanabu91@gmail.com',
      password: '111111',
      id: 1
    },
    {
      firstName: 'dscsd',
      lastName: 'Sufi',
      userName: 'Sufyan1',
      gender: 'male',
      image:
        'https://images.unsplash.com/photo-1702783283086-6bcef8be670c?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      email: 'suf@gmail.com',
      password: '111111',
      id: 2
    },
    {
      firstName: 'dscsd',
      lastName: 'usman',
      userName: 'usman',
      gender: 'male',
      image:
        'https://images.unsplash.com/photo-1702783283086-6bcef8be670c?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      email: 'usman@gmail.com',
      password: '111111',
      id: 3
    }
  ],
  currentUser: [],
  isLoggedIn: false
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP_SUCCESS: {
      state.users.push(action.payload)
      return {
        ...state,
        users: state.users
      }
    }
    case LOGIN_SUCCESS: {
      return {
        ...state,
        currentUser: action.payload,
        isLoggedIn: true
      }
    }
    case LOGIN_FAILURE: {
      return {
        ...state,
        isLoggedIn: false
      }
    }
    case LOGOUT: {
      return {
        ...state,
        isLoggedIn: false,
        currentUser: []
      }
    }
    case UPDATE_USER_SUCCESS: {
      const updatedUser = action.payload
      const updatedUsers = state.users.map((user) => (user.id === updatedUser.id ? updatedUser : user))
      return {
        ...state,
        users: updatedUsers
      }
    }

    default:
      return state
  }
}

export default userReducer
