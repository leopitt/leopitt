import React from 'react'
import PropTypes from 'prop-types'
import Title from '../Title/Title'
import './Header.css'

class Header extends React.Component {
  render () {
    return <header className={'c-header l-grid l-grid--gap'}>
      <Title level="1" type="primary">{this.props.title1}</Title>
      <Title level="2">{this.props.title2}</Title>
    </header>
  }
}

Header.propTypes = {
  title1: PropTypes.string,
  title2: PropTypes.string
}

export default Header
