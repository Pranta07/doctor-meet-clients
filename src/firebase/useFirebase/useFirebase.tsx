import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updatePassword,
  updateProfile,
  User,
  UserCredential,
} from "firebase/auth";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import initializationAuth from "../firebase.initialize";

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
    Firstname: string,
    LastName: string
  ) => void;
  signUsingEmail: (email: string, password: string) => void;
  resetPassword: (email: string) => void;
  isLogged: boolean;
  updateUserName: (name: string) => void;
  updatingPass: (pass: string) => void;
};

initializationAuth();
const useFirebase = (): firebase => {
  const [user, setUser] = useState<User | null>(null);
  const [message, setMessage] = useState<React.SetStateAction<string>>("");
  const [isLoading, setIsLoading] = useState(true);
  const [admin, setAdmin] = useState(false);
  const [isLogged, setIsLogged] = useState(false);
  const nevigate = useNavigate();

  // const saveUser = (email: string | null, displayName: string | null, method: string, AccountType: string): void => {
  //     const user = { email, displayName, AccountType };

  //     fetch("https://sleepy-beyond-70687.herokuapp.com/users", {
  //         method: method,
  //         headers: {
  //             "content-type": "application/json",
  //         },
  //         body: JSON.stringify(user),
  //     }).then();

  // };

  const auth: any = getAuth();
  const setNewUserName = (Firstname: string, LastName: string) => {
    updateProfile(auth.currentUser, {
      displayName: Firstname + LastName,
      photoURL:
        "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png",
    })
      .then(() => {})
      .catch((error) => {
        setMessage(error.message);
      });
  };

  const updateProfilePic = (img: string) => {};
  const updateUserName = (name: string) => {
    updateProfile(auth.currentUser, {
      displayName: name,
    })
      .then(() => {})
      .catch((error) => {
        setMessage(error.message);
      });
  };

  const verification = () => {
    sendEmailVerification(auth.currentUser)
      .then(() => {
        // Email verification sent!
        // ...
      })
      .catch((error) => {
        setMessage(error.message);
      });
  };
  const signUsingGoogle = () => {
    const googleProvider = new GoogleAuthProvider();

    signInWithPopup(auth, googleProvider)
      .then((result: UserCredential) => {
        verification();
        setIsLogged(true);
        setUser(result.user);
        // console.log(history);
        // saveUser(result.user.email, result.user.displayName, "PUT", "customer");
        nevigate("/");
      })
      .catch((error) => {
        setMessage(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const createUsingEmail = (
    email: string,
    password: string,
    Firstname: string,
    LastName: string
  ) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setNewUserName(Firstname, LastName);
        verification();
        setUser(result.user);
        // saveUser(email, name, "POST", AccountType);
        setIsLogged(true);
        nevigate("/");
        console.log(result, "jjj");
      })
      .catch((error) => {
        setMessage(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  const signUsingEmail = (email: string, password: string) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        // verification();
        console.log(result);
        setUser(result.user);
        nevigate("/");
        setIsLogged(true);
      })
      .catch((error) => {
        setMessage(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const resetPassword = (email: string) => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        setMessage("check mail.");
      })
      .catch((error) => {
        setMessage(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const logOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        setIsLogged(false);
        setMessage("");
      })
      .catch((error) => {
        setMessage(error.message);
      })
      .finally(() => {
        setIsLoading(false);
        // console.log(isLogged);
      });
  };
  const updatingPass = (pass: string): void => {
    const user: User = auth.currentUser;
    const newPassword: string = pass;
    updatePassword(user, newPassword)
      .then(() => {
        // Update successful.
      })
      .catch((error) => {
        setMessage(error.message);
      });
  };

  useEffect((): any => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setIsLogged(true);
        setIsLoading(true);
        const email: string | undefined | null = user?.email;
        // fetch(`https://sleepy-beyond-70687.herokuapp.com/users/${email}`)
        //     .then((res: any) => res.json())
        //     .then((data) => {
        //         setAdmin(data.admin);
        //         console.log(data.admin, "ok na?");
        //     }).finally(() => {
        //         setIsLoading(false);
        //     })
      } else {
        setUser(null);
        setIsLogged(false);
      }
      setIsLoading(false);
    });
    return () => unsubscribed;
  }, [isLogged, auth]);

  useEffect(() => {
    // setIsLoading(true);
    // const email: string | undefined | null = user?.email;
    // fetch(`https://fierce-shelf-26334.herokuapp.com/users/${email}`)
    //     .then((res: any) => res.json())
    //     .then((data) => {
    //         setAdmin(data.admin);
    //     }).finally(() => {
    //         setIsLoading(false);
    //     })
  }, [user]);

  return {
    user,
    message,
    setMessage,
    logOut,
    isLoading,
    admin,
    signUsingGoogle,
    createUsingEmail,
    signUsingEmail,
    resetPassword,
    isLogged,
    updateUserName,
    updatingPass,
  };
};

export default useFirebase;
