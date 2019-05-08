export const signIn = (credentials) => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase()

        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        )
        .then(() => {
            dispatch({type: 'LOGIN_SUCCESS'})
        })
        .catch((err) => {
            dispatch({ type: 'LOGIN_ERROR', err})
        })
    }
}


export const signOut = () => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase()

        firebase.auth().signOut()
            .then(() => {
                dispatch({ type: 'SIGNOUT_SUCCESS' })
            })
            .catch((err) => {
                dispatch({ type: 'SIGNOUT_ERROR', err })
            })

    }
}


export const singUp = (newUser) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {

        const firebase = getFirebase()
        const firestore = getFirestore()

        firebase.auth().createUserWithEmailAndPassword(
            newUser.email,
            newUser.password
        ).then((response) => {
            const uid = response.user.uid;
            return firestore.collection('users').doc(uid).set({
                firstName: newUser.firstname,
                lastName: newUser.lastname,
                initials: newUser.firstname[0] + newUser.lastname[0]
            })
        }).then(() => {
            dispatch({type: 'SIGNUP_SUCCESS'})
        })
        .catch((err) => {
            console.log("signup err");
            dispatch({ type: 'SIGNUP_ERROR', err })
        })

    }
}