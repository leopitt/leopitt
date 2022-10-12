import React from 'react'
import PropTypes from 'prop-types'
import Title from '../Title/Title'

class Header extends React.Component {
  render () {
    return <header className={'l-section'}>
      <Title
          title1={this.props.title1}
          title2={this.props.title2}
      />
    </header>
  }
}

Header.propTypes = {
  title1: PropTypes.string,
  title2: PropTypes.string
}

export default Header
