import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import DitelsCard from './DitelsCard';

const Ditelspages = () => {
    const[ditels,setditels]=useState({})
    const {id}=useParams()
    // console.log(id)
    const Cartditels = useLoaderData()
     
   
       useEffect(()=>{
         const newdata = Cartditels.find((singleditels)=>singleditels._id ==id)
        console.log(id, Cartditels)
        setditels(newdata)
       },[id, Cartditels])
            
    return (
        <div>
         
          <DitelsCard ditels={ditels}></DitelsCard>
        </div>
    );
};

export default Ditelspages;