//Data Access Layer

const axios = require("axios")


const getAllMovies = async () => {
    return await axios.get('https://api.tvmaze.com/shows')
}

module.exports = { getAllMovies }
