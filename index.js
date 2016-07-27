import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './containers/App'
import configureStore from './store/configureStore'
import { googleApiClientReady } from './youtube/auth'
import { apiLoaded } from './actions'

export function runGoogleApiClientReady() {
	console.log('run from bundle')
	googleApiClientReady()
}
export function handleApiLoaded(){
	store.dispatch(apiLoaded())
}

const store = configureStore({
	search: {
		isApiLoaded: false
	},
	asyncRequest: { 
		isFetching: false,
		response: {items:[]}
	}
})

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
