import { createBrowserRouter } from "react-router-dom"
import AppLayout from "../layout"
import Home from '../Pages'
import About from '../Pages/About'
import Services from '../Pages/Services'
import ContactUs from '../Pages/ContactUs'
import Login from '../Pages/Login'
import SignUp from '../Pages/SignUp'
import Forgot from "../components/login/Forgot"
import Verification from "../components/login/VerificationCode"
import Reset from "../components/login/ResetPassword"
import DashboardLayout from '../dashboard/layout'
import Dashboard from '../dashboard/pages'
import EditProfile from '../dashboard/pages/EditProfile'
import Account from "../dashboard/pages/Account"
import LoginLayout from "../layout/LoginLayout"
import { AuthRoute, IfLoginUser,AdminAuthRoute } from './AuthRoute'
import AdminLayout from '../admin-dashboard/layout'
import AdminHome from '../admin-dashboard/pages/Home'
import Users from '../admin-dashboard/pages/users'
import AdminProfile from '../admin-dashboard/pages/AdminProfile'
import Settings from "../admin-dashboard/pages/settings"

const routes = [
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "services", element: <Services /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <ContactUs /> },
    ],
  },
  {
    path: "/",
    element: <LoginLayout />,
    children: [
      { path: "login", element: <IfLoginUser><Login /></IfLoginUser> },
      { path: "signUp", element: <SignUp /> },
      { path: "forgot", element: <Forgot /> },
      { path: "verify", element: <Verification /> },
      { path: "reset", element: <Reset /> },
    ],
  },
  {
    path: '/dashboard',
    element: <AuthRoute><DashboardLayout /></AuthRoute>,
    children: [
      { path: "", element: <Dashboard /> },
      { path: "profile", element: <Account /> },
      { path: "edit-profile", element: <EditProfile /> },
    ],
  },
  {
    path: '/admin',
    element: <AdminAuthRoute role="admin"><AdminLayout /></AdminAuthRoute>,
    children: [
      { path: "", element: <AdminHome /> },
      { path: "users", element: <Users /> },
      { path: "profile", element: <AdminProfile /> },
      { path: "settings", element: <Settings /> },
    ],
  },
];

const router = createBrowserRouter(routes);

export default router;
