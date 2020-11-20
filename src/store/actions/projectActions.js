
const createProject = (project) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
    // make async call
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const uid = getState().firebase.auth.uid;
    firestore.collection('projects').add({
        ...project,
        authorFirstName: profile.authorFirstName,
        authorLastName: profile.authorLastName,
        authorId: uid
        // createdAt: new Date()
    }).then(() => {
        dispatch({
            type: 'ADD_PROJECT',
            project: project
        })
    }).catch(err => {
        dispatch({
            type: 'ADD_PROJECT_ERROR',
            err
        })
    })


    }
}
export default createProject




