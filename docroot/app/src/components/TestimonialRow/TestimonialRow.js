import React from "react";
import ContentRow from '../ContentRow/ContentRow';

const TestimonialRow = ({ type, dates, client, summary, quote, author }) => (
    <ContentRow
        label={dates}
        labelLevel={6}
        content={<>
          <p className="t-heading-4">{client}</p>
          <p className="t-heading-5">{summary}</p>
          <figure>
            <blockquote>&ldquo;{quote}&rdquo;
            </blockquote>
            <figcaption>{author}</figcaption>
          </figure>
        </>}
    />
)

export default TestimonialRow