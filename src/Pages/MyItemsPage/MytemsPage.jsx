import { Suspense, use } from "react";
import Myitemstable from "./Myitemstable";
import { Authcontext } from "../../Context/Authcontext";
import { myApplicationsPromise } from "../../Api/App;icationapi";

const MyitemsPage = () => {
 const {user}=use(Authcontext)

    return (
        <div>
            <Suspense fallback={<span className="loading loading-ring loading-xl"></span>}>
            <Myitemstable myApplicationsPromise={myApplicationsPromise(user.email)}></Myitemstable>
            </Suspense>
           
        </div>
    );
};

export default MyitemsPage;