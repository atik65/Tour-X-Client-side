import React, { createContext } from "react";
import useFirebase from "../hooks/useFirebase";

export const authContext = createContext();

const FirebaseContext = ({ children }) => {
  return (
    <authContext.Provider value={useFirebase()}>
      {children}
    </authContext.Provider>
  );
};
export default FirebaseContext;
