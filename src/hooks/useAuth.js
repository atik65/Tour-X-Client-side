import React, { useContext } from "react";
import { authContext } from "../contexts/FirebaseContext";

const useAuth = () => {
  return useContext(authContext);
};

export default useAuth;
