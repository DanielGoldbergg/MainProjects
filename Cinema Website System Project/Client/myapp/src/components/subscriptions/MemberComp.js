import { MoviesWatchedComp } from "./MoviesWatchedComp"
import { DeleteMember } from "../../utils/Movies/DeleteMemberUtils"
import { useHistory } from "react-router"
export const MemberComp = (props) => {
    let loggedUser = JSON.parse(sessionStorage.getItem("user"))
    let history = useHistory()

    const deleteMember = async () => {
        await DeleteMember(props.member._id)
        props.awaking()
    }
    const GoToEditPage = () => {
        history.push({
            pathname: `/main/SubscriptionManager/editmember`,
            id: props.member._id
        })
    }



    return (
        <div style={{ border: '7px solid black', borderRadius: '20px', margin: "10px", backgroundColor: 'gray', width: "700px", marginLeft: "30%" }}>

            <h4>name: {props.member.Name}</h4>
            {loggedUser.permissions.includes("Update Subscriptions") && <input type="button" value="Edit member" onClick={GoToEditPage} />}
            {loggedUser.permissions.includes("Delete Subscriptions") && <input type="button" value="Delete member" onClick={deleteMember} />}
            <br />
            <b>Emeil:</b> {props.member.Email} <br />
            <b>City:</b> {props.member.City}<br />
            <MoviesWatchedComp id={props.member._id} />
        </div>
    )
}