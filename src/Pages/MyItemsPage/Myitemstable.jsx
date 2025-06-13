import React, { use, useState } from 'react';
import MyitemsRow from './MyitemsRow';

const Myitemstable = ({myApplicationsPromise}) => {
    const initialApplications = use(myApplicationsPromise)
    const [Applications,setApplications]=useState(initialApplications)
    return (
        <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          #
        </th>
        <th>photo</th>
        <th>Title</th>
        <th>Date</th>
        <th>Update & Delete</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        Applications.map((Application,index)=> <MyitemsRow 
         Application={Application}
         Applications={Applications}
         setApplications={setApplications}
         index={index}
         key={Application._id}
          ></MyitemsRow> )
      }
     
    </tbody>
    {/* foot */}
   
  </table>
</div>
    );
};

export default Myitemstable;