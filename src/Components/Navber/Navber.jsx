
import { Link, NavLink } from 'react-router';
import "./Navber.css";
import { use } from 'react';
import { Authcontext } from '../../Context/Authcontext';
import { Tooltip } from 'react-tooltip';
import Petlogo from '../../assets/pet.png'
import { toast } from 'react-toastify';
const Navber = () => {
  const {user,sigout }=use(Authcontext)
  // console.log(user)
   const hendalsingout =()=>{
     sigout().then(()=>{
      toast("logout succesfull")
     })
   }
    const links = <>
    <li className='font-semibold text-lg'><NavLink to= '/'>Home</NavLink></li>
    <li className='font-semibold text-lg'><NavLink to= '/Lostandfound'>Lost & Found </NavLink></li>
 </>
    return (
        <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
             {links}
            </ul>
          </div>
          <div className='flex justify-center items-center gap-3'>
            <img  className='w-12 ' src={Petlogo} alt="" />
           <p className='text-2xl font-bold text-amber-500 '>Petslist</p>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-3">
          {links}
          </ul>
        </div>
        <div className="navbar-end gap-4">
        
          {
            user?'': <>
          <Link to='/Register'>
           <button className='btn btn-primary'>Register</button>
        </Link>
        <Link to='/Login'>
         <button className='btn btn-primary'>sigin</button>
        </Link>
          </>
          }
         <div>
         <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
 <a
  data-tooltip-id="my-tooltip"
  data-tooltip-content={user && user.displayName}
>
 <img src={user && user?.photoURL} alt="" />
</a>
<Tooltip id="my-tooltip" />
  
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-center">
           <li className='font-bold text-xl '><NavLink to= '/AddLostandFound'> Add Lost & Found </NavLink></li>
        <li> {user && user.email} </li>
        <li><button onClick={hendalsingout} className='btn btn-primary'>Logout</button></li>
      </ul>
    </div>
        </div>
         
          
        </div>
      </div>
    );
};

export default Navber;