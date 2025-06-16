import React, { use } from 'react';
import { toast } from 'react-toastify';
import { Authcontext } from '../../Context/Authcontext';
import { useParams } from 'react-router';

const Model2 = ({ditels}) => {

       const {Date,Location,_id}=ditels
    const {user}=use(Authcontext)
    const {id:modelId}=useParams()
     const hendalModel =(e)=>{
         e.preventDefault();
         const form = e.target
         const Location= form.Location.value;
         const Date = form.Date.value;
         console.log(Location,Date)
         const Recoverdata ={
           modelId,
           Location,
           Date,
           email:user.email
         }
       
        fetch(`https://server-side-assingment.vercel.app/Collections`,{
          method:'PATCH',
         headers: {
    'Content-Type': 'application/json',
  },
    body:JSON.stringify(Recoverdata)
        })
        .then(res=>res.json())
        .then(data=>{
          console.log(data)
        })

       fetch('https://server-side-assingment.vercel.app/myitems',{
        method:'POST',
        headers:{
           'content-type':'application/json'
        },
        body:JSON.stringify(Recoverdata)
       })
       .then(res=> res.json())
       .then(data=>{
        console.log(data)
        toast("Your Recover data has ben successfully..!")
       })
     }
    return (
          <>
       <div className='flex justify-center items-center'>
  <div className="  " >
    <img  className=' h-16 w-16 rounded-full  'src={user&& user?.photoURL} />
  </div>
       </div>
<div className='text-center mb-3'>
<h1 className='text-xl'>{user && user.displayName}</h1>
    <p>{user&& user.email}</p>
</div>
   
 <form  onSubmit={hendalModel}>
            <fieldset className="fieldset my-4  border-base-300 rounded-box   w-full border p-4">
  <label className="label text-xl">Recovered Location</label>
  <input type="text" name='Location' defaultValue={Location} className="input w-full" placeholder="Enter your Location" />
</fieldset>
            <fieldset className="fieldset my-4 border-base-300 rounded-box   w-full border p-4">
  <label className="label text-xl">Date</label>
  <input type="date" name='Date'  defaultValue={Date} className="input w-full" placeholder="Enter your Description" />
</fieldset>
  <button className='btn btn-secondary w-full'>submit</button>
        </form>
        </>
    );
};

export default Model2;