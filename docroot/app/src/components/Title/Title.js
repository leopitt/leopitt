import PropTypes from "prop-types";
import React from "react";
import './Title.css';

const Title = ({ primary, secondary }) => (
  <h1>
    <span className="c-title__primary t-heading-1 t-uppercase">{primary} </span><span className="t-heading-2 t-uppercase">{secondary}</span>
  </h1>
)

Title.propTypes = {
  primary: PropTypes.string,
  secondary: PropTypes.string,
}

export default Title