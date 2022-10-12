import React from 'react'
import PropTypes from 'prop-types'
import Link from '../Link/Link'

class ExternalLink extends React.Component {
  render () {
    const linkTitle = `Visit ${this.props.href}`
    return <Link href={this.props.href} title={linkTitle}>
      {this.props.children}
    </Link>
  }
}

ExternalLink.propTypes = {
  href: PropTypes.string,
  children: PropTypes.string
}

export default ExternalLink
