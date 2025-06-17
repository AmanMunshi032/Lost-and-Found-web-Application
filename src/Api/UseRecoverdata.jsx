import React from 'react';
import UseAxiosScore from '../Components/Hook/UseAxiosScore';

const UseRecoverdata = () => {
    const axiosSecore = UseAxiosScore()
    const Recoverdata= email=>{
        return axiosSecore.get(`/Recover?email=${email}`).then(res=> res.data)
    }
    return {
        Recoverdata
    }
};

export default UseRecoverdata;