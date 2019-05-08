import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { singUp } from '../../store/actions/authActions'

class Signup extends Component {

    state = {
        email : '',
        password: '',
        firstname: '',
        lastname: ''
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
        this.props.attemptSignUp(this.state)
     }



  render() {

    const { auth, singUpError } = this.props

    if( auth.uid ) return <Redirect to="/" />

    return (
      <div className="container">
        
        <form onSubmit={this.handleSubmit} className="white">
            
            <h5 className="grey-text text-darken-3">Sign Up</h5>
            
                <div className="input-field">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" onChange={this.handleChange} />
                </div>
            
                <div className="input-field">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" onChange={this.handleChange} />
                </div>

                
                <div className="input-field">
                    <label htmlFor="firstname">First Name</label>
                    <input type="text" id="firstname" onChange={this.handleChange} />
                </div>
                
                <div className="input-field">
                    <label htmlFor="lastname">Last Name</label>
                    <input type="text" id="lastname" onChange={this.handleChange} />
                </div>
            
                <div className="input-field">
                    <button className="btn blue lighten-1 z-depth-0">Create Account</button>
                </div>
                
                <div className="red-text center">{singUpError ? <b>{singUpError}</b> : null}</div>
        </form>

      </div>
    )
  }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        singUpError: state.authR.authError
        
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        attemptSignUp: (newUser) => dispatch(singUp(newUser))       
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Signup)
