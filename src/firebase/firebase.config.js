// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBUp7eqneu4Q1QqXXTDEHvkmpevf9CHBUw',
  authDomain: 'final-marketing-project-auth.firebaseapp.com',
  projectId: 'final-marketing-project-auth',
  storageBucket: 'final-marketing-project-auth.firebasestorage.app',
  messagingSenderId: '162589572146',
  appId: '1:162589572146:web:45916d7bc84871c5a7902b',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export default auth;
