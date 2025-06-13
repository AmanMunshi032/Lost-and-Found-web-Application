import React, { use } from 'react';
import { Authcontext } from '../../Context/Authcontext';
import { useParams } from 'react-router';
import { toast } from 'react-toastify';

const Model = () => {
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
       fetch('http://localhost:3000/myitems',{
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
  <div className="w-16 " >
    <img  className='rounded-full  'src={user&& user?.photoURL} />
  </div>
       </div>
<div className='text-center mb-3'>
<h1 className='text-xl'>{user && user.displayName}</h1>
    <p>{user&& user.email}</p>
</div>
   
 <form  onSubmit={hendalModel}>
            <fieldset className="fieldset my-4  border-base-300 rounded-box   w-full border p-4">
  <label className="label text-xl">Recovered Location</label>
  <input type="text" name='Location' className="input w-full" placeholder="Enter your Location" />
</fieldset>
            <fieldset className="fieldset my-4 border-base-300 rounded-box   w-full border p-4">
  <label className="label text-xl">Date</label>
  <input type="date" name='Date' className="input w-full" placeholder="Enter your Description" />
</fieldset>
  <button className='btn btn-secondary w-full'>submit</button>
        </form>
        </>
       
    );
};

export default Model;