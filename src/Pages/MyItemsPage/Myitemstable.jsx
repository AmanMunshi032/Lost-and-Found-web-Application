import React, { use } from 'react';
import MyitemsRow from './MyitemsRow';

const Myitemstable = ({myApplicationsPromise}) => {
    const Applications = use(myApplicationsPromise)
    console.log(Applications)
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