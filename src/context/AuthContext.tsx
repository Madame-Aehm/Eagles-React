import { createContext, ReactNode, useEffect, useState } from "react";
// import { User } from "../@types";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, User } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";

type AuthContextProviderPropsType = {
  children: ReactNode;
};

type AuthContextInitialValueType = {
  user: User | null;
  setUser: (user: User) => void;
  // setUser:()=> console.log("Context not initialised yet")
  login: (email: string, password: string, setError: React.Dispatch<React.SetStateAction<string>>) => void
  logout: () => void;
  signup: (email: string, password: string, setError: React.Dispatch<React.SetStateAction<string>>) => void
  userCheck: boolean
};

//1. Create the context

const AuthContextInitialValue = {
  user: {} as User,
  setUser: () => console.log("context not initialised "),
  //    setUser:()=> { throw new Error("context not initialised ")}
  login: () => console.log("context not initialised "),
  logout: () => console.log("context not initialised "),
  signup: () => console.log("context not initialised "),
  userCheck: false
};

export const AuthContext = createContext<AuthContextInitialValueType>(
  AuthContextInitialValue
);

//2 define the provider (what are the provider/store will contain)
export const AuthContextProvider = ({
  children,
}: AuthContextProviderPropsType) => {
  const navigateTo = useNavigate();
  const [user, setUser] = useState<User | null>(null);
  const [userCheck, setUserCheck] = useState(false);

  const login = (email: string, password: string, setError: React.Dispatch<React.SetStateAction<string>>) => {
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log(user);
      setUser(user);
    })
    .catch((error) => {
      // const errorCode = error.code;
      const errorMessage = error.message;
      setError(errorMessage)
    });
  }
  
  const signup = (email: string, password: string, setError: React.Dispatch<React.SetStateAction<string>>) => {
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      console.log(user);
      setUser(user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage)
      // alert(errorMessage);
      setError(errorMessage)
    });
  }

  const logout = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      setUser(null);
      navigateTo("/");
    }).catch((error) => {
      // An error happened.
      console.log(error);
    });
  };

  const getActiveUser = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        console.log(user);
        setUser(user);
        // ...
      } else {
        // User is signed out
        // ...
      }
      setUserCheck(true);
    });
  }

  useEffect(() => {
    getActiveUser();
  }, [])

  return (
    <AuthContext.Provider value={{ user, setUser, login, logout, signup, userCheck }}>
      {children}
    </AuthContext.Provider>
  );
};
