import DalRequest from '../DalhttpRequest/HttpRequest'
const url = 'http://localhost:8001/api/users'

const GetAllUsers = async () => {
    let users = await DalRequest.GetAll(url)
    return users
}

const GetUserById = async (id) => {
    let user = await DalRequest.GetById(url, id)
    return user
}

const DeleteUserById = async (id) => {
    let userDeleted = await DalRequest.DeleteById(url, id)
    return userDeleted
}

const CreateUserData = async (obj) => {
    let user = await DalRequest.Create(url, obj)
    return user
}

const UpDateUserInDbById = async (id, obj) => {
    let user = await DalRequest.UpdateById(url, id, obj)
    return user
}

export default { GetAllUsers, GetUserById, DeleteUserById, CreateUserData, UpDateUserInDbById }