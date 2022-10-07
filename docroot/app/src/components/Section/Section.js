import React from 'react'
import PropTypes from 'prop-types'
import './Section.css'

const Section = ({ children }) => (
    <div className='l-grid c-section'>
        <section className='l-grid l-grid-item-span-full'>
            {children}
        </section>
    </div>
)

Section.propTypes = {
  children: PropTypes.string
}

export default Section
