const axios = require('axios')

const moviesURL = 'http://localhost:8000/api/movies';

const GetAllMovie = async () => {
    let resp = await axios.get(moviesURL)
    return resp.data
}

const GetAllMoviesById = async (id) => {
    let resp = await axios.get(moviesURL + '/' + id)
    return resp.data
}

const createMovie = async (obj) => {
    let resp = await axios.post(moviesURL, obj)
    return resp.data
}

const updateMovie = async (id, obj) => {
    let resp = await axios.put(moviesURL + '/' + id, obj)
    return resp.data
}


const DeleteMovies = async (id) => {
    let resp = await axios.delete(moviesURL + '/' + id)
    return resp.data
}

module.exports = { GetAllMovie, GetAllMoviesById, createMovie, updateMovie, DeleteMovies }


