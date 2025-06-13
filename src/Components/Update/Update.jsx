import React, { use } from 'react';
import { Authcontext } from '../../Context/Authcontext';
 import Swal from 'sweetalert2';
import { useLoaderData } from 'react-router';
 

const Update = () => {
   const {postType ,Date, Location,Category,Description ,TaskTitle,photo,_id}=useLoaderData()
    const {user}=use(Authcontext)
  
    const hendelupdateform =(e)=>{
   e.preventDefault()
      const form = e.target;
    const formdata = new FormData(form)
  const updateData = Object.fromEntries(formdata.entries())
   fetch(`http://localhost:3000/Collections/${_id}`,{
     method:"PUT",
         headers:{
         'content-type':'application/json'
    },
    body:JSON.stringify(updateData)
   })
   .then(res=>res.json())
   .then(data=>{
    if(data.modifiedCount){
        Swal.fire({
      // position: "top-end",
      icon: "success",
      title: "Your data Update successfuly!",
      showConfirmButton: false,
      timer: 2000
    });
    }
   })
    }
    return (
           <div className='px-8 py-4 bg-indigo-200'>
          <div className='p-12 text-center space-y-4'>
                <h1 className='text-5xl font-bold text-blue-500'> UPdate Lost & Found Items</h1>
        </div>
        <form  onSubmit={hendelupdateform}>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-3'> 
<fieldset className="fieldset bg-sky-300  border-base-300 rounded-box  w-full border p-4">
  <label className="label text-xl">PostType</label>
  <select type="text" name='postType' defaultValue={postType} className="input w-full" placeholder="Enter 
   Category" >
  <option value='Lost'> Lost</option>
  <option value='Found'> Found</option>
 </select>
</fieldset>

 <fieldset className="fieldset bg-sky-300  border-base-300 rounded-box w-full  border p-4">            
  <label className="label text-xl">Title</label>
  <input type="text" name='TaskTitle' defaultValue={TaskTitle}  className="input w-full" placeholder=" Title Name" />
</fieldset>
<fieldset className="fieldset bg-sky-300  border-base-300 rounded-box  w-full border p-4">
  <label className="label text-xl">Category</label>
  <select type="" name='Category' defaultValue={Category} className="input w-full" placeholder="Enter 
   Category" >
  <option value='Cat'> Cat</option>
  <option value='Dog'> Dog</option>
  <option value='Rabbit'>Rabbit</option>
  <option value='Bird'>Bird</option>
  <option value='Fish'>Fish</option>
  <option value='Hen'>Hen</option>
 </select>
</fieldset>
<fieldset className="fieldset bg-sky-300  border-base-300 rounded-box   w-full border p-4">
  <label className="label text-xl">Date</label>
  <input type="date" name='Date' defaultValue={Date} className="input w-full" placeholder="Enter your Description" />
</fieldset>
<fieldset className="fieldset bg-sky-300  border-base-300 rounded-box  w-full border p-4">
  <label className="label text-xl">Location</label>
  <input type="text" name='Location' defaultValue={Location} className="input w-full" placeholder="Enter Location" />
</fieldset>

  
<fieldset className="fieldset bg-sky-300  border-base-300 rounded-box  w-full border p-4">
  <label className="label text-xl"> Thumbnail img</label>
  <input type="text" name='photo' defaultValue={photo} className="input w-full" placeholder="Enter PhotoUrl" />
</fieldset>
<fieldset className="fieldset bg-sky-300  border-base-300 rounded-box  w-full border p-4">
  <label className="label text-xl">UserName</label>
    <p type="text" name='name' className=' input w-full text-xl'>{user && user.displayName
}</p>
</fieldset>
 <fieldset className="fieldset bg-sky-300  border-base-300 rounded-box  w-full border p-4">
  <label className="label text-xl">Email</label>
   <p type="email" name='email' className=' input w-full text-xl'>{user && user.email}</p>
</fieldset>
            </div>
  <fieldset className="fieldset bg-sky-300  border-base-300 rounded-box w-full border p-4">
  <label className="label text-xl ">Description</label>
 <textarea type="text" name='Description' defaultValue={Description} className='border-2 text-xl bg-white' >
 </textarea>
</fieldset>   

<button className='btn bg-cyan-700 w-full mt-3 text-white' >Update Button</button>
        </form>
      </div>
    );
};

export default Update;