const Member = require('../model/MemberModel')
const membersDAL = require('../../DALs/MemberDAL')

const getAllMembers = () => {
    return new Promise((resolve, reject) => {
        Member.find({}, (err, data) => {
            if (err) {
                reject(err);
            }
            else {
                resolve(data);
            }
        });
    });
}



const GetMemberById = (MemberId) => {
    return new Promise((resolve, reject) => {
        Member.findById(MemberId, (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data)
            }
        })
    })
}

const addMember = (newMember) => {
    console.log("BL", newMember);
    return new Promise((resolve, reject) => {
        let MemberToSave = new Member({
            Name: newMember.Name,
            Email: newMember.Email,
            City: newMember.City


        });
        MemberToSave.save(err => {
            if (err) {
                reject(err);
            }
            else {
                resolve(MemberToSave);
            }
        })
    });
}

const updateMember = (MemberId, MemberUpdate) => {
    return new Promise((resolve, reject) => {

        Member.findByIdAndUpdate(MemberId, {
            Name: MemberUpdate.Name,
            Email: MemberUpdate.Email,
            City: MemberUpdate.City




        }, err => {
            if (err) {
                reject(err);
            } else {
                resolve("Updated Member")
            }
        })

    })
}

const deleteMember = (MemberId) => {
    return new Promise((resolve, reject) => {
        Member.findByIdAndDelete(MemberId, err => {
            if (err) {
                reject(err);
            }
            else {
                resolve("Member deleted")
            }
        })
    })
}


const addMembersToDB = async () => {
    let members = await membersDAL.GetAllMembers()
    members = members.data
    members.map((member) => {
        let newMember = new Member({
            Name: member.name,
            Email: member.email,
            City: member.address.city
        });
        newMember.save(err => {

            if (err) {
                return (err)
            }

        })
    })
}









module.exports = { getAllMembers, GetMemberById, addMember, updateMember, deleteMember, addMembersToDB }