import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAQb9vQU3LuahPWbVbCaa_22A8FZ5M-vIU",
    authDomain: "react-51138.firebaseapp.com",
    databaseURL: "https://react-51138.firebaseio.com",
    projectId: "react-51138",
    storageBucket: "react-51138.appspot.com",
    messagingSenderId: "382424962858",
    appId: "1:382424962858:web:4c3089b87fcd4f944d7053"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore()
// .settings({timestampsInSnapshots: true})

  export default firebase