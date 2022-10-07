import React from "react";
import Row from "../Row/Row";

class TitleRow extends React.Component {
  render() {
    return <Row>
      <h2 className="l-grid-item-second t-heading-3 t-uppercase">{this.props.children}</h2>
    </Row>;
  }
}

export default TitleRow