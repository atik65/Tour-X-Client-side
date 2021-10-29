import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import initFirebase from "../firebase/firebase.init";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  sendEmailVerification,
} from "firebase/auth";

initFirebase();
const auth = getAuth();

const useFirebase = () => {
  const [user, setUser] = useState();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState("true");
  // google sign in function
  const googleSignIn = () => {
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider);
  };

  // create user wtih email and password
  const createUser = (email, pass) => {
    return createUserWithEmailAndPassword(auth, email, pass);
  };

  // sign in with email and pass
  const signIn = (email, pass) => {
    return signInWithEmailAndPassword(auth, email, pass);
  };

  // sign out function
  const logOut = () => {
    signOut(auth)
      .then((result) => {
        setUser({});
        Swal.fire("Good job!", "You sign out successfully!", "success");
      })
      .catch((error) => {
        Swal.fire("Opps! Something went Wrong", "Sign Out failed!", "error");
      });
  };

  // verify email
  const verifyEmail = () => {
    sendEmailVerification(auth.currentUser).then(() => {
      Swal.fire(
        "A verification mail sent to your Email. Please check and verify"
      );
    });
  };

  useEffect(() => {
    setLoading(true);
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setError("");
      } else {
        // Swal.fire("Please sign in first");
      }
      setLoading(false);
    });
  }, []);
  return {
    signIn,
    logOut,
    createUser,
    googleSignIn,
    user,
    verifyEmail,
    loading,
  };
};

export default useFirebase;
