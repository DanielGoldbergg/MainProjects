import axios from 'axios'

const GetAll = async (url) => {
    let data = await axios.get(url)
    return data.data;
}

const GetById = async (url, id) => {
    let data = await axios.get(url + '/' + id)
    return data.data;
}

const Create = async (url, obj) => {
    let data = await axios.post(url, obj)
    return data.data;

}

const UpdateById = async (url, id, obj) => {
    let data = await axios.put(url + '/' + id, obj)
    return data.data;
}

const DeleteById = async (url, id) => {
    let data = axios.delete(url + '/' + id)
    return data.data;
}

export default { GetAll, GetById, Create, UpdateById, DeleteById }