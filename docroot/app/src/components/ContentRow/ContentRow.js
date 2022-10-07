import React from "react";
import Row from '../Row/Row';

class ContentRow extends React.Component {
  render() {
    let labelLevel = 4;

    if (this.props.labelLevel !== undefined) {
      labelLevel = this.props.labelLevel;
    }

    let labelClasses = `c-row__label c-row__label--offset t-heading-${labelLevel} t-uppercase`;

    return <Row>
      <h3 className={labelClasses}>
        {this.props.label}
      </h3>
      <div className="c-row__content">
        {this.props.content}
      </div>
    </Row>;
  }
}

export default ContentRow