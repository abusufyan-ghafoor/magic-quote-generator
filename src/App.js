import React from 'react'
import { Provider } from 'react-redux'
import ReduxToastr from 'react-redux-toastr'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Header from './Header/Header'
import HomePage from './Home/Home'
import LoginPage from './LoginPage/LoginPage'
import MyQuotes from './MyQuotes/MyQuotes'
import QuoteDetails from './QuoteDetails/QuoteDetails'
import QuoteForm from './QuoteGenerate/CreateQuote'
import { store } from './redux/store'
import SignUpForm from './SignUpForm/SignUpForm'
import UserProfile from './UserProfile/userProfile'

import './App.css'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Header />
          <Routes>
            <Route path="/" exact element={<HomePage />} />
            <Route path="/signup" element={<SignUpForm />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/profile" element={<UserProfile />} />
            <Route path="/profile/:user_id/edit" element={<SignUpForm />} />
            <Route path="/quote/new" element={<QuoteForm />} />
            <Route path="/myquotes" element={<MyQuotes />} />
            <Route path="/quotes/:quote_id" element={<QuoteDetails />} />
            <Route path="/quotes/:quote_id/edit" element={<QuoteForm />} />
          </Routes>
        </div>
      </Router>
      <ReduxToastr
        timeOut={5000}
        newestOnTop={true}
        position="top-right"
        transitionIn="bounceIn"
        transitionOut="bounceOut"
        progressBar
        closeOnToastrClick
      />
    </Provider>
  )
}

export default App
