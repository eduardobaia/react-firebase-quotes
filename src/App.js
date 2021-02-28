import React, { useState, useEffect } from 'react';
import firebase from './utils/firebaeConfig'
import Main from './components/Main'
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { UidContext } from './components/UidContext';


const App = () => {
  const [isSignedIn, setSignedIn] = useState(false);
  const [uid, setUid] = useState(null);

  const uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.TwitterAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      signInSuccess: () => false,
    },
  };

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setSignedIn(!!user);
      console.log(user);
      setUid(user.uid);
    });
  }, [])
  return (
    //aqui passa para a cosntant uid context o valor da id, que e gerada aqui no login. 
    <UidContext.Provider value={uid} >
    <div className="app" style={{ textAlign: 'center' }}>
      {isSignedIn ? (<Main  />) :
        (<div className="login-page">
          <h1>React Crud</h1> 
          <StyledFirebaseAuth
          uiConfig= {uiConfig}
           firebaseAuth= {firebase.auth()}
          />
        </div>)}
    </div>
    </UidContext.Provider>
  );
};

export default App;