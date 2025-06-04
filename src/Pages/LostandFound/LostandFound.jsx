import React, { use } from 'react';
import { Authcontext } from '../../Context/Authcontext';

const LostandFound = () => {
  const{user}=use(Authcontext)
   const hendalform =(e)=>{
     e.preventDefault()
     const form =e.target
       const formdata = new FormData(form)
  const Updatedata = Object.fromEntries(formdata.entries())
  console.log(Updatedata)
   }
  
    return (
        <div className='px-8 py-4 bg-indigo-200'>
          <div className='p-12 text-center space-y-4'>
                <h1 className='text-5xl font-bold text-amber-400'>Add Lost & Found Item</h1>
        </div>
        <form  onSubmit={hendalform }>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-3'> 
<fieldset className="fieldset bg-sky-300  border-base-300 rounded-box  w-full border p-4">
  <label className="label text-xl">Post Type</label>
  <select type="" name='pet-Type' className="input w-full" placeholder="Enter 
   Category" >
  <option value='Lost'> Lost</option>
  <option value='Found'> Found</option>
 </select>
</fieldset>

 <fieldset className="fieldset bg-sky-300  border-base-300 rounded-box w-full  border p-4">            
  <label className="label text-xl">Title</label>
  <input type="text"name='TaskTitle' className="input w-full" placeholder=" Title Name" />
</fieldset>
<fieldset className="fieldset bg-sky-300  border-base-300 rounded-box  w-full border p-4">
  <label className="label text-xl">Category</label>
  <select type="" name='Category' className="input w-full" placeholder="Enter 
   Category" >
  <option value='Cats'> Cats</option>
  <option value='Dogs'> Dogs</option>
  <option value='Rabbit'>Rabbits</option>
  <option value='Birds'>Birds</option>
  <option value='Fishs'>Fishs</option>
  <option value='Hens'>Hens</option>
 </select>
</fieldset>
<fieldset className="fieldset bg-sky-300  border-base-300 rounded-box   w-full border p-4">
  <label className="label text-xl">Date</label>
  <input type="date" name='Dete' className="input w-full" placeholder="Enter your Description" />
</fieldset>
<fieldset className="fieldset bg-sky-300  border-base-300 rounded-box  w-full border p-4">
  <label className="label text-xl">Location</label>
  <input type="text" name='Location' className="input w-full" placeholder="Enter Deadline" />
</fieldset>

  
<fieldset className="fieldset bg-sky-300  border-base-300 rounded-box  w-full border p-4">
  <label className="label text-xl"> Thumbnail img</label>
  <input type="text" name='photo' className="input w-full" placeholder="Enter Deadline" />
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
 <textarea type="text" name='Description' className='border-2 text-xl bg-white' >
 </textarea>
</fieldset>   

<button className='btn bg-cyan-700 w-full mt-3 text-white' >Add Post</button>
        </form>
      </div>
    );
};

export default LostandFound;