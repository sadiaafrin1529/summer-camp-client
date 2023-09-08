import { createContext, useEffect } from "react";
import {
 
    GithubAuthProvider,
  GoogleAuthProvider,
  
  createUserWithEmailAndPassword,
  
  getAuth,
  onAuthStateChanged,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
  
} from "firebase/auth";
import { useState } from "react";
import { app } from "../FireBase/Firebase.config";


const auth = getAuth(app);

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  // user states
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  // login with google

  const provider = new GoogleAuthProvider();
  const  googleSignIn= () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  // login with github

  const gprovider = new GithubAuthProvider();
  const handleGitHublogin = () => {
    setLoading(true);
    return signInWithPopup(auth, gprovider);
  };

  // create user with email password

  const creatUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // sign in with email password

  const login = (email, password) => {
    setLoading(true);
    return  signInWithEmailAndPassword(auth, email, password);
  };

  // sen email verification

  const emailSendToV = () => {
    return sendEmailVerification(auth.currentUser);
  };

  // password handle email

  const passwordChangeEmail = () => {
    return sendPasswordResetEmail(auth, user.email);
  };

  // onAuth

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (loggedUser) => {
      setUser(loggedUser);
      setLoading(false);
    });
    return () => {
      return unsubscribe();
    };
  }, []);


   //photourl

   const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: photo
    })
}

  // sign out

  const logout = () => {
    setLoading(true);
    return signOut(auth);
  };

  const authInfo = {
    user,
    setUser,
    googleSignIn,
    handleGitHublogin,
    logout,
    loading,
    creatUser,
    login,
    emailSendToV,
    passwordChangeEmail,
    updateUserProfile
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;