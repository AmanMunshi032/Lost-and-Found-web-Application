import React, { use } from 'react';
import AllRecoverRow from './AllRecoverRow';

const AllRecoverTable = ({Recoverdata}) => {
    const ApplyData= use(Recoverdata)
  
    return (
        <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead className='border-2'>
      <tr >
        <th>
          
        </th>
        <th className='text-center'>photo</th>
        <th className='text-center'> Recover Location</th>
        <th className='text-center'>Title</th>
        <th className='text-center'>Date</th>
         
      </tr>
    </thead>
    <tbody className='border-2'>
      {/* row 1 */}
      {
       ApplyData.map((recover, index)=> <AllRecoverRow
        recover={recover}
         index={index}
         key={recover._id}
        >
         
        </AllRecoverRow>)
      }
     
    </tbody>
    {/* foot */}
   
  </table>
</div>
    );
};

export default AllRecoverTable;