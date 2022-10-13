import React from 'react'
import PropTypes from 'prop-types'
import Row from '../Row/Row'

class TitleRow extends React.Component {
  render () {
    return <Row className={'t-margin-0'}>
      <h2 className='l-grid-item--second t-heading-3 t-uppercase'>{this.props.children}</h2>
    </Row>
  }
}

TitleRow.propTypes = {
  children: PropTypes.string
}

export default TitleRow
