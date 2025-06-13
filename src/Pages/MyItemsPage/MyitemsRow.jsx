import React from 'react';
import { MdBrowserUpdated, MdDelete } from "react-icons/md";
import { Link } from 'react-router';
import Swal from 'sweetalert2';
const MyitemsRow = ({Application,index}) => {
const { _id,photo,Category,TaskTitle,Date}=Application

const hendalDelete =(_id)=>{
    console.log(_id)
  Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
  

  if (result.isConfirmed) {
// face delet data 
 fetch(`http://localhost:3000/Collections/${_id}`,{
  method:"DELETE"
 })
 .then(res=> res.json())
 .then (data=>{
  if(data.deletedCount){
   Swal.fire({
      title: "Deleted!",
      text: "Your Data has been deleted.",
      icon: "success"
    });
  }
 
 })


  
  }
});

}
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
            <Link to={`/Update/${_id}`}>
       <button className="btn btn-ghost btn-xs">{<MdBrowserUpdated size={24} />}</button>
            </Link>
         
          <button  onClick={ ()=> hendalDelete(_id)} className="btn btn-ghost btn-xs">{<MdDelete size={24}/>}</button>
        </th>
      </tr>  
        </>
    );
};

export default MyitemsRow;