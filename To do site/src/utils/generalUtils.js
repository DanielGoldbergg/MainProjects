import axios from 'axios'



//Pure Functions

const getAll = (url) => {
    return axios.get(url)
}

const getById = (url, id) => {
    return axios.get(`${url}/${id}`)
}


const addItem = (url, obj) => {
    return axios.post(url, obj)
}


const updateItem = (url, id, obj) => {
    return axios.put(`${url}/${id}`, obj)

}


const deleteItem = (url, id) => {
    return axios.delete(`${url}/${id}`)
}


const getUserData=async()=>{
    let user=await getAll(`https://jsonplaceholder.typicode.com/users`)

   
    return user
}






export default { getAll, getById, addItem, updateItem, deleteItem,getUserData}