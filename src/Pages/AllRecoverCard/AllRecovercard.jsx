import React, { Suspense, use, } from 'react';
import AllRecovercardCollum from './AllRecovercardCollum';
import { Authcontext } from '../../Context/Authcontext';
import UseRecoverdata from '../../Api/UseRecoverdata';
// import { Recoverdata } from '../../Api/App;icationapi';

const AllRecovercard = () => {
     const {user}= use(Authcontext)
     const {Recoverdata} = UseRecoverdata()
    return (
        <div className='lg:mt-18 mt-16'>
         <Suspense fallback={<span className="loading loading-ring loading-xl"></span>}>
    <AllRecovercardCollum Recoverdata={Recoverdata (user.email)}></AllRecovercardCollum>
         </Suspense>
        
       
        </div>
    );
};

export default AllRecovercard;