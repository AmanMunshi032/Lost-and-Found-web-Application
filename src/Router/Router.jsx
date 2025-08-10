
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
import AllRecoveritems from "../Pages/AllRecoveritems/AllRecoveritems";
import AllRecovercard from "../Pages/AllRecoverCard/AllRecovercard";
import Model from "../Components/Model/Model";
import Lostpets from "../Pages/Home/Lostpets/Lostpets";
import About from "../Pages/About/About";
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
            loader:()=>fetch('https://server-side-assingment.vercel.app/users')
        },
        {
          path:'/Lostandfound',
          Component:LostFount,
            hydrateFallbackElement:<p className=' mt-72 mb-96 text-center'><span className="loading loading-bars 
          loading-xl"></span></p>,
          loader:()=>fetch('https://server-side-assingment.vercel.app/Collections')
        },
        {
       path :'/About',
       Component:About
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
          loader:()=>fetch('https://server-side-assingment.vercel.app/Collections')
        },
        {
          path:'/MyitemsPage',
          element:<PrivetRoutes>
            <MyitemsPage></MyitemsPage>
          </PrivetRoutes>,
            
        },
        {
          path:'/Update/:id',
          element:<PrivetRoutes>
            <Update></Update>
          </PrivetRoutes>,
            loader:({params})=> fetch(`https://server-side-assingment.vercel.app/Collections/${params.id}`),
        
        },
        {
          path:'/Model/:id',
          element:<PrivetRoutes>
            <Model></Model>
          </PrivetRoutes>,
          loader:({params})=> fetch(`https://server-side-assingment.vercel.app/Collections/${params.id}`)
          
        },
        {
          path:'/AllRecoveritems',
          element:<PrivetRoutes>
           <AllRecoveritems></AllRecoveritems>
          </PrivetRoutes>
        } ,
        {
         path:'/AllRecovercard',
          element:<PrivetRoutes>
            <AllRecovercard></AllRecovercard>
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