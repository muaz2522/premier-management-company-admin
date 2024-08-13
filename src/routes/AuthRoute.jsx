import { Navigate } from "react-router-dom";
import { useAuth } from '../contextApi';


export function AuthRoute({ children }) {
  const auth = useAuth();

  if (auth.loading)
    return (
      <Loading
        loading
        background="rgb(241 ,245 ,249)"
        loaderColor="#383C6C"
      />
    );

  if (!auth.currentUser) return <Navigate to="/login" />;
  if (auth.currentUser.role === "admin") return <Navigate to="/admin" />;

  return children;
}

export function AdminAuthRoute({ children }) {
  const auth = useAuth();

  if (auth.loading)
    return (
      <Loading
        loading
        background="rgb(241 ,245 ,249)"
        loaderColor="#383C6C"
      />
    );

  if (!auth.currentUser || auth.currentUser.role !== "admin") return <Navigate to="/login" />;

  return children;
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

  return auth.currentUser ? (
    auth.currentUser.role === "admin" ? <Navigate to="/admin" /> :
      <Navigate to="/dashboard" />
  ) : children;
}
