import React, { use } from 'react';
import { Authcontext } from '../../Context/Authcontext';
import Swal from 'sweetalert2';


const AddLostandFound = () => {
  const{user}=use(Authcontext)
   const hendalform =(e)=>{
     e.preventDefault()
     const form =e.target
       const formdata = new FormData(form)
  const Updatedata = Object.fromEntries(formdata.entries())
  const Items={
    Name:user.displayName,
    email:user.email,
    postType:Updatedata.postType,
    TaskTitle:Updatedata.TaskTitle, 
    Category:Updatedata.Category,
    Location:Updatedata.Location,
    photo:Updatedata.photo,
    Description:Updatedata.Description,
    Date:Updatedata.Date,


  }
   
  fetch('https://server-side-assingment.vercel.app/users',{
    method:"POST",
    headers:{
       'content-type':'application/json'
    },
    body:JSON.stringify( Items)
  })
  .then(res=> res.json())
  .then(data=>{
    console.log('after data is',data)
    Swal.fire({
  icon: "success",
  title: "Your Data has been successfully..!",
  showConfirmButton: false,
  timer: 1500
});
  })


   }
  
    return (
    <div className=''>
        <div className='px-8 py-4 mt-10'>
          <div className='p-12 text-center space-y-4'>
                <h1 className='text-4xl font-bold text-orange-500'>Add Lost & Found Item</h1>
        </div>
        <form  onSubmit={hendalform }>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-3'> 
<fieldset className="fieldset bg-gray-100  border-base-300 rounded-box  w-full border p-4">
  <label className="label text-xl">PostType</label>
  <select type="" name='postType' className="input w-full" placeholder="Enter 
   Category" >
  <option value='Lost'> Lost</option>
  <option value='Found'> Found</option>
 </select>
</fieldset>

 <fieldset className="fieldset bg-gray-100   border-base-300 rounded-box w-full  border p-4">            
  <label className="label text-xl">Title</label>
  <input type="text"name='TaskTitle' className="input w-full" placeholder=" Title Name" />
</fieldset>
<fieldset className="fieldset bg-gray-100   border-base-300 rounded-box  w-full border p-4">
  <label className="label text-xl">Category</label>
  <select type="" name='Category' className="input w-full" placeholder="Enter 
   Category" >
  <option value='Cat'> Cat</option>
  <option value='Dog'> Dog</option>
  <option value='Rabbit'>Rabbit</option>
  <option value='Bird'>Bird</option>
  <option value='Fish'>Fish</option>
  <option value='Hen'>Hen</option>
 </select>
</fieldset>
<fieldset className="fieldset bg-gray-100   border-base-300 rounded-box   w-full border p-4">
  <label className="label text-xl">Date</label>
  <input type="date" name='Date' className="input w-full" placeholder="Enter your Description" />
</fieldset>
<fieldset className="fieldset bg-gray-100  border-base-300 rounded-box  w-full border p-4">
  <label className="label text-xl">Location</label>
  <input type="text" name='Location' className="input w-full" placeholder="Enter Location" />
</fieldset>

  
<fieldset className="fieldset bg-gray-100   border-base-300 rounded-box  w-full border p-4">
  <label className="label text-xl"> Thumbnail img</label>
  <input type="text" name='photo' className="input w-full" placeholder="Enter PhotoUrl" />
</fieldset>
<fieldset className="fieldset bg-gray-100   border-base-300 rounded-box  w-full border p-4">
  <label className="label text-xl">UserName</label>
    <p type="text" name='name' className=' input w-full text-xl'>{user && user.displayName
}</p>
</fieldset>
 <fieldset className="fieldset bg-gray-100  border-base-300 rounded-box  w-full border p-4">
  <label className="label text-xl">Email</label>
   <p type="email" name='email' className=' input w-full text-xl'>{user && user.email}</p>
</fieldset>
            </div>
  <fieldset className="fieldset bg-gray-100  border-base-300 rounded-box w-full border p-4">
  <label className="label text-xl ">Description</label>
 <textarea type="text" name='Description' className='border-2 text-xl bg-white' >
 </textarea>
</fieldset>   

<button className='btn bg-gray-100 w-full mt-3 text-orange-500 font-bold' >Add Post</button>
        </form>
      </div>
    </div>
    );
};

export default AddLostandFound;