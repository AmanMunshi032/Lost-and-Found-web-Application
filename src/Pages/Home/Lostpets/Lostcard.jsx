import React from 'react';

const Lostcard = ({lost}) => {
    const{postType, photo, Description, TaskTitle, Location, Date}= lost
    if(postType == "Lost"){

    return (
       <div className="card bg-base-100  shadow-sm ">
  <figure className="">
    <img
      src={photo}
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{TaskTitle}</h2>
    <p>{Description}</p>
     <div className='flex gap-6'>
     <p className=' p-2 rounded-md'>{Location}</p>
     <p className='p-2 rounded-md'>{Date}</p>
     </div>
    <div className=" w-full">
     <h1 className='border-orange-500 border-2  p-2 rounded-xl font-bold'>{ postType}</h1>
    </div>
  </div>
</div>

    );
};
}
export default Lostcard;