import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Main from "../components/LayOut/Main";
import Home from "../components/Home";
import Login from "../components/Login";
import Register from "../components/Register";


 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
        path:'/',
        element:<Home></Home>,
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      }
    ]
    },
  ]);