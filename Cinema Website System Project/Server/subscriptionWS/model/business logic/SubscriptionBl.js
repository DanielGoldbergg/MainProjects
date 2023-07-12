const Subscription = require('../model/SubscriptionModel')

const getAllSubscriptions = () => {
    return new Promise((resolve, reject) => {
        Subscription.find({}, (err, data) => {
            if (err) {
                reject(err);
            }
            else {
                resolve(data);
            }
        });
    });
}

const GetSubscriptionById = (SubscriptionId) => {
    return new Promise((resolve, reject) => {
        Subscription.findById(SubscriptionId, (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data)
            }
        })
    })
}

const addSubscription = (newSubscription) => {
    console.log("BL", newSubscription);
    return new Promise((resolve, reject) => {
        let SubscriptionToSave = new Subscription({
            MemberId: newSubscription.MemberId,
            Movies: newSubscription.Movies



        });
        SubscriptionToSave.save(err => {
            if (err) {
                reject(err);
            }
            else {
                resolve(SubscriptionToSave);
            }
        })
    });
}

const updateSubscription = (SubscriptionId, SubscriptionUpdate) => {
    return new Promise((resolve, reject) => {

        Subscription.findByIdAndUpdate(SubscriptionId, {
            MemberId: SubscriptionUpdate.MemberId,
            Movies: SubscriptionUpdate.Movies




        }, err => {
            if (err) {
                reject(err);
            } else {
                resolve("Updated Subscription")
            }
        })

    })
}

const deleteSubscription = (SubscriptionId) => {
    return new Promise((resolve, reject) => {
        Subscription.findByIdAndDelete(SubscriptionId, err => {
            if (err) {
                reject(err);
            }
            else {
                resolve("Deleted Subscription")
            }
        })
    })
}


module.exports = { getAllSubscriptions, GetSubscriptionById, addSubscription, updateSubscription, deleteSubscription }