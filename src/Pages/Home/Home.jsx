import React from 'react';
import Slidersection from '../../Components/Sliderimg/Sliderimg';
import LatestFindlost from './LatesFind&lost/LatestFindlost';
import { Link, useLoaderData } from 'react-router';
import Lostpets from './Lostpets/Lostpets';
import Foundpetes from './Foundpetes/Foundpetes';


const Home = () => {
  const pets = useLoaderData()  
    return (
        <div>
        <Slidersection></Slidersection>
          <h1 className='text-4xl my-8 font-bold lg:w-5xl lg:mx-auto px-6 lg:px-0'>Latest Find & Lost Items Section</h1>
      <div className='lg:w-5xl mx-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 px-6 lg:px-0'>
        {
          pets.map((pet)=>< LatestFindlost key={pet._id} pet={pet}></ LatestFindlost>)
        }

      </div>
      <Lostpets></Lostpets>
      <Foundpetes></Foundpetes>
  <div className='flex justify-end lg:w-5xl mx-auto my-3'>
        <Link to='/Lostandfound'>
          <button className="btn btn-soft btn-warning font-bold"> see all</button>
        </Link>
          </div>  

        </div>
    );
};

export default Home;