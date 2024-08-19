import { createBrowserRouter } from "react-router-dom"
import Login from '../admin-dashboard/pages/Login'
import { AdminAuthRoute,IfLoginUser } from './AuthRoute'
import AdminLayout from '../admin-dashboard/layout'
import AdminHome from '../admin-dashboard/pages/Home'
import Users from '../admin-dashboard/pages/users'
import AdminProfile from '../admin-dashboard/pages/AdminProfile'
import Settings from "../admin-dashboard/pages/settings"
import CreateAdmin from '../admin-dashboard/pages/createAdmin'
import CreatePost from '../admin-dashboard/pages/post'
import PageNotFound from "../ui/PageNotFound"

const routes = [
  {
    path: "/",
    element: <IfLoginUser><Login /></IfLoginUser> 
  },
  {
    path: '/admin',
    element: <AdminAuthRoute role="admin"><AdminLayout /></AdminAuthRoute>,
    children: [
      { path: "*", element: <PageNotFound /> },
      { path: "", element: <AdminHome /> },
      { path: "users", element: <Users /> },
      { path: "profile", element: <AdminProfile /> },
      { path: "settings", element: <Settings /> },
      { path: "create-admin", element: <CreateAdmin /> },
      { path: "posts", element: <CreatePost /> },
    ],
  },
  { path: "*", element: <PageNotFound /> },
];

const router = createBrowserRouter(routes);

export default router;
