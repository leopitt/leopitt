import React from 'react'
import PropTypes from 'prop-types'
import Row from '../Row/Row'

class ContentRow extends React.Component {
  render () {
    let labelLevel = 4

    if (this.props.labelLevel !== undefined) {
      labelLevel = this.props.labelLevel
    }

    const labelClasses = `c-row__label c-row__label--offset t-heading-${labelLevel} t-uppercase`

    return <Row>
      <h3 className={labelClasses}>
        {this.props.label}
      </h3>
      <div className="c-row__content">
        {this.props.content}
      </div>
    </Row>
  }
}

ContentRow.propTypes = {
  labelLevel: PropTypes.string,
  label: PropTypes.string,
  content: PropTypes.string
}

export default ContentRow
