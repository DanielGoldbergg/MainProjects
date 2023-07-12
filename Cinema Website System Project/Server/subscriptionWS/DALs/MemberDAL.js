//Data Access Layer

const axios = require("axios")


const GetAllMembers = async () => {
    return await axios.get('https://jsonplaceholder.typicode.com/users')
}

module.exports = { GetAllMembers }
