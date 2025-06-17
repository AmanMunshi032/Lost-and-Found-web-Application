import React from 'react';
import { useLoaderData } from 'react-router';
import FoundCard from './FoundCard';

const Foundpetes = () => {
    const Foundsitems = useLoaderData()
    
    return (
        <>
         <h1 className='text-4xl my-8 font-bold lg:w-5xl lg:mx-auto px-6 lg:px-0'> Found pets items </h1>
          <div className='lg:w-5xl mx-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 px-6 lg:px-0'>
            {
                Foundsitems.map((found)=><FoundCard found={found}></FoundCard>)
            }
            </div>  
        </>
    );
};

export default Foundpetes;