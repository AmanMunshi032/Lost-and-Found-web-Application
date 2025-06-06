import React from 'react';
import { CiLocationOn } from "react-icons/ci";
import { MdDateRange, MdSubtitles } from "react-icons/md";
import { MdCategory } from "react-icons/md";


const LatestFindlost = ({pet}) => {
   const { TaskTitle,Date,Location,photo,Category}=pet
    return (
     <>
     <div className=" rounded-2xl shadow-lg overflow-hidden bg-white relative">

  {/* <!-- Image --> */}
  <img class="object-cover rounded-b-5xl" src={photo} />

  {/* <!-- Content --> */}
  <div className="p-4 pt-2 space-y-1">
  <div className='flex items-center gap-2'>
    <MdSubtitles className='text-blue-500' size={18}/>
    <h3 className="text-lg font-semibold text-gray-600">{TaskTitle}</h3>
  </div>
   
   <div className='flex items-center gap-2'>
    <p className='text-cyan-500'><CiLocationOn size={18}/></p>
      <p className='text-center'> {Location}</p>
   </div>
   <div className='card-actions justify-between'>
<div className="flex items-center gap-2">
      <MdDateRange className='text-green-700' size={18}/>
      <span className="text-orange-300 font-bold text-md">{Date}</span>
     <div className='flex  justify-end items-center gap-2'>
     <MdCategory  className ='text-cyan-800' size={18} />
    <p className='text-lg'>{Category}</p>
   </div>
    </div>
   </div>
    
    <button className="btn btn-soft btn-info w-full">view ditels</button>
    
  
  </div>
</div>
 
     </>
    );
};

export default LatestFindlost;
