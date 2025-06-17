import { Suspense, use } from "react";
import Myitemstable from "./Myitemstable";
import { Authcontext } from "../../Context/Authcontext";
import UasApplicationApi from "../../Api/UasApplicationApi";
// import { myApplicationsPromise } from "../../Api/App;icationapi";

const MyitemsPage = () => {
 const {user}=use(Authcontext)
 const { myApplicationPromise} = UasApplicationApi()
 console.log('my token ', user.accessToken)

    return (
        <div>
            <Suspense fallback={<span className="loading loading-ring loading-xl"></span>}>
            <Myitemstable  myApplicationPromise={ myApplicationPromise(user.email)}></Myitemstable>
            </Suspense>
           
        </div>
    );
};

export default MyitemsPage;