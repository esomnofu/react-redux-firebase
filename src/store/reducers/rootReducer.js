import { combineReducers } from 'redux'
import authReducer from './authReducer';
import projectReducer from './projectReducer';
import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase'

const rootReducer = combineReducers({
    authR: authReducer,
    projectR: projectReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
});



export default rootReducer;