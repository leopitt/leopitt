import React from 'react'
import PropTypes from 'prop-types'

class Link extends React.Component {
  render () {
    return <a href={this.props.href} title={this.props.title}>
      {this.props.children}
    </a>
  }
}

Link.propTypes = {
  href: PropTypes.string,
  children: PropTypes.string,
  title: PropTypes.string
}

export default Link
