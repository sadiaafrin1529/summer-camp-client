import {
  createBrowserRouter,

} from "react-router-dom";
import Main from "../components/LayOut/Main";
import Home from "../components/Home";
import Login from "../components/Login";
import Register from "../components/Register";
import Dashboard from "../components/LayOut/Dashboard";
import AddCourse from "../pages/AddCourse";
import AllUsers from "../pages/AllUsers";
import CoursesCard from "../components/CoursesCard";
import Courses from "../components/Courses";
import AllCourse from "../pages/AllCourse";
import Instractor from "../components/Instractor";
import MyClasses from "../pages/MyClasses";
import EditCourse from "../pages/EditCourse";
import PrivateRouter from "./PrivateRouter";
import SelectedCourse from "../pages/SelectedCourse";
import Payment from "../pages/Payment";
import OrderSuccess from "../pages/OrderSuccess";


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
        // loader:({params})=> fetch(`http://localhost:5000/courses/${params.id}`)
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
                  const response = await fetch(`http://localhost:5000/dashboard/edit/${params.id}`);
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
              loader:({params})=> fetch(`http://localhost:5000/addcart/payment/${params.id}`)
              
            },
            {
              path:'orderdone',
              element:<OrderSuccess></OrderSuccess>
            }
    ]
  }
]);