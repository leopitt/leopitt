import React from 'react'
import PropTypes from 'prop-types'
import './Title.css'

class Title extends React.Component {
  render () {
    let CustomTag = 'h1'
    const wrapperClasses = 'l-grid l-grid--gap'
    let title1Classes = 'c-title c-title__primary t-heading-1 t-uppercase'
    let title2Classes = 'c-title t-heading-2 t-uppercase'
    let title1Output = ''
    let title2Output = ''

    if (this.props.level !== undefined) {
      CustomTag = `h${this.props.level}`
    }

    // If there is only one title, we don't need the __primary class.
    if (this.props.title1 === undefined || this.props.title2 === undefined) {
      title1Classes = 'c-title t-heading-1 t-uppercase'

      // If we only have title2, then we need to position title2 in the second column.
      if (this.props.title2) {
        title2Classes += ' l-grid-item--second'
      }

      if (this.props.title1) {
        title1Classes += ' l-grid-item--second'
      }
    }

    if (this.props.title1) {
      title1Output = <span className={title1Classes}>{this.props.title1}</span>
    }

    if (this.props.title2) {
      title2Output = <span className={title2Classes}>{this.props.title2}</span>
    }

    return <CustomTag className={wrapperClasses}>
      {title1Output}
      {title2Output}
    </CustomTag>
  }
}

Title.propTypes = {
  title1: PropTypes.string,
  title2: PropTypes.string,
  level: PropTypes.number
}

export default Title
