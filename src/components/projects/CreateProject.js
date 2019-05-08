import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createProject } from '../../store/actions/projectActions'
import { Redirect } from 'react-router-dom'

class CreateProject extends Component {

    state = {
        title : '',
        content: ''
    }

    handleChange = (e) => {
        const param = e.target.id;
        const val = e.target.value;
        this.setState({
            [param] : val
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.createNewProject(this.state)
        this.props.history.push('/')
    }



  render() {
    
    const { auth } = this.props
    
    if(!auth.uid) return <Redirect to="/signin" />

    return (
      <div className="container">
        
        <form onSubmit={this.handleSubmit} className="white">
            
            <h5 className="grey-text text-darken-3">Create Project</h5>
            
                <div className="input-field">
                    <label htmlFor="title">Project Title</label>
                    <input type="text" id="title" onChange={this.handleChange} />
                </div>
            
                <div className="input-field">
                    <label htmlFor="content">Project Content</label>
                    <textarea className="materialize-textarea" id="content" onChange={this.handleChange} />
                </div>
            
                <div className="input-field">
                    <button className="btn green lighten-1 z-depth-0">Add Project</button>
                </div>

        </form>

      </div>
    )
  }
}

const mapStateToProps = (state) => {
    return {
        auth : state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createNewProject: (project) => dispatch(createProject(project))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(CreateProject)