import { Navigate } from "react-router-dom";
import {useAuth} from '../contextApi';

export function AuthRoute({ children }) {
  const auth = useAuth();

  if (auth.loading)
    return (
      <Loading
        loading
        background="rgb(241 ,245 ,249)"   
        loaderColor=" rgb(132, 204, 22)"
      />
    );

  return auth.currentUser ? children : <Navigate to={"/login"} />;
}

export function IfLoginUser({ children }) {
  const auth = useAuth();

  if (auth.loading)
    return (
      <Loading
        loading
        background="rgb(241 ,245 ,249)"
        loaderColor=" rgb(132, 204, 22)"
      />
    );

  return auth.currentUser ? <Navigate to="/dashboard" /> : children;
}
