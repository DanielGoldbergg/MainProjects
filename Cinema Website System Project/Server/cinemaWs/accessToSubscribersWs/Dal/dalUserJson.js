const jsonFile = require('jsonfile')
const jsonUsers = require('./dalReadAndWrite')
const url = './json/users.json'

const getAllUsers = async () => {
    let data = await jsonUsers.getAllusersJson(url);
    return data
}

const getUserById = async (id) => {
    let data = await jsonUsers.getAllusersJson(url);
    let user = data.users.find(user => user._id == id)
    return user
}

const addUser = async (newUser) => {
    let allUsers = await jsonUsers.getAllusersJson(url);
    allUsers.users.push(newUser);
    let data = await jsonUsers.WriteToFile(url, allUsers);
    return data.users[data.users.length - 1]
}

const updateUser = async (savedUser) => {
    console.log(savedUser);
    let allUsers = await jsonUsers.getAllusersJson(url);
    let newUsersArr = allUsers.users.map(user => {
        if (user._id == savedUser._id) {
            return savedUser
        }
        else {
            return user
        }
    })
    allUsers.users = newUsersArr;
    let data = await jsonUsers.WriteToFile(url, allUsers)
    return data
}

const deleteUser = async (id) => {
    let allUsers = await jsonUsers.getAllusersJson(url)
    let usersToFilter = allUsers.users.filter(user => user._id !== id)
    allUsers.users = usersToFilter
    let data = jsonUsers.WriteToFile(url, allUsers);
    return data;

}











module.exports = { getAllUsers, getUserById, addUser, updateUser, deleteUser }