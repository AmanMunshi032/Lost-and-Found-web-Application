import React, { useEffect, useState } from 'react';

import FoundCard from './FoundCard';

const Foundpetes = () => {
 const [Founddata ,setFounddata]=useState([])
 useEffect (()=>{
    fetch('https://server-side-assingment.vercel.app/Collections')
    .then(res=> res.json())
    .then(data => {
        setFounddata(data)
    })
 },[])
    
    return (
        <>
         <h1 className='text-4xl text-orange-500 my-8 font-bold lg:w-5xl lg:mx-auto px-6 lg:px-0'> Found pets items </h1>
          <div className='lg:w-6xl mx-auto grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-2 px-6 lg:px-0'>
            {
                Founddata.map((found)=> <FoundCard found={found}></FoundCard>)
            }
            </div>  
        </>
    );
};

export default Foundpetes;