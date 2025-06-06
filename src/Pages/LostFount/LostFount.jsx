import React from 'react';
import { useLoaderData } from 'react-router';
import Lostandfoundcard from './Lostandfoundcard';
import Search from '../../Components/Search/Search';

const LostFount = () => {
    const ditels= useLoaderData()
    return (
       <>
       <div className='flex justify-center items-center'>
        <Search></Search>
       </div>
       <div className='lg:w-6xl mx-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-12 my-5 px-6 lg:px-0'>
    {
        ditels.map((ditel)=><Lostandfoundcard key={ditel._id} ditel={ditel}></Lostandfoundcard>)
    }
  </div>
       </>
  
    );
};

export default LostFount;
