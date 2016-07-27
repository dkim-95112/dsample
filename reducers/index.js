import { combineReducers } from 'redux'
import {
  API_LOADED, INVALIDATE,
  REQUEST, RECEIVE
} from '../actions'

function search(state = {
  isApiLoaded: false
}, action) {
  switch (action.type) {
    case API_LOADED:
      return Object.assign({}, state, {
        isApiLoaded: true
      })
    default:
      return state
  }
}

function asyncRequest(state = {
  isFetching: false,
  didInvalidate: false,
  results: {}
}, action) {
  switch (action.type) {
    case INVALIDATE:
      return Object.assign({}, state, {
        didInvalidate: true
      })
    case REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      })
    case RECEIVE:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        response: action.response,
        lastUpdated: action.receivedAt
      })
    default:
      return state
  }
}

const rootReducer = combineReducers({
  search,
  asyncRequest
})

export default rootReducer
