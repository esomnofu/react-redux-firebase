export const createProject = (project) => {
    return (dispatch, getState, { getFirestore }) => {
        //make the async call here...

        //initialize firestore
        const firestore = getFirestore();
        
        const userProfile = getState().firebase.profile;
        const userId = getState().firebase.auth.uid;


        firestore.collection('projects').add({
            ...project,
            authorFirstName: userProfile.firstName,
            authorLastName: userProfile.lastName,
            authorId: userId,
            createdAt: new Date()
        })
        .then(
            (res) => {
                //continue with dispatch
                dispatch({ type: 'CREATE_PROJECT', project: project })
              }
        )
        .catch(
            (err) => {
                 console.log("Firebase Error is: ", err);
                 dispatch({ type: 'CREATE_PROJECT_ERROR', err: err })
            }
        )
    }
}