import expect from 'expect'
import { search, asyncRequest } from '../../reducers'
import {
  API_LOADED, RESET,
  REQUEST, RECEIVE
} from '../../actions'

const dummy_response = {foo:'bar'}
const dummy_timestamp = 12345


describe('search reducer', () => {
  it('should handle initial state', () => {
    expect(
      search(undefined, {})
    ).toEqual({isApiLoaded: false})
  })

  it('should handle RECIEVE', () => {
    expect(
      asyncRequest(undefined, {
        type: RECEIVE,
        response: dummy_response,
        receivedAt: dummy_timestamp
      })
    ).toEqual({
        isFetching: false,
        response: dummy_response,
        lastUpdated: dummy_timestamp
    })

  })

})
