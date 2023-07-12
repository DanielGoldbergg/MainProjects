import DalRequest from '../DalHttpRequest/httprequest'
const url = "http://localhost:8001/api/subscriptions"

const GetAllSubscriptions = async () => {
    let subscriptions = await DalRequest.GetAll(url)
    return subscriptions
}

const GetSubscriptionById = async (id) => {
    let subscription = await DalRequest.GetById(url, id)
    return subscription
}

const DeleteSubscription = async (id) => {
    let subscriptionDeleted = await DalRequest.DeletebyId(url, id)
    return subscriptionDeleted;
}

const CreateSubscription = async (obj) => {
    let subscription = await DalRequest.Create(url, obj);
    return subscription
}

const UpdateSubscriptionById = async (id, obj) => {
    let subscriptionUpdated = await DalRequest.UpdateById(url, id, obj)
    return subscriptionUpdated
}

subscriptionsUtils = {
    GetAllSubscriptions, GetSubscriptionById, DeleteSubscription, CreateSubscription, UpdateSubscriptionById
}
export default subscriptionsUtils