import React from 'react';
import firebase from './../utils/firebaeConfig';
import Create from './Create';
import Read from './Read';

const Main  = () => {
    return (
        <main>
            <nav>
                <h1>React CRUD</h1>
                <h4>Bonjour {firebase.auth().currentUser.displayName}</h4>
                <div className="button" onClick= { ()=> firebase.auth().signOut()}> Se deconecté </div>
            </nav>
            <Create />
            <Read />
        </main>
    );
};

export default Main ;