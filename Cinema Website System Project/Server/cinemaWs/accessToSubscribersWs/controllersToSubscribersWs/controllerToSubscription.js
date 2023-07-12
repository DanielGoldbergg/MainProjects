const express = require('express');
const DalSubscription = require('../Dal/dalSubscription');


const router = express.Router();
router.route('/').get(async (req, resp) => {
    let data = await DalSubscription.GetAllSubscribers();
    return resp.json(data)
});

router.route('/:id').get(async (req, resp) => {
    let Id = req.params.id;
    let data = await DalSubscription.GetAllSubscriberssById(Id);
    return resp.json(data);
});

router.route('/').post(async (req, resp) => {
    let newSubscription = req.body;
    console.log("controller", newSubscription);
    let data = await DalSubscription.createSubscribers(newSubscription)
    return resp.json(data)
});

router.route('/:id').put(async (req, resp) => {
    let id = req.params.id;
    let savedSubscription = req.body;
    let status = await DalSubscription.updateSubscribers(id, savedSubscription);
    return resp.json(status)
})

router.route('/:id').delete(async (req, resp) => {
    let id = req.params.id;
    let status = await DalSubscription.DeleteSubscribers(id)
    return resp.json(status);
})




module.exports = router;

