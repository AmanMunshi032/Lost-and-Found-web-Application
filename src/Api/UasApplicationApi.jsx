import React from 'react';
import UseAxiosScore from '../Components/Hook/UseAxiosScore';

const UasApplicationApi = () => {
    const AxiosScore = UseAxiosScore()

    const myApplicationPromise = email =>{
      return AxiosScore.get(`/items?email=${email}`)
      .then(res=> res.data)
    }
    return {
        myApplicationPromise
    }
}
export default UasApplicationApi;