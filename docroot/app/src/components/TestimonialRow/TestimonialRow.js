import React from 'react'
import PropTypes from 'prop-types'
import ContentRow from '../ContentRow/ContentRow'

class TestimonialRow extends React.Component {
  render () {
    return <ContentRow
      label={this.props.dates}
      labelLevel={6}
      content={<>
        <h4 className='t-heading-4'>{this.props.client}</h4>
        <p className='t-heading-5'>{this.props.summary}</p>
        <figure>
          <blockquote>&ldquo;{this.props.quote}&rdquo;
          </blockquote>
          <figcaption>{this.props.author}</figcaption>
        </figure>
      </>}
    />
  }
}

TestimonialRow.propTypes = {
  type: PropTypes.string,
  dates: PropTypes.string,
  client: PropTypes.string,
  summary: PropTypes.string,
  quote: PropTypes.string,
  author: PropTypes.string
}

export default TestimonialRow
