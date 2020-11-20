

export const signIn = (credentials) => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase();
        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then(
            dispatch({type: 'SIGN_IN_SUCCESS'})
        ).catch(err => dispatch({type: 'SIGN_IN_ERROR', err})
        )
    }
}

export const logOut = () => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();
        firebase.auth().signOut().then(
            dispatch({type: 'LOG_OUT_SUCCESS'})
        )
    }
}

export const signUp = (newUser) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firebase = getFirebase();
        const firestore = getFirestore();
        firebase.auth().createUserWithEmailAndPassword(
            newUser.email,
            newUser.password
        ).then(res => {
            return firestore.collection('users').doc(res.user.uid).set({
                authorFirstName: newUser.firstName,
                authorLastName: newUser.lastName,
                initials: newUser.firstName[0] + newUser.lastName[0] 
            })
        }).then(() => {
            dispatch({type: 'SIGNUP_SUCCESS'})
        }).catch(err => {
            dispatch({type: 'SIGNUP_ERROR', err})
        })
    }
}

