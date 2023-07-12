import axios from "axios"
import { Route, Switch } from "react-router-dom"
import { AllUsersComp } from "./AllUsersComp"
import { EditUserComp } from "./EditUsersComp"
import { AddUserComp } from "./AddUserComp"

export default function UsersManagmentComp(props) {
    let loggedUser = JSON.parse(sessionStorage.getItem("user"))

    const DisplayUsers = () => {
        props.history.push("/main/UserManager")
    }

    const GoToAddUserOption = () => {
        props.history.push("/main/UserManager/adduser")
    }

    return (
        <div style={{ border: '3px solid black', backgroundColor: 'gray' }}>
            <h2>Users:</h2>
            <h4> Logged as: {loggedUser.name}</h4>
            <h6>enjoy yourt say :)</h6>
            <input type="button" value="All Users" onClick={DisplayUsers} />
            <input type="button" value="Add  User" onClick={GoToAddUserOption} />

            <Switch>
                <Route exact path="/main/UserManager" component={AllUsersComp} />
                <Route path="/main/UserManager/edituser" component={EditUserComp} />
                <Route path="/main/UserManager/adduser" component={AddUserComp} />
            </Switch>


        </div>


    )
}
