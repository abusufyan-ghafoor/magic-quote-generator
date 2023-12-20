import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toastr } from 'react-redux-toastr'
import { useNavigate } from 'react-router-dom'

import { login } from '../redux/Actions/userAction'

import './style.css'

const LoginPage = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const users = useSelector((state) => state.user.users)
  const [formData, setFormData] = useState({ username: '', password: '' })

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const userExists = users.find((user) => user.userName === formData.username && user.password === formData.password)
    if (userExists) {
      dispatch(login(formData, 'success'))
      toastr.success('Congratulations', 'Login Successfully')
      navigate('/')
    } else {
      toastr.error('Sorry', 'Login Failed')
    }
  }

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" name="username" value={formData.username} onChange={handleChange} required />
        </label>
        <label>
          Password:
          <input type="password" name="password" value={formData.password} onChange={handleChange} required />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default LoginPage
