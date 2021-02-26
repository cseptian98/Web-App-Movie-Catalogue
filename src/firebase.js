import firebase from 'firebase/app';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: 'AIzaSyBPYAHFd7AJjHm3bOduK7oqIjlIk4dbMyQ',
  authDomain: 'react-movies-13b21.firebaseapp.com',
  projectId: 'react-movies-13b21',
  storageBucket: 'react-movies-13b21.appspot.com',
  messagingSenderId: '539608931464',
  appId: '1:539608931464:web:0bfdb93da8ce06a0bd533d',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
