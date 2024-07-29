import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../components/AppLayout";
import Home from '../Pages';
import About from '../Pages/About'
import Services from '../Pages/Services'
import Login from '../Pages/Login'
import Signup from '../Pages/SignUp'

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
    ]
    }
]

const router = createBrowserRouter(routes);

export default router;