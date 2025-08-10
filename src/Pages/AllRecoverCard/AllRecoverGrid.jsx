import React from 'react';
const AllRecoverGrid = ({Tan}) => {
    const {photo,TaskTitle,Location,Date,
Description
}=Tan
    return (
        <>
      <div className=" card bg-base-300 shadow-sm">
  <figure>
    <img
      src={photo}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{TaskTitle}</h2>
     <p>{Description}</p>
     <div className='card-actions justify-evenly '>
        <p className='badge badge-outline'>{Location}</p>
        <p className='badge badge-outline'>{Date}</p>
     </div>
 
  </div>
</div>
</>
    );
};

export default AllRecoverGrid;