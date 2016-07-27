import React, { PropTypes, Component } from 'react'

export default class Items extends Component {
  render() {
    return (
      <ul>
        {this.props.items.map((item, i) =>
          <li key={i}>{item.snippet.title}</li>
        )}
      </ul>
    )
  }
}

Items.propTypes = {
  items: PropTypes.array.isRequired
}
