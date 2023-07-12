const express = require('express');
const dalPremissionsJson = require('../Dal/dalPremissionsJson');

const router = express.Router();
router.route('/').get(async (req, resp) => {
    let data = await dalPremissionsJson.getAllPremissions();
    console.log(data, 'premissionJson has been recived total :)')
    return resp.json(data)
});

router.route('/:id').get(async (req, resp) => {
    let Id = req.params.id;
    let data = await dalPremissionsJson.getPremissionsById(Id);
    console.log(data, 'premissionsJson has been recived by id :)')
    return resp.json(data);
});


router.route('/').post(async (req, resp) => {
    let newPremissionJson = req.body;
    console.log("controller", newPremissionJson);
    let data = await dalPremissionsJson.addPremissions(newPremissionJson)
    console.log('userJson has been added :)')
    return resp.json(data)

});

router.route('/:id').put(async (req, resp) => {
    let id = req.params.id;
    let savedPremissionJson = req.body;
    let status = await dalPremissionsJson.updatePremissions(id, savedPremissionJson);
    console.log('userPremission has been updated :)')
    return resp.json(status)
})

router.route('/:id').delete(async (req, resp) => {
    let id = req.params.id;
    let status = await dalPremissionsJson.deletePremission(id)
    console.log('premission is deleted :) ')
    return resp.json(status);
})

module.exports = router;