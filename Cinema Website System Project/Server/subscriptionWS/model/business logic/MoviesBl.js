const Movie = require('../model/MoviesModel')
const moviesDAL = require('../../DALs/MoviesDAL')

const getAllMovies = () => {
    return new Promise((resolve, reject) => {
        Movie.find({}, (err, data) => {
            if (err) {
                reject(err);
            }
            else {
                resolve(data);
            }
        });
    });
}

const GetMoivesById = (MovieId) => {
    return new Promise((resolve, reject) => {
        Movie.findById(MovieId, (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data)
            }
        })
    })
}

const addMovies = (newMovie) => {
    console.log("BL", newMovie);
    return new Promise((resolve, reject) => {
        let MovieToSave = new Movie({
            Name: newMovie.Name,
            Genres: newMovie.Genres,
            Image: newMovie.Image,
            Premiered: newMovie.Premiered



        });
        MovieToSave.save(err => {
            if (err) {
                reject(err);
            }
            else {
                resolve(MovieToSave);
            }
        })
    });
}

const updateMoives = (MovieId, MovieUpdate) => {
    return new Promise((resolve, reject) => {

        Movie.findByIdAndUpdate(MovieId, {
            Name: MovieUpdate.Name,
            Genres: MovieUpdate.Genres,
            Image: MovieUpdate.Image,
            Premiered: MovieUpdate.Premiered




        }, err => {
            if (err) {
                reject(err);
            } else {
                resolve("Updated Moives")
            }
        })

    })
}

const deleteMoives = (MovieId) => {
    return new Promise((resolve, reject) => {
        Movie.findByIdAndDelete(MovieId, err => {
            if (err) {
                reject(err);
            }
            else {
                resolve("Moives deleted")
            }
        })
    })
}

const addMoviesToDB = async () => {
    let Movies = await moviesDAL.getAllMovies()
    Movies = Movies.data
    Movies.map((movie) => {
        let newMovie = new Movie({
            Name: movie.name,
            Genres: movie.genres,
            Image: movie.image.medium,
            Premiered: movie.premiered


        });
        newMovie.save(err => {

            if (err) {
                return (err)
            }

        })
    })
}




module.exports = { getAllMovies, GetMoivesById, addMovies, updateMoives, deleteMoives, addMoviesToDB }