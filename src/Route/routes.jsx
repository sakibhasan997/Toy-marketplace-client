import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home/Home";
import LoginLayout from "../Layout/LoginLayout";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Login/Register";
import Blogs from "../Pages/Blogs/Blogs";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      children: [
        {
            path: '/',
            element: <Home/>
        },
        
      ]
    },
    {
      path: '/',
      element: <LoginLayout/>,
      children: [
        {
          path: '/login',
          element: <Login/>
        },
        {
          path: '/register',
          element: <Register/>
        },
        {
          path: '/blogs',
          element: <Blogs/>
        }
      ]
    },
  ]);

  export default router