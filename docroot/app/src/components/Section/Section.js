import React from "react";
import './Section.css';

const Section = ({ children }) => (
    <div className="l-grid c-section">
        <section className="l-grid l-grid-item-span-full">
            {children}
        </section>
    </div>
)

export default Section