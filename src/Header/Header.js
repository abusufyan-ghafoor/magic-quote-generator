import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

import { logout } from '../redux/Actions/userAction'

import './style.css'

const Header = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn)

  const handeleClick = () => {
    dispatch(logout())
    navigate('/')
  }

  return (
    <div className="navbar">
      <div className="navbar-left">
        <Link to="/" className="">
          <img src="QuoteLogo.png" alt="Logo" className="logo" />
        </Link>
      </div>
      <div className="navbar-right">
        <ul className="nav-list">
          {isLoggedIn ? (
            <>
              <li className="nav-button">
                <Link to="/profile" className="nav-links nav-links-1">
                  Profile
                </Link>
              </li>
              <li className="nav-button" onClick={handeleClick}>
                <Link href="/logout" className="nav-links nav-links-1">
                  Logout
                </Link>
              </li>
              <li className="nav-button">
                <Link to="/myquotes" className="nav-links nav-links-1">
                  My Quotes
                </Link>
              </li>
              <li className="nav-button">
                <Link to="/quote/new" className="nav-links nav-links-1">
                  Create Quote
                </Link>
              </li>
            </>
          ) : (
            <>
              <li className="nav-button">
                <Link to="/signup" className="nav-links nav-links-1">
                  SignUp
                </Link>
              </li>
              <li className="nav-button">
                <Link to="/login" className="nav-links">
                  Login
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  )
}

export default Header
