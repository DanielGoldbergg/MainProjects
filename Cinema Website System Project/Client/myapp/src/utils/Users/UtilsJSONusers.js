import DalRequest from '../DalhttpRequest/HttpRequest'
const url = 'http://localhost:8001/api/userJson'

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

const UpDateUserDataById = async (id, obj) => {
    console.log(obj)
    let user = await DalRequest.UpdateById(url, id, obj)
    return user
}

const UtilsJsonUsers = {
    GetUserById, DeleteUserById, CreateUserData, UpDateUserDataById
}
export default UtilsJsonUsers