import axios from 'axios';
import React, { use } from 'react';
import { Authcontext } from '../../Context/Authcontext';


const AxiousInstant= axios.create({
    baseURL:'https://server-side-assingment.vercel.app'
})
const UseAxiosScore = () => {
const {user}=use(Authcontext)
  AxiousInstant.interceptors.request.use(config=>{
        config.headers.authorization= `Bearer ${user.accessToken}`
    return config ;
  })

  // response intercepor
  AxiousInstant.interceptors.request.use(Response =>{
    return Response
  } , error => {
  console.log('error in interport', error)
     return Promise.reject(error)
  })
    return  AxiousInstant;
};

export default UseAxiosScore;