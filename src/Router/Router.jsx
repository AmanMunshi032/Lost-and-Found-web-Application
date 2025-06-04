
import {createBrowserRouter} from "react-router";

import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import Error from "../Error/Error";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import PrivetRoutes from "./PrivetRoutes";
import LostandFound from "../Pages/LostandFound/LostandFound";
  export const router = createBrowserRouter([
    {
      path: "/",
      Component:Root,
      errorElement:<Error></Error>,
      children:[
        {
            path:'/',
            Component:Home
        },
        {
         path:'/LostandFound',
          element:<PrivetRoutes>
            <LostandFound></LostandFound>
          </PrivetRoutes>
        },
        {
          path:'/Register',
          Component:Register
        },
        {
          path:'/Login',
          Component:Login
        }
      
      ]
    },
  ]);