import React, { Suspense, use, } from 'react';
import AllRecovercardCollum from './AllRecovercardCollum';
import { Authcontext } from '../../Context/Authcontext';
import { Recoverdata } from '../../Api/App;icationapi';

const AllRecovercard = () => {
     const {user}= use(Authcontext)
   
    return (
        <div>
         <Suspense fallback={<span className="loading loading-ring loading-xl"></span>}>
    <AllRecovercardCollum Recoverdata={Recoverdata (user.email)}></AllRecovercardCollum>
         </Suspense>
        
       
        </div>
    );
};

export default AllRecovercard;