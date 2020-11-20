import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { logOut } from '../../store/actions/authActions'

const SignInLinks = ({profile, logOut}) => {
     
        return (
            <ul className="right">
                <li><NavLink to="/project/create">Create a project</NavLink></li>
                <li><a href="#" onClick={logOut}>Log Out</a></li>
                <li><NavLink to="#" className="btn btn-floating pink">{profile.initials}</NavLink></li>
            </ul>
        )
    }


const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        logOut: () => dispatch(logOut())
    }
}

export default connect(null, mapDispatchToProps)(SignInLinks)

