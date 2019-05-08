const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

exports.helloWorld = functions.https.onRequest((request, response) => {
 response.send("Hello from React base!");
});


const createNotification = (async notification => {
    const doc = await admin.firestore().collection('notifications').add(notification);
    return console.log('Notification Added', doc);
})

// const createNotification = (notification => {
//     return admin.firestore().collection('notifications')
//         .add(notification)
//         .then(doc => console.log('Notification Added', doc) )
// })


exports.projectCreated = functions.firestore
    .document('projects/{projectId}')
        .onCreate(doc => {
            const project = doc.data()
            const notification = {
                content: 'Added a new project',
                user:  `${project.authorFirstName} ${project.authorLastName}`,
                time: admin.firestore.FieldValue.serverTimestamp()
            }
            return createNotification(notification);
        })
        
        
        exports.userJoined = functions.auth.user().onCreate(async user => {
            const doc = await admin.firestore().collection('users').doc(user.uid).get();
            const newUser = doc.data()
            const notification = {
                content: 'Joined The Party!',
                user: `${newUser.firstName} ${newUser.lastName}`,
                time: admin.firestore.FieldValue.serverTimestamp()
            }
            
            return createNotification(notification);
            
})