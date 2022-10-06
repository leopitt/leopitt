import Row from '../Row/Row';
import PropTypes from "prop-types";
import React from "react";

const TestimonialRow = ({ type, dates, client, summary, quote, author }) => (
    <Row>
        <h3 className="c-row__label c-row__label--offset t-heading-6 t-uppercase">{type}<br />
            {dates}</h3>
        <div className="c-row__content">
            <p className="t-heading-4">{client}</p>
            <p className="t-heading-5">{summary}</p>
            <figure>
                <blockquote>&ldquo;{quote}&rdquo;
                </blockquote>
                <figcaption>{author}</figcaption>
            </figure>
        </div>
    </Row>
)

TestimonialRow.propTypes = {
    type: PropTypes.string,
    dates: PropTypes.string,
    client: PropTypes.string,
    summary: PropTypes.string,
    quote: PropTypes.string,
    author: PropTypes.string,
}

export default TestimonialRow