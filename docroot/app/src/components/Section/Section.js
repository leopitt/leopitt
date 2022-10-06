import PropTypes from "prop-types";
import React from "react";
import Row from "../Row/Row";

const Section = ({ children }) => (
    <div className="l-grid">
        <section className="l-grid l-grid-item-span-full">
            {children}
        </section>
    </div>
)

export default Section