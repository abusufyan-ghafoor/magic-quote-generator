// QuoteForm.js
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom'

import { addQuote, updateQuote } from '../redux/Actions/quoteAction'

import './style.css'

const QuoteForm = () => {
  const { quote_id } = useParams()
  const navigate = useNavigate()
  const currentUser = useSelector((state) => state.user.currentUser)
  const quotes = useSelector((state) => state.quote.quotes)
  const dispatch = useDispatch()
  const [quoteData, setQuoteData] = useState({
    quoteText: '',
    tags: '',
    id: ''
  })

  useEffect(() => {
    if (quote_id) {
      const existingQuote = quotes.find((quote) => quote.id == quote_id)
      if (existingQuote) {
        setQuoteData({
          quoteText: existingQuote.quoteText,
          tags: existingQuote.tags,
          id: existingQuote.id
        })
      }
    }
  }, [quote_id, quotes])

  const handleChange = (e) => {
    const { name, value } = e.target
    setQuoteData({ ...quoteData, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newQuote = {
      ...quoteData,
      createdAt: new Date(),
      likes: 0,
      unlikes: 0,
      comments: [],
      authorName: currentUser.username
    }
    if (quote_id) {
      dispatch(updateQuote(quote_id, newQuote))
    } else {
      dispatch(addQuote(newQuote))
    }
    navigate('/myquotes')
    setQuoteData({ quoteText: '', tags: '' })
  }

  return (
    <div className="quote-form-container">
      <h2>{quote_id ? 'Edit Quote' : 'Create a Quote'}</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Quote:
          <textarea name="quoteText" value={quoteData.quoteText} onChange={handleChange} required></textarea>
        </label>
        <label>
          Tags:
          <input type="text" name="tags" value={quoteData.tags} onChange={handleChange} />
        </label>
        <button type="submit">{quote_id ? 'Update Quote' : 'Submit Quote'}</button>
      </form>
    </div>
  )
}

export default QuoteForm
