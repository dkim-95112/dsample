import { combineReducers } from 'redux'
import {
  API_LOADED, RESET,
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
  response: {}
}, action) {
  switch (action.type) {
    case RESET:
      return Object.assign({}, state, {
        response: {items: []}
      })
    case REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
      })
    case RECEIVE:
      return Object.assign({}, state, {
        isFetching: false,
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
