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
     console.log(lostdata)
    return (
        <>
        <h1 className='text-4xl text-orange-500 my-8 font-bold lg:w-6xl lg:mx-auto px-6 lg:px-0'> Lost pets items </h1>
        <div className='lg:w-6xl mx-auto grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-2  px-6 lg:px-0'>
           {
            lostdata.map((lost )=><Lostcard lost={lost}></Lostcard>)
           }
        </div>
        </>
    );
};

export default Lostpets;
