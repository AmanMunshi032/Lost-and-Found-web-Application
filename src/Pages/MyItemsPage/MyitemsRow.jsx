import React from 'react';
import { MdBrowserUpdated, MdDelete } from "react-icons/md";
import { Link } from 'react-router';
const MyitemsRow = ({Application,index}) => {
const {photo,Category,TaskTitle,Date}=Application
    return (
        <>
           <tr>
              <th>
                   {index+1} 
            </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src={photo}
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{Category}</div>
             
            </div>
          </div>
        </td>
        <td>
          
          <br />
          <span className="badge badge-ghost badge-sm">{TaskTitle}</span>
        </td>
        <td>{Date}</td>
        <th>
            <Link to='/Update'>
       <button className="btn btn-ghost btn-xs">{<MdBrowserUpdated size={24} />}</button>
            </Link>
         
          <button className="btn btn-ghost btn-xs">{<MdDelete size={24}/>}</button>
        </th>
      </tr>  
        </>
    );
};

export default MyitemsRow;