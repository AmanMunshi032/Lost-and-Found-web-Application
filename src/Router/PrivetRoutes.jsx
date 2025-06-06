import React, { use } from 'react';
import { Authcontext } from '../Context/Authcontext';
import { Navigate, useLocation } from 'react-router';

const PrivetRoutes = ({children}) => {
  const{user,loding}=use(Authcontext)
 const location = useLocation() 
  if(loding){
    return <span className=" mt-72 mb-96 text-center loading-spinner loading-xl "></span>
  }
  if(!user){
    return <Navigate to="/Login" state={location.pathname}></Navigate>
  }
    return children
}
export default PrivetRoutes;