import PropTypes from "prop-types";
import React from "react";
import './Row.css';

const Row = ({ children, label }) => (
    <div className="l-grid l-grid-item-span-full c-row">
      {children}
    </div>
)

Row.propTypes = {
  label: PropTypes.string,
}

export default Row