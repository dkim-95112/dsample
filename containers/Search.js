import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { request } from '../actions'

class Search extends Component {
  constructor(props) {
    super(props)
  }

  render(){
    let input
    return (
      <div>
        <form onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          this.props.onSearch(input.value)
        }}>
          <input ref={node => {
            input = node
          }} />
          <button disabled={!this.props.isApiLoaded} type="submit">
            Search
          </button>
        </form>
      </div>
    )
  }
}

Search.propTypes = {
  isApiLoaded: PropTypes.bool.isRequired,
}

function mapStateToProps(state) {
  const { search } = state

  return {
    isApiLoaded: search.isApiLoaded
  }
}

Search = connect(mapStateToProps)(Search)

export default Search
