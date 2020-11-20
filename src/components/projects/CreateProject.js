import React, { Component } from 'react'
import createProject from '../../store/actions/projectActions'
import { connect } from 'react-redux'
import { Redirect} from 'react-router-dom'

class CreateProject extends Component {

    state = {
        title: '',
        content: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]:e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.createProject(this.state)
        document.querySelector('form').reset()
        this.props.history.push('/')
    }

    render() {
        const { auth } = this.props;
        if (!auth.uid) return <Redirect to='/signin'/>
        return (
            <div className="container">
                <form className="section" onSubmit={this.handleSubmit}>
                    <h5>Create a new project</h5>
                    <div className="input-field">
                        <label htmlFor="title">Title</label>
                        <input type="text" id="title"  onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="content">Your content</label>
                        <textarea id="content" name="content" className="materialize-textarea"  onChange={this.handleChange}></textarea>
                    </div>
                    <div className="input-field center">
                        <button className="btn pink darken-3">Add a new project</button>
                    </div>

                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createProject: (project) => dispatch(createProject(project))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateProject)
