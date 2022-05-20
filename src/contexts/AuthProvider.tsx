import { User } from "firebase/auth";
import React, { createContext } from "react";
import useFirebase from "../firebase/useFirebase/useFirebase";

type firebase = {
  user: User | null;
  message: React.SetStateAction<string>;
  setMessage: React.Dispatch<React.SetStateAction<string>>;
  logOut: () => void;
  isLoading: boolean;
  admin: boolean;
  signUsingGoogle: () => void;
  createUsingEmail: (
    email: string,
    password: string,
    name: string,
    AccountType: string
  ) => void;
  signUsingEmail: (email: string, password: string) => void;
  resetPassword: (email: string) => void;
  isLogged: boolean;
  updateUserName: (name: string) => void;
  updatingPass: (pass: string) => void;
};

export const AuthContext = createContext({} as firebase);
const AuthProvider = ({ children }: any) => {
  const allContext = useFirebase();
  return (
    <AuthContext.Provider value={allContext}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
