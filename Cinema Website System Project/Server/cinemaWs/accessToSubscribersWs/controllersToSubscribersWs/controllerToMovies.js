const express = require('express');
const DalMovies = require('../Dal/dalMovies');


const router = express.Router();
router.route('/').get(async (req, resp) => {
    let data = await DalMovies.GetAllMovie();
    return resp.json(data)
});

router.route('/:id').get(async (req, resp) => {
    let Id = req.params.id;
    let data = await DalMovies.GetAllMoviesById(Id);
    return resp.json(data);
});

router.route('/').post(async (req, resp) => {
    let newMovie = req.body;
    console.log("controller", newMovie);
    let data = await DalMovies.createMovie(newMovie)
    return resp.json(data)
});

router.route('/:id').put(async (req, resp) => {
    let id = req.params.id;
    let savedMovie = req.body;
    let status = await DalMovies.updateMovie(id, savedMovie);
    return resp.json(status)
})

router.route('/:id').delete(async (req, resp) => {
    let id = req.params.id;
    let status = await DalMovies.DeleteMovies(id)
    return resp.json(status);
})


module.exports = router;

