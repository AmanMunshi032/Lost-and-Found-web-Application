export const myApplicationsPromise = (email , accessToken)=> {
    return fetch(`https://server-side-assingment.vercel.app/items?email=${email}`,{
       headers:{
        authorization: `Bearer ${accessToken}`
       } 
    }

    ).then(res => res.json())
}

 export const Recoverdata = email =>{
    return fetch(`https://server-side-assingment.vercel.app/Recover?email=${email}`).then(res=>res.json())
}