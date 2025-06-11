import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import DitelsCard from './DitelsCard';

const Ditelspages = () => {
    const[ditels,setditels]=useState({})
    const {id}=useParams()
    const Cartditels = useLoaderData()
   
       useEffect(()=>{
         const newdata = Cartditels.filter((singleditels)=>singleditels._id ==id)
        setditels(newdata)
       },[id,Cartditels])
    return (
        <div>
          <DitelsCard ditels={ditels}></DitelsCard>
        </div>
    );
};

export default Ditelspages;