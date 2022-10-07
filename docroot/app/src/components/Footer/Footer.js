import React from 'react'
import PropTypes from 'prop-types'
import './Footer.css'

class Footer extends React.Component {
  render () {
    return <footer className='c-footer t-small'>
      {this.props.children}
    </footer>
  }
}

Footer.propTypes = {
  children: PropTypes.string
}

export default Footer
