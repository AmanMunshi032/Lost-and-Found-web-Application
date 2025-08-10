import React, { use } from 'react';
import AllRecoverRow from './AllRecoverRow';
import { RiLayoutGrid2Fill } from "react-icons/ri";
import { MdTableRows } from "react-icons/md";
import { Link } from 'react-router';

const AllRecoverTable = ({Recoverdata}) => {
    const ApplyData= use(Recoverdata)
  
    return (
     <>
     <div className=' card-actions justify-end  bg-gray-200 p-3 lg:mt-18 mt-16'>
      {/* card icon */}
    <Link to='/AllRecovercard'>
      < > <RiLayoutGrid2Fill size={26} />
      </>
    </Link>
      {/* table icon */}
       <Link to='/AllRecoveritems'>
         <><MdTableRows  size={26}/></>
       </Link>

    </div>
        <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead className='border-2'>
      <tr >
        <th>
          0
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
</>
    );
};

export default AllRecoverTable;