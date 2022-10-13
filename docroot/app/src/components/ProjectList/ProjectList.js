import React from 'react'
import PropTypes from 'prop-types'
import './ProjectList.css'

class ProjectList extends React.Component {
  render () {
    const itemList = []

    this.props.projects.forEach(item => {
      itemList.push(<li className={'c-project-list__item'}>{item}</li>)
    })

    return <div className={'c-project-list'}>
      <h5 className={'t-heading-6 t-small'}>Projects include...</h5>
      <ul className={'c-project-list__list t-small'}>
        {itemList}
      </ul>
    </div>
  }
}

ProjectList.propTypes = {
  projects: PropTypes.array
}

export default ProjectList
