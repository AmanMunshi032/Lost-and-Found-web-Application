import React from 'react';

const DitelsCard = ({ditels}) => {
    const{TaskTitle,photo,Date,Location,Category,Description,petType}=ditels?.[0]|| {}
    console.log(ditels)
    return (
        <div className='md:w-2xl mx-auto  my-6 p-8 bg-gray-100 shadow-sm rounded-2xl'>
         <div className='flex justify-center items-center'>
        <img className=' w-xl rounded-2xl' src={photo}alt="" />
         </div>
         <div className='flex justify-center items-center mt-4'>
          <div>
              <h1><span className='text-xl font-bold'>TaskTitle : </span>{TaskTitle}</h1>
            <p><span className='text-xl font-bold'>petType : </span>{petType}</p>
            <p><span className='text-xl font-bold' >Date:</span>{Date}</p>
            <p><span className='text-xl font-bold' >Category:</span>{Category}</p>
            <p><span className='text-xl font-bold' >Location:</span>{Location}</p>
            <p><span className='text-xl font-bold' >Description:</span>{Description}</p>
          </div>
         </div>
         <div>
            {
            petType == "Found" ? <button className='btn btn-error w-full'>This is Mine!</button>:<button className='btn btn-secondary w-full'>Found This!
</button>
            }
            
         </div>
        </div>
    );
};

export default DitelsCard;