import DalRequest from '../DalhttpRequest/HttpRequest'
const url = "http://localhost:8001/api/members"

const GetAllmembers = async () => {
    let members = await DalRequest.GetAll(url)
    return members
}

const GetMemberById = async (id) => {
    let member = await DalRequest.GetById(url, id)
    return member
}

const DeleteMember = async (id) => {
    let memberDwlwted = await DalRequest.DeleteById(url, id)
    return memberDwlwted;
}

const CreateMember = async (obj) => {
    let member = await DalRequest.Create(url, obj);
    return member
}

const UpdateMemberById = async (id, obj) => {
    let memberUpdated = await DalRequest.UpdateById(url, id, obj)
    return memberUpdated
}

const memberUtils = {
    GetAllmembers, GetMemberById, DeleteMember, CreateMember, UpdateMemberById
}
export default memberUtils