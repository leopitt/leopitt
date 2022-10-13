import React from 'react'
import PropTypes from 'prop-types'
import './Row.css'

class Row extends React.Component {
  render () {
    let CustomTag = 'div'

    if (this.props.element !== undefined) {
      CustomTag = `${this.props.element}`
    }

    return <CustomTag className='c-row l-grid l-grid-item--span-full l-grid--gap'>
      {this.props.children}
    </CustomTag>
  }
}

Row.propTypes = {
  element: PropTypes.string,
  children: PropTypes.string
}

export default Row
