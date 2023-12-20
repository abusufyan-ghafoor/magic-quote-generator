import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { addComment, likeQuote, reportQuote, unlikeQuote } from '../redux/Actions/quoteAction'

import './style.css'

const HomePage = () => {
  const [comment, setComment] = useState('')
  const quotes = useSelector((state) => state.quote.quotes)
  const loggedInUser = useSelector((state) =>
    state.user.users.find((user) => user.userName == state.user.currentUser.username)
  )
  const dispatch = useDispatch()

  const hasLiked = (quoteId) => {
    return quotes.find((quote) => quote.id == quoteId)?.likes.some((like) => like.user_id == loggedInUser.id)
  }

  const hasUnliked = (quoteId) => {
    return quotes.find((quote) => quote.id == quoteId)?.unlikes.some((unlike) => unlike.user_id == loggedInUser.id)
  }

  const handleLike = (quoteId) => {
    dispatch(likeQuote(quoteId, loggedInUser.id))
  }

  const handleDislike = (quoteId) => {
    dispatch(unlikeQuote(quoteId, loggedInUser.id))
  }

  const handleComment = (quoteId) => {
    dispatch(addComment(quoteId, comment, loggedInUser.id))
    setComment('')
  }

  const handleReport = (quoteId) => {
    const description = prompt('Enter a description for the report:')
    if (description) {
      dispatch(reportQuote(quoteId, description, loggedInUser.id))
    }
  }

  return (
    <div className="container">
      {quotes.map((quote) => (
        <div key={quote.id} className="quote-container box">
          <h3>{quote.authorName}</h3>
          <h2>{quote.quoteText}</h2>
          <p>{`Created At: ${quote.createdAt}`}</p>
          <p>{`Tags: ${quote.tags}`}</p>
          <div className="quote-btn">
            <button
              onClick={() => handleLike(quote.id)}
              disabled={!loggedInUser || (loggedInUser && hasLiked(quote.id))}>
              Like
            </button>
            <span>{quote.likes.length}</span>
          </div>
          <div className="quote-btn">
            <button
              onClick={() => handleDislike(quote.id)}
              disabled={!loggedInUser || (loggedInUser && hasUnliked(quote.id))}>
              Dislike
            </button>
            <span>{quote.unlikes.length}</span>
          </div>
          <div className="quote-btn comment-btn">
            <input
              type="text"
              placeholder="Add a comment"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
            <button onClick={() => handleComment(quote.id)}>Comment {quote.comments.length}</button>
          </div>
          <div className="quote-btn">
            <button onClick={() => handleReport(quote.id)}>Report</button>
            <span>{quote.reports.length}</span>
          </div>
        </div>
      ))}
    </div>
  )
}

export default HomePage
