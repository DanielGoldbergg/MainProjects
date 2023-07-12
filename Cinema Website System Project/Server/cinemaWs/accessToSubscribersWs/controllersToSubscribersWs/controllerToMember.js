const express = require('express');
const DalMembers = require('../Dal/dalMembers');


const router = express.Router();
router.route('/').get(async (req, resp) => {
    let data = await DalMembers.GetAllMembers();
    return resp.json(data)
});

router.route('/:id').get(async (req, resp) => {
    let Id = req.params.id;
    let data = await DalMembers.GetAllMemberById(Id);
    return resp.json(data);
});

router.route('/').post(async (req, resp) => {
    let newMember = req.body;
    console.log("controller", newMember);
    let data = await DalMembers.createMember(newMember)
    return resp.json(data)
});

router.route('/:id').put(async (req, resp) => {
    let id = req.params.id;
    let savedMember = req.body;
    let status = await DalMembers.updateMember(id, savedMember);
    return resp.json(status)
})

router.route('/:id').delete(async (req, resp) => {
    let id = req.params.id;
    let status = await DalMembers.DeleteMember(id)
    return resp.json(status);
})


module.exports = router;

