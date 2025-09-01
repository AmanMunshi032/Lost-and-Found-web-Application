import React from 'react';
import { CiLocationOn } from "react-icons/ci";
import { MdDateRange, MdSubtitles } from "react-icons/md";
import { MdCategory } from "react-icons/md";
import { Link } from 'react-router';


const LatestFindlost = ({pet}) => {
   const {_id,TaskTitle,Date,Location,photo,Description}=pet
    return (
     <>
     <div className=" bg-base-100  rounded-xl shadow-lg ">
  {/* <!-- Image --> */}
  <img class="object-cover  rounded-t-xl h-48 w-full" src={photo} />

  {/* <!-- Content --> */}
  <div className=" px-4 ">
  <div className='flex items-center '>
    <MdSubtitles className='text-blue-500' size={18}/> 
    <h3 className="text-lg font-semibold text-gray-600">{TaskTitle}</h3>
  </div>
   
   <div className='flex  items-center gap-6 '>
    <p >{Description.slice(0,100)}</p>
   </div>
   <div className='flex  justify-between'>
     <p>{Date}</p>
    <p>{Location}</p>
   </div>
 <div>
   <Link to={`/Ditelspages/${_id}`}>
     <button className=" btn my-4 text-orange-500 hover:bg-cyan-300 font-bold w-full">See more</button>
    </Link>
 </div>
   
   
  </div>
</div>
 
     </>
    );
};

export default LatestFindlost;
