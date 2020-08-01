import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { FirebaseProvider } from './firebase';
import { AuthProvider } from './auth';
import './index.css';

ReactDOM.render(
  <AuthProvider>
    <FirebaseProvider>
      <App />
    </FirebaseProvider>
  </AuthProvider>,
  document.getElementById('root'),
);
