import React from 'react';
import Slidersection from '../../Components/Sliderimg/Sliderimg';
import LatestFindlost from './LatesFind&lost/LatestFindlost';
import { Link, useLoaderData } from 'react-router';
import Lostpets from './Lostpets/Lostpets';
import Foundpetes from './Foundpetes/Foundpetes';
import RecentlyFoundItems from './RecentlyFound/RecentlyFoundItems';
import Contactpage from './Contactpage/Contactpage';
import About from './Aboutpage/About';
import Servecespage from './OurServeces/Servecespage';




const Home = () => {
  const pets = useLoaderData()  
    return (
 
        <div className=''>
        <Slidersection></Slidersection>
          <h1 className='lg:text-5xl text-3xl my-8 font-bold text-center px-6  text-orange-500'>Latest Find & Lost Items Section</h1>
      <div className=' grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 px-6 '>
        {
          pets.map((pet)=>< LatestFindlost key={pet._id} pet={pet}></ LatestFindlost>)
        }

      </div>
      <About></About>
      <Servecespage></Servecespage>
      {/* <Lostpets></Lostpets>
      <Foundpetes></Foundpetes> */}
  <div className='flex justify-end p-6 my-3'>
        <Link to='/Lostandfound'>
          <button className="btn  text-orange-500  hover:bg-cyan-300 font-bold"> see all</button>
        </Link>
          </div>  
         <div>
          <RecentlyFoundItems></RecentlyFoundItems>
         </div>
         <div>
          <Contactpage></Contactpage>
         </div>
         
        </div>
        
    );
};

export default Home;