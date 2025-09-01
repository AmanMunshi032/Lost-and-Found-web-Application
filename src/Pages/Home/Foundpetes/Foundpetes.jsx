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
         <h1 className='text-5xl text-orange-500 my-8 font-bold  px-6 '> Found pets items </h1>
          <div className=' grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 px-6'>
            {
                Founddata.map((found)=> <FoundCard found={found}></FoundCard>)
            }
            </div>  
        </>
    );
};

export default Foundpetes;