import { createContext, useState, useEffect, useContext } from "react";
import { auth } from "../config/firebase.config";
import Loading from "react-fullscreen-loading";
import {getUser} from '../api/getUserDetails'
import { useNavigate } from "react-router-dom";

const AuthenticateContext = createContext();

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const data = await getUser(user.uid);
        // console.log(data);
        setCurrentUser(data);
      } else {
        setCurrentUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return (
      <Loading
        loading
        background="rgb(241 ,245 ,249)"
        loaderColor="#383C6C"
      />
    );
  }

  return (
    <AuthenticateContext.Provider
      value={{ currentUser, loading }}
    >
      {" "}
      {children}{" "}
    </AuthenticateContext.Provider>
  );
};

function useAuth() {
  return useContext(AuthenticateContext);
}

export { useAuth, AuthProvider };
