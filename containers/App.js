import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { apiLoaded, ytsearch, reset } from '../actions'
// import Picker from '../components/Picker'
import Search from './Search'
import Items from '../components/Items'

class App extends Component {
  constructor(props) {
    super(props)
    this.handleSearch = this.handleSearch.bind(this)
    this.handleResetClick = this.handleResetClick.bind(this)
  }

  handleSearch(searchText) {
    this.props.dispatch(ytsearch(searchText))
  }

  handleResetClick(e) {
    e.preventDefault()

    const { dispatch } = this.props
    dispatch(reset())
  }

  render() {
    const { isFetching, items } = this.props
    const isEmpty = items.length === 0
    return (
      <div className="mdl-grid">
        <div className="mdl-cell mdl-cell--3-col">
            <Search onSearch={this.handleSearch} />

            {!isFetching &&
              <button
                 onClick={this.handleResetClick}
                 className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent"
                 >
                Reset
              </button>
            }
        </div>

        <div className="mdl-cell mdl-cell--9-col">
            {isEmpty
              ? (isFetching ? <h2>Loading...</h2> : <h2>Empty.</h2>)
              : <div style={{ opacity: isFetching ? 0.5 : 1 }}>
                  <Items items={items} />
                </div>
            }
        </div>
      </div>
    )
  }
}

App.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  const { asyncRequest } = state

  return {
    isFetching: asyncRequest.isFetching,
    items: asyncRequest.response.items
  }
}

export default connect(mapStateToProps)(App)
