import { Navigate } from "react-router-dom";
import { useAuth } from '../contextApi';

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

  if (!auth.currentUser || auth.currentUser.role !== "admin") {
    return <Navigate to="/" />;
  }

  return children;  // Render the children if authenticated as an admin
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

  if(auth.currentUser){
    return <Navigate to="/admin" />
  }
  return children;
}
