import React from 'react';

const FoundCard = ({found}) => {
    const {postType,photo,TaskTitle,Description,Location,Date }=found
    if(postType == "Found"){
    return (
         <div className="card bg-base-100  shadow-sm">
  <figure className=" pt-1">
    <img
      src={photo}
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title ">{TaskTitle}</h2>
    <p>{Description}</p>
     <div className='flex gap-6'>
     <p className=' p-2 rounded-md'>{Location}</p>
     <p className=' p-2 rounded-md'>{Date}</p>
     </div>
    <div className=" w-full">
     <h1 className=' border-orange-500 border-2   p-2 rounded-xl  font-bold'>{ postType}</h1>
    </div>
  </div>
</div>
    );
};
    }
   


export default FoundCard;