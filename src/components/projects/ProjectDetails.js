import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect} from 'react-router-dom'

const ProjectDetails = (props) => {
    console.log(props)
    const { project, auth } = props; 
    if (!auth.uid) return <Redirect to='/signin'/>

    if (project) {
        return (
            <div className="container section project-details">
            <div class="card">
                <div class="card-content">
                <span class="card-title">{project.title}</span>
                    <p>{project.content}</p>
                </div>
                <div class="card-action">
                    <a href="#">posted by {project.authorFirstName} {project.authorLastName}</a>
                    <a href="#"></a>
                </div>
            </div>
            
        </div>
        ) 
    } else {
        return (
            <div>Loading project...</div>
        )
    }
       
   
  

}

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id;
    const projects = state.firestore.data.projects;
    const project = projects ? (projects[id]) : null
    return {
        project: project,
        auth: state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection: 'projects'}
    ])

)(ProjectDetails)

