import { ADD_COMMENT, ADD_QUOTE, LIKE_QUOTE, REPORT_QUOTE, UNLIKE_QUOTE, UPDATE_QUOTE } from '../actionTypes'

const initialState = {
  quotes: [
    {
      quoteText: 'Do Good, Have Good!!',
      tags: 'nature',
      id: 1,
      createdAt: '2023-12-19T07:37:21.616Z',
      likes: [{ id: 1, user_id: 1 }],
      unlikes: [{ id: 2, user_id: 2 }],
      comments: [{ id: 1, user_id: 2, description: 'emotional quote' }],
      authorName: 'Sufyan',
      reports: [{ id: 1, user_id: 1, description: 'Hurting Quote' }]
    },
    {
      quoteText: 'Jack of All, Master of none!!',
      tags: 'technology',
      id: 2,
      createdAt: '2023-12-18T07:37:21.616Z',
      likes: [{ id: 1, user_id: 2 }],
      unlikes: [{ id: 2, user_id: 2 }],
      comments: [{ id: 1, user_id: 2, description: 'good quote' }],
      authorName: 'Sufyan1',
      reports: [{ id: 1, user_id: 1, description: 'Dangerous Quote' }]
    }
  ]
}

const quoteReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_QUOTE:
      state.quotes.push({ ...action.payload, id: state.quotes.length + 1 })
      return {
        ...state,
        quotes: state.quotes
      }

    case UPDATE_QUOTE:
      return {
        ...state,
        quotes: state.quotes.map((quote) => (quote.id == action.payload.quote_id ? action.payload.updatedQuote : quote))
      }

    case LIKE_QUOTE:
      return handleLike(state, action.payload)

    case UNLIKE_QUOTE:
      return handleUnlike(state, action.payload)

    case ADD_COMMENT:
      return {
        ...state,
        quotes: state.quotes.map((quote) =>
          quote.id == action.payload.quoteId
            ? {
                ...quote,
                comments: [
                  ...quote.comments,
                  {
                    id: quote.comments.length + 1,
                    description: action.payload.comment,
                    user_id: action.payload.userId
                  }
                ]
              }
            : quote
        )
      }
    case REPORT_QUOTE:
      return {
        ...state,
        quotes: state.quotes.map((quote) =>
          quote.id == action.payload.quoteId
            ? {
                ...quote,
                reports: [
                  ...quote.reports,
                  {
                    id: quote.reports.length + 1,
                    description: action.payload.description,
                    user_id: action.payload.userId
                  }
                ]
              }
            : quote
        )
      }

    default:
      return state
  }
}

export default quoteReducer

const handleLike = (state, { quoteId, loggedInUserId }) => {
  const updatedQuotes = state.quotes.map((quote) => {
    if (quote.id == quoteId) {
      const unlikedIndex = quote.unlikes.findIndex((unlikedQuote) => unlikedQuote.user_id == loggedInUserId)
      if (unlikedIndex !== -1) {
        quote.unlikes.splice(unlikedIndex)
      }
      return {
        ...quote,
        likes: [...quote.likes, { id: quote.likes.length + 1, user_id: loggedInUserId }]
      }
    }
    return quote
  })
  return {
    ...state,
    quotes: updatedQuotes
  }
}
const handleUnlike = (state, { quoteId, loggedInUserId }) => {
  const updatedQuotes = state.quotes.map((quote) => {
    if (quote.id == quoteId) {
      const likedIndex = quote.likes.findIndex((liked) => liked.user_id == loggedInUserId)
      if (likedIndex !== -1) {
        quote.likes.splice(likedIndex)
      }
      return {
        ...quote,
        unlikes: [...quote.unlikes, { id: quote.unlikes.length + 1, user_id: loggedInUserId }]
      }
    }
    return quote
  })
  return {
    ...state,
    quotes: updatedQuotes
  }
}
