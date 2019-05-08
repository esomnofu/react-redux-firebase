import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signIn } from '../../store/actions/authActions'
import { Redirect } from 'react-router-dom'

class Signin extends Component {

    state = {
        email : '',
        password: ''
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
        this.props.attemptLogin(this.state)
    }



  render() {

    const {loginError, auth} = this.props
    
    if ( auth.uid ) return <Redirect to="/" /> 

    return (
      <div className="container">
        
        <form onSubmit={this.handleSubmit} className="white">
            
            <h5 className="grey-text text-darken-3">Sign In</h5>
            
                <div className="input-field">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" onChange={this.handleChange} />
                </div>
            
                <div className="input-field">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" onChange={this.handleChange} />
                </div>
            
                <div className="input-field">
                    <button className="btn pink lighten-1 z-depth-0">Login Account</button>
                </div>
                <div className="red-text center">{loginError ? <b>{loginError}</b> : null}</div>
        </form>

      </div>
    )
  }
}

const mapStateToProps = (state) => {
    return {
        loginError : state.authR.authError,
        auth: state.firebase.auth
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        attemptLogin: (credentials) => dispatch(signIn(credentials))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Signin)