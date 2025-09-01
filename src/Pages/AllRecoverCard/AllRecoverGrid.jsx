import React from 'react';
const AllRecoverGrid = ({Tan}) => {
    const {photo,TaskTitle,Location,Date,Description}=Tan ||{}
    return (
        <>
      <div className=" card bg-base-300 shadow-sm">
  <figure>
    <img className='h-48  w-full'
      src={photo}
      alt="Shoes" />
  </figure>
  <div className="p-4">
    <h2 className="card-title">{TaskTitle}</h2>
     <p>{Description?.slice(0,120)}</p>
     <div className='flex justify-between '>
        <p className='badge badge-outline'>{Location}</p>
        <p className='badge badge-outline'>{Date}</p>
     </div>
 
  </div>
</div>
</>
    );
};

export default AllRecoverGrid;