import React, { useEffect, useState } from 'react';
import AuthContext from '../context/AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import auth from '../firebase/firebase.config';

const AuthProvider = ({ children }) => {
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider()


  const userRegister = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  }

  const userLogin = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  }

  const userProfileUpdate = (profile) => {
    setLoading(true);
    return updateProfile(auth.currentUser, profile);
  }

  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider)
  }

  const userLogout = () => {
    setLoading(true);
    return signOut(auth);
  }

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, currentUser => {
      console.log(currentUser);
      console.log('user state change', currentUser?.email);
      setUsers(currentUser);
      setLoading(false);
    })
    return () => {
      unSubscribe();
    }
  }, [])

  const authInfo = {
    users,
    loading,
    userRegister,
    userLogin,
    googleSignIn,
    userLogout,
    userProfileUpdate
  }

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;