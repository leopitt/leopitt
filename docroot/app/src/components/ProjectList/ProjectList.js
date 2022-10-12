import React from 'react'
import PropTypes from 'prop-types'

class ProjectList extends React.Component {
  render () {
    const itemList = []

    this.props.projects.forEach(item => {
      itemList.push(<li>{item}</li>)
    })

    return <>
      <h5 className={'t-heading-6'}>Projects</h5>
      <ul>
        {itemList}
      </ul>
    </>
  }
}

ProjectList.propTypes = {
  projects: PropTypes.array
}

export default ProjectList
