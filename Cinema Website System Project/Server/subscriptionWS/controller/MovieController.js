const express = require('express');
const MoviesBl = require('../model/business logic/MoviesBl')


const router = express.Router();
router.route('/').get(async (req, resp) => {
    let data = await MoviesBl.getAllMovies();
    return resp.json(data)
});

router.route('/:id').get(async (req, resp) => {
    let Id = req.params.id;
    let data = await MoviesBl.GetMoivesById(Id);
    return resp.json(data);
});

router.route('/').post(async (req, resp) => {
    let newMovie = req.body;
    console.log("controller", newMovie);
    let data = await MoviesBl.addMovies(newMovie)
    return resp.json(data)
});

router.route('/:id').put(async (req, resp) => {
    let id = req.params.id;
    let Movies = req.body;
    let status = await MoviesBl.updateMoives(id, Movies);
    return resp.json(status)
})

router.route('/:id').delete(async (req, resp) => {
    let id = req.params.id;
    let status = await MoviesBl.deleteMoives(id)
    return resp.json(status);
})


module.exports = router;

