import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import './styles.css'

const UserProfile = () => {
  const navigate = useNavigate()
  const users = useSelector((state) => state.user.users)
  const currentUser = useSelector((state) => state.user.currentUser)
  const user = users.find((user) => user.userName === currentUser.username && user.password === currentUser.password)

  const { firstName, lastName, userName, gender, image, email } = user
  const handleEditClick = () => {
    navigate(`/profile/${user.id}/edit`, { state: { user, mode: 'edit' } })
  }

  return (
    <div className="profile-container">
      <div className="profile-header">
        <h2>User Profile</h2>
      </div>
      <div className="profile-content">
        <div className="profile-image">
          <img src={image} alt={`${userName}'s profile`} />
        </div>
        <div className="profile-details">
          <div className="profile-field">
            <strong>First Name:</strong> {firstName}
          </div>
          <div className="profile-field">
            <strong>Last Name:</strong> {lastName}
          </div>
          <div className="profile-field">
            <strong>User Name:</strong> {userName}
          </div>
          <div className="profile-field">
            <strong>Gender:</strong> {gender}
          </div>
          <div className="profile-field">
            <strong>Email:</strong> {email}
          </div>
          <div className="profile-footer">
            <button onClick={handleEditClick}>Edit Profile</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserProfile
