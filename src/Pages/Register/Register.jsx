import React, { use } from 'react';
import { Link } from 'react-router';
import { Authcontext } from '../../Context/Authcontext';
import Swal from 'sweetalert2';
  import {  toast } from 'react-toastify';

const Register = () => {
    const{Creatuser,setuser,sigingoogle,Updateuser}=use(Authcontext)
     const handelRegister=(e)=>{
    e.preventDefault();
  const form = e.target;
  const formdata = new FormData(form)
    const name = form.name.value;
  // const email = form.email.value;
    const photo = form.photo.value;
//    const password = form.password.value;
  const {email,password,...userprofil} = Object.fromEntries(formdata.entries())
   console.log(email,password, userprofil)
  if(password.length < 6){
    toast("password must be equal or greter then  6")
    return;
  }
  if(!/[a-z]/.test(password)){
    toast("password must be  Lowercase letter")
    
    return;
  }
  if(!/[A-Z]/.test(password)){
    toast("password must be  Uppercase letter")
    return;
  }
  Creatuser(email,password)
  .then(result=>{
    const user = result.user
    
Swal.fire({
  icon: "success",
  title: "Your Register has been successfully.!",
  showConfirmButton: false,
  timer: 2000
});
    console.log(user)
       Updateuser({displayName:name,photoURL:photo}).then(()=>{
       setuser({...user,displayName:name,photoURL:photo})
       })
     .catch(error=>{
    console.log(error)
     setuser(user)
       })
  })
  .catch(error=>{
 console.log(error)
//    setuser()
       })
   
} 
const handelwithgoogle =()=>{
    sigingoogle()
    .then(result=>{
      const user=result.user
      setuser(user)
      console.log(user)
    })
     .catch((error) => {
      console.log(error)
    
  });
} 
    return (
         <div className="hero md:min-h-screen md:mt-0 mt-10 ">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl space-y-5">
          <div className="card-body">
          <h1 className="text-3xl font-bold text-center">Register now!</h1>
            <form  onSubmit={handelRegister} className="fieldset">
              <label className="label">Name</label>
              <input type="text" name='name' className="input" placeholder="Name" />
              <label className="label">Photo url</label>
              <input type="text" name='photo' className="input" placeholder="photo url" />
              <label className="label">Email</label>
              <input type="email" name='email' className="input" placeholder="Email" />
              <label className="label">Password</label>
              <input type="password" name='password' className="input" placeholder="Password" />
              <button  type='submit' className="btn btn-neutral mt-4">Register</button>
                <div>
              <div className="divider">OR</div>
              <button  onClick={handelwithgoogle } className="btn w-full bg-white text-black border-[#e5e5e5]">
  <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
  Login with Google
</button>
        </div>
            </form>

            <p>Already Have an Account? please<Link className=" text-blue-500 underline ml-2 font-bold" to ='/Login'>Login</Link></p>
          </div>
        </div>
    </div>
    );
};

export default Register;