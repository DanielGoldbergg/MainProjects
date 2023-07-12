const User = require('../model/userModel')

const getAllUsers = () => {
    return new Promise((resolve, reject) => {
        User.find({}, (err, data) => {
            if (err) {
                reject(err);
            }
            else {
                console.log(data);
                resolve(data);
            }
        });
    });
}



const GetUserById = (UserId) => {
    return new Promise((resolve, reject) => {
        User.findById(UserId, (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data)
            }
        })
    })
}

const addUser = (newUser) => {
    console.log("BL", newUser);
    return new Promise((resolve, reject) => {
        let UserToSave = new User({
            UserName: newUser.UserName,
            Password: newUser.Password,


        });

        UserToSave.save(err => {
            if (err) {
                reject(err);
            }
            else {
                resolve(UserToSave);
            }
        })
    });
}

const updateUser = (UserId, UserUpdate) => {
    return new Promise((resolve, reject) => {

        User.findByIdAndUpdate(UserId, {
            UserName: UserUpdate.UserName,
            Password: UserUpdate.Password,





        }, err => {
            if (err) {
                reject(err);
            } else {
                resolve("Updated User")
            }
        })

    })
}

const deleteUser = (MemberId) => {
    return new Promise((resolve, reject) => {
        User.findByIdAndDelete(MemberId, err => {
            if (err) {
                reject(err);
            }
            else {
                resolve("User deleted")
            }
        })
    })
}


module.exports = { getAllUsers, GetUserById, addUser, updateUser, deleteUser }