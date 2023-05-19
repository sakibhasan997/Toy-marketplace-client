import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home/Home";
import LoginLayout from "../Layout/LoginLayout";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Login/Register";
import Blogs from "../Pages/Blogs/Blogs";
import PrivateLayout from "../Layout/PrivateLayout";
import Details from "../Pages/Details/Details";
import Private from "./Private";
import Spinner from "../Pages/Shared/Spiner/Spinner";
import AllToys from "../Pages/AllToys/AllToys";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import AddToysLayout from "../Layout/AddToysLayout";
import AddToys from "../Pages/AddToys/AddToys";
import MyToys from "../Pages/MyToys/MyToys";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      errorElement: <ErrorPage/>,
      children: [
        {
            path: '/',
            element: <Home/>
        },
        
      ]
    },
    {
      path: '/toyDetails',
      element: <PrivateLayout/>,
      errorElement: <ErrorPage/>,
      children: [
        {
          path: ':id',
          element: <Private><Details/></Private>,
          loader: ({params}) => fetch(`https://assignment-11-server-site-eight.vercel.app/tabToys/${params.id}`)
        }
      ]
    },
    {
      path: '/',
      element: <AddToysLayout/>,
      errorElement: <ErrorPage/>,
      children: [
        {
          path: '/addToys',
          element: <AddToys/>
        },
        {
          path: '/myToys',
          element: <MyToys/>
        }
      ]
    },
    {
      path: '/',
      element: <LoginLayout/>,
      errorElement: <ErrorPage/>,
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
        },
        {
          path: '/allToys',
          element: <AllToys/>
        }
      ]
    },
  ]);

  export default router