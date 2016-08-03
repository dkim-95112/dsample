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
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        this.props.onSearch(input.value)
      }}>

        <div className="mdl-textfield mdl-js-textfield mdl-textfiled--expandable mdl-textfield--floating-label">
          <label className="mdl-button mdl-js-button mdl-button--icon" htmlFor="my-input">
            <i className="material-icons">search</i>
          </label>
          <div className="mdl-textfield__expandable-holder">
            <input className="mdl-textfield__input" type="text" id="my-input" 
              ref={node => {
                input = node
              }} 
              disabled={!this.props.isApiLoaded}
            />
            <label className="mdl-textfield__label" htmlFor="my-input">
              Enter YouTube Search...
            </label>
          </div>
        </div>
      </form>
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
