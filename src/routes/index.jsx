import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../layout/AppLayout";
import Home from '../Pages';
import About from '../Pages/About'
import Services from '../Pages/Services'
import Login from '../Pages/Login'
import Signup from '../Pages/SignUp'
import Forgot from "../components/login/Forgot";
import Verification from "../components/login/VerificationCode";
import Reset from "../components/login/ResetPassword";
import ContactUs from "../Pages/ContactUs";

const routes= [
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
          path: "signup",
          element: <Signup />,
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
    }
]

const router = createBrowserRouter(routes);

export default router;
