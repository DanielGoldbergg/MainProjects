let express = require('express');
let StudentBl = require('../models/studentBL');
let GradesBl = require('../models/gradeBl');

let Router = express.Router();

Router.route('/').get(async (req, resp) => {
    let data = await StudentBl.GetALLStudents();
    return resp.json(data);
})

Router.route('/:id').get(async (req, resp) => {
    let Id = req.params.id;
    let data = await StudentBl.GetStudentById(Id);
    return resp.json(data)
})

Router.route('/').post(async (req, resp) => {
    let newstudent = req.body;
    let data = await StudentBl.CrateStudent(newstudent);
    return resp.json(data);
})

Router.route('/:id').put(async (req, resp) => {
    let newstudent = req.body;
    let id = req.params.id;
    let data = await StudentBl.EditStudent(id, newstudent);
    return resp.json(data);
})

Router.route('/:id').delete(async (req, resp) => {
    let Id = req.params.id;
    let data = await StudentBl.DeleteStudent(Id);
    return resp.json(data);
})

Router.route('/grade/:id/:idGrade').put(async (req, resp,) => {
    let id = req.params.id;
    let idgreade = req.params.idGrade;
    let newGrades = req.body;
    console.log(req.body);
    let status = await GradesBl.updateOneGrade(id, idgreade, newGrades)
    return resp.json(status)
})

Router.route('/grade/:id').post(async (req, resp,) => {
    let id = req.params.id;
    let NewGrade = req.body;
    console.log(req.body);
    let status = await GradesBl.AddGrade(id, NewGrade);
    return resp.json(status)
})

Router.route('/grade/:id').get(async (req, resp) => {
    let Id = req.params.id;
    let data = await GradesBl.GetGradesById(Id);
    return resp.json(data)
})

module.exports = Router;
