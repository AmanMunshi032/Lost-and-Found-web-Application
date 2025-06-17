import React from 'react';
import { useLoaderData } from 'react-router';
import Lostcard from './Lostcard';


const Lostpets = () => {
    const  Lostitems = useLoaderData()
    
    return (
        <>
        <h1 className='text-4xl my-8 font-bold lg:w-5xl lg:mx-auto px-6 lg:px-0'> Lost pets items </h1>
        <div className='lg:w-5xl mx-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8  px-6 lg:px-0'>
            {
                Lostitems.map((Lost)=> <Lostcard Lost={Lost}></Lostcard> )
            }
           
        </div>
        </>
    );
};

export default Lostpets;
