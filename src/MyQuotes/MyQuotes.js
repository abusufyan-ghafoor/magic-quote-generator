import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import './style.css'

const MyQuotes = () => {
  const currentUser = useSelector((state) => state.user.currentUser)
  const userQuotes = useSelector((state) => state.quote.quotes.filter((q) => q.authorName === currentUser.username))
  return (
    <div className="my-quotes-container">
      <h2 className="my-quotes-header">My Quotes</h2>
      {userQuotes.length > 0 ? (
        <ul className="my-quotes-list">
          {userQuotes.map((quote) => (
            <li key={quote.id} className="my-quote-item">
              <Link to={`/quotes/${quote.id}`} className="my-quote-link">
                {quote.quoteText}
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>No quotes found.</p>
      )}
    </div>
  )
}

export default MyQuotes
