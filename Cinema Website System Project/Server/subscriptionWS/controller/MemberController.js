const express = require('express');
const MemberBl = require('../model/business logic/MemberBl')


const router = express.Router();
router.route('/').get(async (req, resp) => {
    let data = await MemberBl.getAllMembers();
    return resp.json(data)
});

router.route('/:id').get(async (req, resp) => {
    let Id = req.params.id;
    let data = await MemberBl.GetMemberById(Id);
    return resp.json(data);
});

router.route('/').post(async (req, resp) => {
    let newMember = req.body;
    console.log("controller", newMember);
    let data = await MemberBl.addMember(newMember)
    return resp.json(data)
});

router.route('/:id').put(async (req, resp) => {
    let id = req.params.id;
    let member = req.body;
    let status = await MemberBl.updateMember(id, member);
    return resp.json(status)
})

router.route('/:id').delete(async (req, resp) => {
    let id = req.params.id;
    let status = await MemberBl.deleteMember(id)
    return resp.json(status);
})


module.exports = router;

