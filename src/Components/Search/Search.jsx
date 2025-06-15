import React, { useState } from 'react';
import { IoSearchSharp } from "react-icons/io5";
const Search = ({hendalSerch}) => {
  const [serchtext,  setserchtext ] =useState('')
    return (
       <div className=' mt-4 md:space-y-3 '>
        <div className='space-y-2'>
              <p className=' md:text-5xl text-2xl font-bold text-center'>Find The Perfect Pet  For You!</p> 
            <p className=' text-center text-sm'>Browse pets from our network of over 11,500 shelters and rescues.</p>
        </div>
          <form onSubmit={ (e)=>hendalSerch(e,serchtext)}>
             <div className=' flex justify-center items-center'>
          <label className="input  md:w-3xl">
  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="none"
      stroke="currentColor"
    >
      <circle cx="11" cy="11" r="8"></circle>
      <path d="m21 21-4.3-4.3"></path>
    </g>
  </svg>
  <input  
  onChange={e=>setserchtext(e.target.value)}
  value={serchtext}
   type="search" required placeholder="Search" />
</label>
 <button className='bg-amber-400 py-2 px-4 rounded-md ml-2 font-semibold' type='submit' > search</button>
           </div>
          </form>
          </div>
    );
};

export default Search;