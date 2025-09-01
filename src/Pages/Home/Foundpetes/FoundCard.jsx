import React from 'react';

const FoundCard = ({found}) => {
    const {postType,photo,TaskTitle,Description,Location,Date }=found
    if(postType == "Found"){
    return (
         <div className="card bg-base-100  rounded-2xl shadow-sm">
  <figure className=" pt-1">
    <img
      src={photo}
      alt="Shoes"
      className="rounded-t-2xl h-48 w-full" />
  </figure>
  <div className="p-4">
    <h2 className="card-title ">{TaskTitle}</h2>
    <p>{Description.slice(0,120)}</p>
     <div className='flex justify-between'>
     <p className=' p-2 rounded-md'>{Location}</p>
     <p className=' p-2 rounded-md'>{Date}</p>
     </div>
    <div className=" w-full">
     <h1 className=' border-orange-500 border-2 text-center  p-2 rounded-xl  font-bold'>{ postType}</h1>
    </div>
  </div>
</div>
    );
};
    }
   


export default FoundCard;