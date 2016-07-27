// import fetch from 'isomorphic-fetch'
export const API_LOADED = 'API_LOADED'
export const REQUEST = 'REQUEST'
export const RECEIVE = 'RECEIVE'
export const RESET = 'RESET'

export function apiLoaded(){
  return {
    type: API_LOADED
  }
}

export function reset() {
  return {
    type: RESET
  }
}

export function request() {
  return {
    type: REQUEST
  }
}

function receive(response) {
  return {
    type: RECEIVE,
    response: response,
    receivedAt: Date.now()
  }
}

export function ytsearch(searchText) {
  return dispatch => {
      dispatch(request())
      var req = gapi.client.youtube.search.list({
        q: searchText,
        part: 'snippet'
      });

      return req.execute(function(response) {
        //var str = JSON.stringify(response.result);
        dispatch(receive(response))
      });
    }
}
