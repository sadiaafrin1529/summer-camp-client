import {
    createBrowserRouter,
} from "react-router-dom";
import Courses from "../components/Courses";
import Home from "../components/Home";
import Instractor from "../components/Instractor";
import Dashboard from "../components/LayOut/Dashboard";
import Main from "../components/LayOut/Main";
import Login from "../components/Login";
import Register from "../components/Register";
import AddCourse from "../pages/AddCourse";
import AllCourse from "../pages/AllCourse";
import AllUsers from "../pages/AllUsers";
import EditCourse from "../pages/EditCourse";
import MyClasses from "../pages/MyClasses";
import OrderSuccess from "../pages/OrderSuccess";
import Payment from "../pages/Payment";
import SelectedCourse from "../pages/SelectedCourse";
import PrivateRouter from "./PrivateRouter";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path:'/classes',
        element:<Courses></Courses>,
        // loader:({params})=> fetch(`https://arts-craft-server-sadiaafrin1529.vercel.app/courses/${params.id}`)
      },
      {
        path:'/instractor',
        element:<Instractor></Instractor>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      }
    ]
  },
  {
    path: 'dashboard',
    element: <PrivateRouter><Dashboard></Dashboard></PrivateRouter>,
    children: [
      {
        path: 'addcourse',
        element: <AddCourse></AddCourse>
      },
      {
        path: 'allusers',
        element: <AllUsers></AllUsers>
      },
      {
        path:'allcourse',
        element:<AllCourse></AllCourse>
      },
      {
        path:'myclasses',
        element:<MyClasses></MyClasses>
      },
     
      {
              path: 'edit/:id',
              element: <EditCourse></EditCourse>,
              loader: async ({ params }) => {
                try {
                  const response = await fetch(`https://arts-craft-server-sadiaafrin1529.vercel.app/dashboard/edit/${params.id}`);
                  if (!response.ok) {
                    throw new Error('Failed to fetch data');
                  }
                  const data = await response.json();
                  return { data }; // Return the fetched data inside an object
                } catch (error) {
                  console.error(error);
                  return { data: null }; // Return a default value if the fetch fails
                }
              }
            },
            {
              path:'selectcourse',
              element:<SelectedCourse></SelectedCourse>
            },
            {
              path:'payment/:id',
              element:<Payment></Payment>,
              loader:({params})=> fetch(`https://arts-craft-server-sadiaafrin1529.vercel.app/addcart/payment/${params.id}`)
              
            },
            {
              path:'orderdone',
              element:<OrderSuccess></OrderSuccess>
            }
    ]
  }
]);