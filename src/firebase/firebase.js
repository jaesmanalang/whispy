import app from 'firebase/app';
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

class Firebase {
  constructor() {
    app.initializeApp(config);
    this.auth = app.auth();
  }

  createUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  signInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);
}

export default Firebase;
