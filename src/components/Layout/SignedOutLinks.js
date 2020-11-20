import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class SignOutLinks extends Component {
    render() {
        return (
            <ul className="right">
                <li><NavLink to="/signin">Sign In</NavLink></li>
                <li><NavLink to="/signup">Sign Up</NavLink></li>
            </ul>
        )
    }
}

export default SignOutLinks