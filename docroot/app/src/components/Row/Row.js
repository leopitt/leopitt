import React from 'react'
import PropTypes from 'prop-types'
import './Row.css'

class Row extends React.Component {
  render () {
    let CustomTag = 'div'
    const classes = [
      'c-row',
      'l-grid',
      'l-grid-item--span-full',
      'l-grid--gap'
    ]

    if (this.props.element !== undefined) {
      CustomTag = `${this.props.element}`
    }

    if (this.props.className !== undefined) {
      classes.push(this.props.className)
    }

    return <CustomTag className={classes.join(' ')}>
      {this.props.children}
    </CustomTag>
  }
}

Row.propTypes = {
  element: PropTypes.string,
  children: PropTypes.string,
  className: PropTypes.string
}

export default Row
