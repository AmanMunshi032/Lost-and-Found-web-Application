export const myApplicationsPromise = email => {
    return fetch(`https://server-side-assingment.vercel.app/items?email=${email}`).then(res => res.json())
}

 export const Recoverdata = email =>{
    return fetch(`https://server-side-assingment.vercel.app/Recover?email=${email}`).then(res=>res.json())
}