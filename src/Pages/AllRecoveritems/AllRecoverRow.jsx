import React from 'react';

const AllRecoverRow = ({recover, index}) => {
    const{photo,Location,Date,TaskTitle} =recover
    return (
        <>
       
                <tr >
              <th className='border-2'>
                   {index+1} 
            </th>
        <td className='border-2'>
          <div className="flex items-center gap-3 ">
            <div >
              <div className="mask mask-squircle h-12 w-12">
                <img className=' flex justify-center items-center rounded-2xl  h-14 w-14'
                  src={photo}
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
           
             
            </div>
          </div>
        </td>
        <td className='border-2'>
          
          <br />
          <span className="badge badge-ghost badge-sm">{Location}</span>
        </td>
        <td className='border-2'>{TaskTitle}</td>
         <td className='border-2'>{Date}</td>
      </tr>  

        </>
    );
};

export default AllRecoverRow;