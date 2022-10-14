import React from 'react'
import PropTypes from 'prop-types'

class ExternalLink extends React.Component {
  render () {
    const linkTitle = `Visit ${this.props.href}`
    return <a href={this.props.href} title={linkTitle}>
      {this.props.children}
    </a>
  }
}

ExternalLink.propTypes = {
  href: PropTypes.string,
  children: PropTypes.string
}

export default ExternalLink
