import React, { useEffect } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../FirebaseConfig';
import { useState } from "react";
import { createContext } from "react";
import { useContext } from 'react';

firebase.initializeApp(firebaseConfig);

const AuthContext = createContext();
export const AuthContextProvider = (props) =>{
    const auth = Auth();
    return <AuthContext.Provider value={auth}>
        {
            props.children
        }
    </AuthContext.Provider>
}

export const useAuth = () => useContext(AuthContext);

const Auth = () => {
    const [user, setUser] = useState();

    const provider = new firebase.auth.GoogleAuthProvider();
    const signInWithGoogle = () => {
        return firebase.auth().signInWithPopup(provider)
        .then(function(result) {
            var user = result.user;
            var {displayName, photoURL, email} = user;

            const signedInUser = {
                isSignIn: true,
                name: displayName,
                email: email,
                photo: photoURL
            }
            setUser(signedInUser);
            return signedInUser;

        }).catch(function(error) {
            const errorDetails = {
                errorMessage: error.message,
                errorCode: error.code
            }
            return errorDetails;
        });
    }

    const googleSignOut = () => {
        return firebase.auth().signOut().then(function() {
          setUser(null);
    
        }).catch(function(error) {
          var errorCode = error.code;
          var errorMessage = error.message;
        });
    }

    useEffect(() => {
        firebase.auth().onAuthStateChanged(function(user){
            if(user){
                var {displayName, photoURL, email} = user;

                const signedInUser = {
                    name: displayName,
                    email: email,
                    photo: photoURL
                }
                setUser(signedInUser);
            }
            else{

            }
        });
    }, [])

    return{user, signInWithGoogle, googleSignOut}
}

export default Auth;