import { reducer as toastrReducer } from 'react-redux-toastr'
import { combineReducers } from 'redux'

import quoteReducer from './quoteReducer'
import userReducer from './userReducer'

const rootReducer = combineReducers({
  toastr: toastrReducer,
  user: userReducer,
  quote: quoteReducer
  // Other reducers can be added here
})

export default rootReducer
