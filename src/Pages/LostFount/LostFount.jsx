import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import Lostandfoundcard from './Lostandfoundcard';
import Search from '../../Components/Search/Search';

const LostFount = () => {

    const ditels= useLoaderData()
     const [cards, setcards]= useState(ditels)
    const hendalSerch =(e, text)=>{
     e.preventDefault();
     const searchitems = ditels.filter((item)=>item.Location.toLowerCase().includes(text.toLowerCase()) || item.
TaskTitle.toLowerCase().includes(text.toLowerCase()) )
     setcards(searchitems)
    }
    return (
       <>
       <div className='flex justify-center items-center'>
        <Search hendalSerch={ hendalSerch} ></Search>
       </div>
       <div className=' grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 my-5 p-6'>
    {
        cards.map((ditel)=><Lostandfoundcard key={ditel._id} ditel={ditel}></Lostandfoundcard>)
    }
  </div>
       </>
  
    );
};

export default LostFount;
