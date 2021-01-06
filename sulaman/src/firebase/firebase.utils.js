import firebase from 'firebase/app'
import 'firebase/firebase-firestore';
import 'firebase/auth';


const config ={
    apiKey: "AIzaSyD05k9WFJl-h4S-TElZRLCAYmjAD7Ga8gk",
    authDomain: "atriproject-3f95c.firebaseapp.com",
    databaseURL: "https://atriproject-3f95c.firebaseio.com",
    projectId: "atriproject-3f95c",
    storageBucket: "atriproject-3f95c.appspot.com",
    messagingSenderId: "77613185890",
    appId: "1:77613185890:web:c2ba2fe49b970942778a3b",
    measurementId: "G-JYD8C55Y97"
}
firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) =>{
    if(!userAuth)return;
    
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapshot = await userRef.get()

    if(!snapshot.exists){
        const {displayName, email} = userAuth;
        const createdAt = new Date()

        try {
            await userRef.set({
                displayName, email, createdAt, ...additionalData
            });
        } catch (error) {
            console.log('error  creating', error.message)
        }
    }
    return userRef;
}



export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({prompt: 'select_account'})
export const signInWithGoogle =() => auth.signInWithPopup(provider);

export default firebase;