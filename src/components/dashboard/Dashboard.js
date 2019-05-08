import React, { Component } from 'react'
import Notifications from './Notification';
import ProjectList from '../projects/ProjectList';
import { connect } from 'react-redux'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase';
import { Redirect } from 'react-router-dom'

class Dashboard extends Component {
    state = {  }
    render() { 
        
        const { available_projects, auth, notifications } = this.props
        if(!auth.uid) return <Redirect to="/signin" />
        
        return ( 
                <div className="dashboard container">
                    <div className="row">
                        <div className="col s12 m7"> <ProjectList projects={available_projects} /> </div>                    
                        <div className="col s12 m4 offset-m1"> <Notifications notifications={notifications} /> </div>                    
                    </div>
                </div>
            );
    }
}


const mapStateToProps = (state) =>{
    
    return {
        available_projects : state.firestore.ordered.projects,
        auth: state.firebase.auth,
        notifications: state.firestore.ordered.notifications
    }

}

 
export default 
    compose(
        connect(mapStateToProps),
         firestoreConnect([
             { collection: 'projects', orderBy: ['createdAt', 'desc'] },
             { collection: 'notifications', limit:3, orderBy: ['time', 'desc'] }
         ]),
        )(Dashboard)