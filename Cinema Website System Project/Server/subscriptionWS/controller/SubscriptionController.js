const express = require('express');
const SubscriptionBl = require('../model/business logic/SubscriptionBl')


const router = express.Router();
router.route('/').get(async (req, resp) => {
    let data = await SubscriptionBl.getAllSubscriptions();
    return resp.json(data)
});

router.route('/:id').get(async (req, resp) => {
    let Id = req.params.id;
    let data = await SubscriptionBl.GetSubscriptionById(Id);
    return resp.json(data);
});

router.route('/').post(async (req, resp) => {
    let newSubscription = req.body;
    console.log("controller", newSubscription);
    let data = await SubscriptionBl.addSubscription(newSubscription)
    return resp.json(data)
});

router.route('/:id').put(async (req, resp) => {
    let id = req.params.id;
    let Subscription = req.body;
    let status = await SubscriptionBl.updateSubscription(id, Subscription);
    return resp.json(status)
})

router.route('/:id').delete(async (req, resp) => {
    let id = req.params.id;
    let status = await SubscriptionBl.deleteSubscription(id)
    return resp.json(status);
})


module.exports = router;

