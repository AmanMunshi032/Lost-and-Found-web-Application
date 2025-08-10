import React, { use } from 'react';
import AllRecoverGrid from './AllRecoverGrid';
import { Link } from 'react-router';
import { RiLayoutGrid2Fill } from 'react-icons/ri';
import { MdTableRows } from 'react-icons/md';

const AllRecovercardCollum = ({Recoverdata}) => {
  const Tanvir = use(Recoverdata)
  console.log(Tanvir)
   
    return (
      <>
         <div className='mb-3 card-actions justify-end  bg-gray-200 p-3 '>
      {/* card icon */}
    <Link to='/AllRecovercard'>
      < > <RiLayoutGrid2Fill size={26} />
      </>
    </Link>
      {/* table icon */}
       <Link to='/AllRecoveritems'>
         <><MdTableRows size={26}/></>
       </Link>

    </div>
        <div className='grid grid-cols-1  md:grid-cols-4 max-w-6xl mx-auto gap-2 p-3 md:p-0'>
         {
          Tanvir.map((Tan)=><AllRecoverGrid Tan={Tan}></AllRecoverGrid>)
         }
        </div>
        </>
    );
};

export default AllRecovercardCollum;