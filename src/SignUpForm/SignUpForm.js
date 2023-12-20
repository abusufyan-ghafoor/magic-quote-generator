import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useLocation, useNavigate, useParams } from 'react-router-dom'

import { signup, userEdit } from '../redux/Actions/userAction'

import './style.css'

const SignUpForm = () => {
  const { user_id } = useParams()
  const location = useLocation()
  const { user, mode } = location.state || {}
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    userName: '',
    gender: '',
    image: '',
    email: '',
    password: ''
  })
  const userFields = { firstName: 'First Name', lastName: 'Last Name', userName: 'User Name', image: 'Image URL' }

  useEffect(() => {
    if (mode === 'edit' && user) {
      setFormData(user)
    }
  }, [mode, user])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (mode === 'edit') {
      dispatch(userEdit(formData))
      navigate('/profile')
    } else {
      dispatch(signup(formData))
      navigate('/login')
    }
  }

  return (
    <div className="signup-container">
      <h2>User Sign Up</h2>
      <form onSubmit={handleSubmit}>
        {Object.entries(userFields).map(([fieldName, label]) => (
          <div key={fieldName}>
            <label>
              {label}:
              <input type="text" name={fieldName} value={formData[fieldName]} onChange={handleChange} />
            </label>
            <br />
          </div>
        ))}
        <br />
        <label>
          Gender:
          <select name="gender" value={formData.gender} onChange={handleChange}>
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </label>
        <br />

        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </label>
        <br />

        <label>
          Password:
          <input type="password" name="password" value={formData.password} onChange={handleChange} required />
        </label>
        <br />

        <button type="submit">Sign Up</button>
      </form>
    </div>
  )
}

export default SignUpForm
