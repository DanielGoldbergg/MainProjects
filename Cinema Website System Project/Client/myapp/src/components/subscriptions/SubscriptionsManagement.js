import { Route, Switch } from "react-router-dom"
import { AllMembersComp } from "./AllMembersComp"
import { AddMemberComp } from "./AddMemberComp"
import { EditMemberComp } from "./EditMemberComp"

export const SubscriptionsmanagementComp = (props) => {
    let loggedUser = JSON.parse(sessionStorage.getItem("user"))
    const GoToAllMembers = () => {
        props.history.push("/main/SubscriptionManager")
    }
    const GoToAddMember = () => {
        props.history.push("/main/SubscriptionManager/addmember")
    }

    return (
        <div style={{ border: '3px solid black', backgroundColor: '#404040' }}>
            <h2>Subscriptions management</h2>
            <h4> Logged as: {loggedUser.name}</h4>
            <h6>enjoy yourt say :)</h6><br />
            <input type="button" value="All members" onClick={GoToAllMembers} />
            {loggedUser.permissions.includes("Create Subscriptions") && <input type="button" value="Add member" onClick={GoToAddMember} />}
            <Switch>
                <Route exact path="/main/SubscriptionManager" component={AllMembersComp} />
                <Route path="/main/SubscriptionManager/addmember" component={AddMemberComp} />
                <Route path="/main/SubscriptionManager/editmember" component={EditMemberComp} />
            </Switch>
        </div>
    )
}