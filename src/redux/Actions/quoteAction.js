// quoteActions.js
import { ADD_COMMENT, ADD_QUOTE, LIKE_QUOTE, REPORT_QUOTE, UNLIKE_QUOTE, UPDATE_QUOTE } from '../actionTypes'

export const addQuote = (quote) => (dispatch) => {
  dispatch({
    type: ADD_QUOTE,
    payload: quote
  })
}
export const updateQuote = (quote_id, updatedQuote) => (dispatch) => {
  dispatch({
    type: UPDATE_QUOTE,
    payload: { quote_id, updatedQuote }
  })
}

export const likeQuote = (quoteId, loggedInUserId) => (dispatch) => {
  dispatch({
    type: LIKE_QUOTE,
    payload: { quoteId, loggedInUserId }
  })
}

export const unlikeQuote = (quoteId, loggedInUserId) => (dispatch) => {
  dispatch({
    type: UNLIKE_QUOTE,
    payload: { quoteId, loggedInUserId }
  })
}

export const addComment = (quoteId, comment, userId) => (dispatch) => {
  dispatch({
    type: ADD_COMMENT,
    payload: { quoteId, comment, userId }
  })
}

export const reportQuote = (quoteId, description, userId) => (dispatch) => {
  dispatch({
    type: REPORT_QUOTE,
    payload: { quoteId, description, userId }
  })
}

export const logout = () => (dispatch) => {
  dispatch({
    type: LOGOUT,
    payload: 'Logout Success'
  })
}
