import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './store/reducers/rooReducer';
import thunk from 'redux-thunk';
import {  reduxFirestore,
  getFirestore,
  createFirestoreInstance} from 'redux-firestore';
import {ReactReduxFirebaseProvider, getFirebase} from 'react-redux-firebase';
import fbConfig from './configs/fbConfig';
import firebase from "firebase/app";
import { useSelector  } from 'react-redux'
import { isLoaded  } from 'react-redux-firebase';



const store = createStore(rootReducer, 
  compose(
    applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
    reduxFirestore(fbConfig)
    
    )
  )

  const profileSpecificProps = {
    userProfile: 'users',
    useFirestoreForProfile: true,
    enableRedirectHandling: false,
    resetBeforeLogin: false
  }

  const rrfProps = {
    firebase,
    config: fbConfig,
    config: profileSpecificProps,
    dispatch: store.dispatch,
    createFirestoreInstance
  };

  function AuthIsLoaded({ children }) {
    const auth = useSelector(state => state.firebase.auth)
    if (!isLoaded(auth)) return <div>Loading Screen...</div>;
        return children
}


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}><ReactReduxFirebaseProvider {...rrfProps}><AuthIsLoaded>
      <App /></AuthIsLoaded>
    </ReactReduxFirebaseProvider></Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

