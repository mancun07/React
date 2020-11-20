import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { signIn } from '../../store/actions/authActions'


class SignIn extends Component {

    state = {
        email: '',
        password: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]:e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.signIn(this.state)
        document.querySelector('form').reset()
    }

    render() {
        const {authErr, auth} = this.props;
        if (auth.uid) return <Redirect to="/"/>
        return (
            <div className="container">
                <form className="section" onSubmit={this.handleSubmit}>
                    <h5>Sign In</h5>
                    <div className="input-field">
                        <label htmlFor="email">E-mail</label>
                        <input type="email" id="email"  onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field center">
                        <button className="btn pink darken-3">Add a new user</button>
                        <div className="red-text center">
                             { authErr ? <p>authErr</p> : null }
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    // console.log(state)
    return {
        authErr: state.auth.authError,
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (creds) => dispatch(signIn(creds))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)


