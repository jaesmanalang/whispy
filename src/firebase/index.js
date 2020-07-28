import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyADfgVUotkUZ17wspf6G63e5SXzOjfH8cE',
  authDomain: 'whispy-d7085.firebaseapp.com',
  databaseURL: 'https://whispy-d7085.firebaseio.com',
  projectId: 'whispy-d7085',
  storageBucket: 'whispy-d7085.appspot.com',
  messagingSenderId: '371238304439',
  appId: '1:371238304439:web:c5f44c99b2ca6bd2b12b32',
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.id}`);
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const firestore = firebase.firestore();
export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account',
});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;