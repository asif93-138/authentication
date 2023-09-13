import React, { useState } from 'react';
import './Login.css';
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import app from '../../firebase/firebase.init';


const Login = () => {
    if (location.href !== 'https://clever-sprite-e7e794.netlify.app/login') {location.assign('https://clever-sprite-e7e794.netlify.app/login');}
    // Initialize Firebase Authentication and get a reference to the service
    const auth = getAuth(app);
    
    
    const [user, setUser] = useState(null); 
    // console.log(user.photoURL);
    function siwg() {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user; setUser(user);
    // IdP data available using getAdditionalUserInfo(result)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message; console.log(errorCode, errorMessage);
    // The email of the user's account used.
    const email = error.customData.email; console.log(email);
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
    }
    function siwgh() {
        const provider = new GithubAuthProvider();
        signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a GitHub Access Token. You can use it to access the GitHub API.
    const credential = GithubAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;

    // The signed-in user info.
    const user = result.user;  setUser(user);
    // IdP data available using getAdditionalUserInfo(result)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GithubAuthProvider.credentialFromError(error);
    // ...
  });
    }
    function so() {
        const auth = getAuth();
signOut(auth).then(() => {
  // Sign-out successful.
  setUser(null);
}).catch((error) => {
  // An error happened.
});
    }
    return (
        <div>
            <h1>Please login!</h1>
            {(user) ? <button onClick={so} type='button'>Sign out</button> : <><button onClick={siwg} type='button'>Sign in with Google</button> <br /><br /> <button onClick={siwgh} type='button'>Sign in with GitHub</button></> }
            
            
            <h2>User : {(user) ? user.displayName:'Not Found!'} </h2>
            <p>Email : {(user) ? user.email:'Not Found!'}</p>
            {(user) && <img className='img' src={user.photoURL} alt='Not Found' />}
        </div>
    );
};

export default Login;