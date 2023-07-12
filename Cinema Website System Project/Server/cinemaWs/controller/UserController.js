const express = require('express');
const router = express.Router();
const UserBl = require('../model/business logic/userBL')



router.route('/').get(async (req, resp) => {
    let data = await UserBl.getAllUsers();
    return resp.json(data)
});

router.route('/:id').get(async (req, resp) => {
    let Id = req.params.id;
    let data = await UserBl.GetUserById(Id);
    return resp.json(data);
});

router.route('/').post(async (req, resp) => {
    let newUser = req.body;
    console.log("controller", newUser);
    let data = await UserBl.addUser(newUser)
    return resp.json(data)
});

router.route('/:id').put(async (req, resp) => {
    let id = req.params.id;
    let user = req.body;
    let status = await UserBl.updateUser(id, user);
    return resp.json(status)
})

router.route('/:id').delete(async (req, resp) => {
    let id = req.params.id;
    let status = await UserBl.deleteUser(id)
    return resp.json(status);
})


module.exports = router;

