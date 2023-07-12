import DalRequest from '../DalhttpRequest/HttpRequest'

export const DeleteMember = async (id) => {
    await DalRequest.DeleteById(`http://localhost:8001/api/members`, id)


    let AllSubscriptions = await DalRequest.GetAll(`http://localhost:8001/api/subscriptions`)
    let oneSubscription = AllSubscriptions.filter(sub => sub.MemberId === id);
    if (oneSubscription.length > 0) {
        await DalRequest.DeleteById(`http://localhost:8001/api/subscriptions`, oneSubscription[0]._id)
    }
}

