import React, { useEffect, useState } from 'react';
import {  } from 'react-router';
import Lostcard from './Lostcard';



const Lostpets = () => {
    const [lostdata , setlostdata]= useState([])
    useEffect (()=>{
        fetch('https://server-side-assingment.vercel.app/Collections')
        .then (res => res.json())
        .then (data => {
            setlostdata(data)
        })
    },[ setlostdata])
    //  console.log(lostdata)
    return (
        <>
        <h1 className='text-5xl text-orange-500 my-8 font-bold  px-6 '> Lost pets items </h1>
        <div className=' grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6  px-6 '>
           {
            lostdata.map((lost )=><Lostcard lost={lost}></Lostcard>)
           }
        </div>
        </>
    );
};

export default Lostpets;
