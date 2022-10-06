import PropTypes from "prop-types";
import React from "react";
import './Row.css';

class Row extends React.Component {
  render() {
    let CustomTag = 'div';

    if (this.props.element !== undefined) {
      CustomTag = `${this.props.element}`;
    }

    return <CustomTag className="l-grid l-grid-item-span-full l-grid--gap c-row">
      {this.props.children}
    </CustomTag>;
  }
}

Row.propTypes = {
  element: PropTypes.string,
}

export default Row