import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../layout";
import Home from '../Pages';
import About from '../Pages/About'
import Services from '../Pages/Services'
import Login from '../Pages/Login'
import SignUp from '../Pages/SignUp'
import Forgot from "../components/login/Forgot";
import Verification from "../components/login/VerificationCode";
import Reset from "../components/login/ResetPassword";
import ContactUs from "../Pages/ContactUs";
import DashboardLayout from '../dashboard/layout';
import Dashboard from '../dashboard/pages';
import EditProfile from '../dashboard/pages/EditProfile';
import Account from "../dashboard/pages/Account";

const routes = [
  {
    path: "/",
    element: <AppLayout />,
    //   errorElement: ErrorPage,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "services",
        element: <Services />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "signUp",
        element: <SignUp />,
      }, {
        path: "login",
        element: <Login />,
      },
      {
        path: "forgot",
        element: <Forgot />,
      },
      {
        path: "verify",
        element: <Verification />,
      },
      {
        path: "reset",
        element: <Reset />,
      },
      {
        path: "contact",
        element: <ContactUs />,
      },
    ]
  }, {
    path: '/dashboard',
    element: <DashboardLayout />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />
      },
      {
        path: "/dashboard/profile",
        element: <Account />,
      },
      {
        path: "/dashboard/edit-profile",
        element: <EditProfile />,
      },
    ]
  }
]

const router = createBrowserRouter(routes);

export default router;
