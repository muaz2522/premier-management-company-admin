import { Navigate } from "react-router-dom";
import { useAuth } from '../contextApi';


// export function AuthRoute({ children }) {
//   const auth = useAuth();

//   if (auth.loading)
//     return (
//       <Loading
//         loading
//         background="rgb(241 ,245 ,249)"
//         loaderColor="#383C6C"
//       />
//     );

//   if (!auth.currentUser) return <Navigate to="/" />;
//   if (auth.currentUser.role === "admin") return <Navigate to="/admin" />;

//   return children;
// }

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
    return <Navigate to="/" />;  // Redirect to the home page if not authenticated or not an admin
  }

  return children;  // Render the children if authenticated as an admin
}
// export function IfLoginUser({ children }) {
//   const auth = useAuth();

//   if (auth.loading)
//     return (
//       <Loading
//         loading
//         background="rgb(241 ,245 ,249)"
//         loaderColor=" rgb(132, 204, 22)"
//       />
//     );

//   return auth.currentUser ? (
//     auth.currentUser.role === "admin" ? <Navigate to="/admin" /> :
//       <Navigate to="/dashboard" />
//   ) : children;
// }
