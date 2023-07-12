const axios = require('axios')

const subscribersURL = 'http://localhost:8000/api/subscribers';

const GetAllSubscribers = async () => {
    let resp = await axios.get(subscribersURL)
    return resp.data
}

const GetAllSubscriberssById = async (id) => {
    let resp = await axios.get(subscribersURL + '/' + id)
    return resp.data
}

const createSubscribers = async (obj) => {
    let resp = await axios.post(subscribersURL, obj)
    return resp.data
}

const updateSubscribers = async (id, obj) => {
    let resp = await axios.put(subscribersURL + '/' + id, obj)
    return resp.data
}


const DeleteSubscribers = async (id) => {
    let resp = await axios.delete(subscribersURL + '/' + id)
    return resp.data
}

module.exports = { GetAllSubscribers, GetAllSubscriberssById, createSubscribers, updateSubscribers, DeleteSubscribers }

