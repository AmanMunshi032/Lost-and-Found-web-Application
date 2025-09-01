import React from 'react';

const Lostcard = ({lost}) => {
    const{postType, photo, Description, TaskTitle, Location, Date}= lost
    if(postType == "Lost"){

    return (
       <div className="card bg-base-100  shadow-sm rounded-2xl ">
  <figure className="">
    <img
      src={photo}
      alt="Shoes"
      className=" h-48 w-full" />
  </figure>
  <div className=" p-4 ">
    <h2 className="card-title">{TaskTitle}</h2>
    <p>{Description.slice(0,120)}</p>
     <div className='flex justify-between'>
     <p className=' p-2 rounded-md'>{Location}</p>
     <p className='p-2 rounded-md'>{Date}</p>
     </div>
    <div className=" w-full">
     <h1 className='border-orange-500 border-2 text-center p-2 rounded-xl font-bold'>{ postType}</h1>
    </div>
  </div>
</div>

    );
};
}
export default Lostcard;