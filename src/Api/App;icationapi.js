export const myApplicationsPromise = email => {
    return fetch(`http://localhost:3000/items?email=${email}`).then(res => res.json())
}

 export const Recoverdata = email =>{
    return fetch(`http://localhost:3000/Recovers?email=${email}`).then(res=>res.json())
}