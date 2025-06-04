import React from 'react';
import { IoSearchSharp } from "react-icons/io5";
const Search = () => {
    return (
       <div className=' mt-4 md:space-y-3 '>
            <p className=' md:text-5xl text-2xl font-bold'>Find The Perfect Pet  For You!</p> 
            <p className=' text-center text-sm'>Browse pets from our network of over 11,500 shelters and rescues.</p>
           <div className=' space-x-2 '>
            <select defaultValue="Pick a browser" className="bg-gray-100 rounded-md md:px-8 py-3 ">
    <option disabled={true}>Pick a browser</option>
    <option>Chrome</option>
    <option>FireFox</option>
    <option>Safari</option>
  </select>
             <input type="text" className='bg-gray-100 md:px-32 py-3  rounded-md absolute' placeholder='' />
           <button><IoSearchSharp className='relative top-2 left-2 ' size={24} /> </button>
           
  

           </div>
          </div>
    );
};

export default Search;