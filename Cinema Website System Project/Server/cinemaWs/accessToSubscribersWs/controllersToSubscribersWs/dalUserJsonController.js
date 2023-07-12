const express = require('express');
const dalUserJson = require('../Dal/dalUserJson');


const router = express.Router();
router.route('/').get(async (req, resp) => {
    let data = await dalUserJson.getAllUsers();
    console.log(data, 'userJson has been recived total :)')
    return resp.json(data)
});

router.route('/:id').get(async (req, resp) => {
    let Id = req.params.id;
    let data = await dalUserJson.getUserById(Id);
    console.log(data, 'userJson has been recived by id :)')
    return resp.json(data);
});


router.route('/').post(async (req, resp) => {
    let newUserJson = req.body;
    console.log("controller", newUserJson);
    let data = await dalUserJson.addUser(newUserJson)
    console.log('userJson has been added :)')
    return resp.json(data)

});

router.route('/:id').put(async (req, resp) => {
    let id = req.params.id;
    let savedUsersJson = req.body;
    let status = await dalUserJson.updateUser(savedUsersJson);
    console.log('userJson has been updated :)')
    return resp.json(status)
})

router.route('/:id').delete(async (req, resp) => {
    let id = req.params.id;
    let status = await dalUserJson.deleteUser(id)
    console.log('user is deleted :) ')
    return resp.json(status);
})

module.exports = router;

