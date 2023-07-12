const axios = require('axios')

const membersURL = 'http://localhost:8000/api/members';

const GetAllMembers = async () => {
    let resp = await axios.get(membersURL)
    return resp.data
}

const GetAllMemberById = async (id) => {
    let resp = await axios.get(membersURL + '/' + id)
    return resp.data
}

const createMember = async (obj) => {
    let resp = await axios.post(membersURL, obj)
    return resp.data
}

const updateMember = async (id, obj) => {
    let resp = await axios.put(membersURL + '/' + id, obj)
    return resp.data
}


const DeleteMember = async (id) => {
    let resp = await axios.delete(membersURL + '/' + id)
    return resp.data
}

module.exports = { GetAllMembers, GetAllMemberById, createMember, updateMember, DeleteMember }


