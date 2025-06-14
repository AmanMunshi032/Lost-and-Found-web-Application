import React, { Suspense, use } from 'react';
import AllRecoverTable from './AllRecoverTable';
import { Recoverdata } from '../../Api/App;icationapi';
import { Authcontext } from '../../Context/Authcontext';

const AllRecoveritems = () => {
    const {user}= use(Authcontext)
    return (
        <div>
            <Suspense fallback={<span className="loading loading-ring loading-xl"></span>}>
    <AllRecoverTable Recoverdata={Recoverdata(user.email)}></AllRecoverTable>
            </Suspense>
      
        </div>
    );
};

export default AllRecoveritems;