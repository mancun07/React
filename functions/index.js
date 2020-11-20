const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase)

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.region('europe-west1').https.onRequest((request, response) => {
 response.send("Hello Ninjas");
});


const createNotification = (notification) => {
    return admin.firestore().collection('notifications')
    .add(notification)
    .then(doc => console.log('a new notofication is added', doc));
}

exports.projectCreated = functions.region('europe-west1')
    .firestore.document('projects/{projectId}')
    .onCreate(doc => {

        // const project = doc.data();
        const notification = {
            content: 'A new project has been added',
            person: `${doc.data().authorFirstName} ${doc.data().authorLastName}`
        }

        return createNotification(notification)
    })

exports.newUserJoined = functions
    .auth.user().onCreate(user => {

        return admin.firestore().collection('users')
        .doc(user.uid).get().then(doc => {
            const notification = {
                content: 'A new user joined us just now',
                person: `${doc.data().authorFirstName} ${doc.data().authorLastName}`
            }
            return createNotification(notification)
        })
    })



