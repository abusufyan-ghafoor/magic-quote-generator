// QuoteDetails.js
import React from 'react'
import { useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'

import './style.css'

const QuoteDetails = () => {
  const { quote_id } = useParams()
  const quote = useSelector((state) => state.quote.quotes.find((q) => q.id === Number(quote_id)))
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric'
  }
  const dateTimeFormat = new Intl.DateTimeFormat('en-US', options)

  return (
    <div className="quote-details-container">
      <h2 className="quote-details-header">Quote Details</h2>
      {quote ? (
        <>
          <p className="quote-details-info">Author: {quote.authorName}</p>
          <p className="quote-details-info">Quote: {quote.quoteText}</p>
          <p className="quote-details-info">Created At: {dateTimeFormat.format(quote.createdAt)}</p>
          <p className="quote-details-info">Likes: {quote.likes}</p>
          <p className="quote-details-info">Unlikes: {quote.unlikes}</p>
          <p className="quote-details-info">Comments: {quote.comments.length}</p>
          <p className="quote-details-info">Reports: {quote.reports}</p>
          <Link to={`/quotes/${quote.id}/edit`}>
            <button className="quote-details-button">Edit</button>
          </Link>
        </>
      ) : (
        <p>Quote not found.</p>
      )}
    </div>
  )
}

export default QuoteDetails
