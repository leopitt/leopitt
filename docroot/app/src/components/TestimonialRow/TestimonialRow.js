import React from 'react'
import PropTypes from 'prop-types'
import ContentRow from '../ContentRow/ContentRow'

const TestimonialRow = ({ type, dates, client, summary, quote, author }) => (
    <ContentRow
        label={dates}
        labelLevel={6}
        content={<>
          <p className='t-heading-4'>{client}</p>
          <p className='t-heading-5'>{summary}</p>
          <figure>
            <blockquote>&ldquo;{quote}&rdquo;
            </blockquote>
            <figcaption>{author}</figcaption>
          </figure>
        </>}
    />
)

TestimonialRow.propTypes = {
  type: PropTypes.string,
  dates: PropTypes.string,
  client: PropTypes.string,
  summary: PropTypes.string,
  quote: PropTypes.string,
  author: PropTypes.string
}

export default TestimonialRow
