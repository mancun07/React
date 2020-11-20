
import React from 'react'

const ProjectSummary = ({project}) => {
    return (
    <div className="card blue-grey darken-1">
        <div className="card-content white-text">
            <span className="card-title">{project.title}</span>
            <p>Posted by Dima</p>
            <p className="grey-text">12th NOV 2020</p>
        </div>
    </div>
    )
}

export default ProjectSummary
