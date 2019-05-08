import firebase from 'firebase'
import 'firebase/firestore'
import 'firebase/auth'

// Initialize Firebase
  var config = {
    apiKey: "AIzaSyCNu0739ezgu7_tyoZFLZGI6OrSTE3fPd8",
    authDomain: "ninjafirebase-10561.firebaseapp.com",
    databaseURL: "https://ninjafirebase-10561.firebaseio.com",
    projectId: "ninjafirebase-10561",
    storageBucket: "ninjafirebase-10561.appspot.com",
    messagingSenderId: "245382264638"
  };

  firebase.initializeApp(config);
  firebase.firestore().settings({ timestampsInSnapshots:true })

  export default firebase;