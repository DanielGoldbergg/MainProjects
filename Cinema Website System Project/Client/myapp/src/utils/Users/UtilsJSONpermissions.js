import DalRequest from '../DalhttpRequest/HttpRequest'
const url = 'http://localhost:8001/api/premissionJson'

const GetPermissionById = async (id) => {
    let Permissions = await DalRequest.GetById(url, id)
    return Permissions
}

const DeletePermissinoById = async (id) => {
    let permissionDeleted = await DalRequest.DeleteById(url, id)
    return permissionDeleted
}

const CreatePermission = async (obj) => {
    let permission = await DalRequest.Create(url, obj)
    return permission
}
const UpDatePermissionById = async (id, obj) => {
    let permission = await DalRequest.UpdateById(url, id, obj)
    return permission
}

const JSONpermissinosUtils = {
    GetPermissionById, DeletePermissinoById, CreatePermission, UpDatePermissionById
}
export default JSONpermissinosUtils