import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyC04zKOBl48m-Yex95GeL4NyvBf9pjEjN4',
  authDomain: 'react-notes-app-4fb87.firebaseapp.com',
  databaseURL: 'https://react-notes-app-4fb87.firebaseio.com',
  projectId: 'react-notes-app-4fb87',
  storageBucket: 'react-notes-app-4fb87.appspot.com',
  messagingSenderId: '906071393896',
  appId: '1:906071393896:web:6f6f312c799b683ca89ddd',
  measurementId: 'G-Y9JVCSM32Q',
};
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
