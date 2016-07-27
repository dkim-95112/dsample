// import fetch from 'isomorphic-fetch'
export const API_LOADED = 'API_LOADED'
export const REQUEST = 'REQUEST'
export const RECEIVE = 'RECEIVE'
export const INVALIDATE = 'INVALIDATE'

export function apiLoaded(){
  return {
    type: API_LOADED
  }
}

export function invalidate() {
  return {
    type: INVALIDATE
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
    // return dispatch => {
    //   dispatch(requestPosts(reddit))
    //   return fetch(`https://www.reddit.com/r/${reddit}.json`)
    //     .then(response => response.json())
    //     .then(json => dispatch(receivePosts(reddit, json)))
    // }
}

// function shouldFetchPosts(state, reddit) {
//   const posts = state.postsByReddit[reddit]
//   if (!posts) {
//     return true
//   }
//   if (posts.isFetching) {
//     return false
//   }
//   return posts.didInvalidate
// }

// export function fetchPostsIfNeeded(reddit) {
//   return (dispatch, getState) => {
//     if (shouldFetchPosts(getState(), reddit)) {
//       return dispatch(fetchPosts(reddit))
//     }
//   }
// }
