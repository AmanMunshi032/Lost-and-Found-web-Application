import React from 'react';

const Lostcard = ({Lost}) => {
    const{postType, photo, Description, TaskTitle, Location, Date}= Lost
    if(postType == "Lost"){

    return (
       <div className="card bg-base-100  shadow-sm">
  <figure className="px-10 pt-10">
    <img
      src={photo}
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{TaskTitle}</h2>
    <p>{Description}</p>
     <div className='flex gap-6'>
     <p className='border-blue-600 border-2 p-2 rounded-md'>{Location}</p>
     <p className='border-blue-600 border-2 p-2 rounded-md'>{Date}</p>
     </div>
    <div className=" w-full">
     <h1 className='bg-violet-400  p-2 rounded-xl text-white font-bold'>{ postType}</h1>
    </div>
  </div>
</div>

    );
};
}
export default Lostcard;