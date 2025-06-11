
import {createBrowserRouter} from "react-router";

import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import Error from "../Error/Error";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import PrivetRoutes from "./PrivetRoutes";
import AddLostandFound from "../Pages/AddLostandFound/AddLostandFound";
import LostFount from "../Pages/LostFount/LostFount";
import Ditelspages from "../Pages/Ditelspage/Ditelspages";
import MyitemsPage from "../Pages/MyItemsPage/MytemsPage";
import Update from "../Components/Update/Update";
  export const router = createBrowserRouter([
    {
      path: "/",
      Component:Root,
      errorElement:<Error></Error>,
      children:[
        {
            path:'/',
            Component:Home,
            hydrateFallbackElement:<p className=' mt-72 mb-96 text-center'><span className="loading loading-bars 
          loading-xl"></span></p>,
            loader:()=>fetch('http://localhost:3000/users')
        },
        {
          path:'/Lostandfound',
          Component:LostFount,
            hydrateFallbackElement:<p className=' mt-72 mb-96 text-center'><span className="loading loading-bars 
          loading-xl"></span></p>,
          loader:()=>fetch('http://localhost:3000/Collections')
        },
        {
         path:'/AddLostandFound',
          element:<PrivetRoutes>
            <AddLostandFound></AddLostandFound>
          </PrivetRoutes>
        },
        {
          path:'/Ditelspages/:id',
          element:<PrivetRoutes>
            <Ditelspages></Ditelspages>,
          </PrivetRoutes>,
           hydrateFallbackElement:<p className=' mt-72 mb-96 text-center'><span className="loading loading-bars 
          loading-xl"></span></p>,
          loader:()=>fetch('http://localhost:3000/Collections')
        },
        {
          path:'/MyitemsPage',
          element:<PrivetRoutes>
            <MyitemsPage></MyitemsPage>
          </PrivetRoutes>,
         
        },
        {
          path:'/Update',
          element:<PrivetRoutes>
            <Update></Update>
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