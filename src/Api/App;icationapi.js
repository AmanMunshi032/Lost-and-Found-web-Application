export const myApplicationsPromise = email => {
    return fetch(`http://localhost:3000/items?email=${email}`).then(res => res.json())
}