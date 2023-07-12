import DalRequest from '../DalhttpRequest/HttpRequest'
const url = "http://localhost:8001/api/movies"

const GetAllMovies = async () => {
    let movies = await DalRequest.GetAll(url)
    return movies
}

const GetMovieById = async (id) => {
    let movie = await DalRequest.GetById(url, id)
    return movie
}

const DeleteMovieFromMoviesColl = async (id) => {
    let movieDeleted = await DalRequest.DeleteById(url, id)
    return movieDeleted;
}

const CreateMovie = async (obj) => {
    let movie = await DalRequest.Create(url, obj);
    return movie
}

const UpdateMovieById = async (id, obj) => {
    let movieUpdated = await DalRequest.UpdateById(url, id, obj)
    return movieUpdated
}

const moviesUtils = {
    GetAllMovies, GetMovieById, DeleteMovieFromMoviesColl, CreateMovie, UpdateMovieById
}
export default moviesUtils