import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './Signedinlinks';
import SignedOutLinks from './Signedoutlinks';
import { connect } from 'react-redux'

const Navbar = (props) => {

    const { auth, profile }  = props
    
    var displayLinks = auth === true ? (<SignedOutLinks />) : (<SignedInLinks profile={profile} />)    

    return ( 
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to="/" className="brand-logo">Home View</Link>
                {displayLinks}
            </div>
        </nav>
     );
}

const mapStateToProps = (state) => {

    return {
        auth: state.firebase.auth.isEmpty,
        authentication: state.firebase,
        profile: state.firebase.profile
    }

}

export default connect(mapStateToProps)(Navbar);