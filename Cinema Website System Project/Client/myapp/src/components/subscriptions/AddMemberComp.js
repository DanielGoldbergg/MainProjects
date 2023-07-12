import { useState } from "react"
import UtilsMembers from "../../utils/Movies/UtilsMembers"


export const AddMemberComp = (props) => {
    const [member, SetMember] = useState({})
    let loggedUser = JSON.parse(sessionStorage.getItem("user"))

    const NewMember = async () => {
        await UtilsMembers.CreateMember(member)
        props.history.push("/main/SubscriptionManager")
    }
    const GoToAllMembers = () => {
        props.history.push("/main/SubscriptionManager")
    }
    return (
        <div style={{ border: 'solid black 4px', borderRadius: '20px', width: "600px", marginLeft: "32%", marginBottom: "10px", padding: "15px", backgroundColor: "gray" }}>
            <h2>Weolcome{loggedUser.name}</h2>
            <h2>Add new Member</h2>
            Name:<input type="text" onChange={e => SetMember({ ...member, Name: e.target.value })} /><br />
            Email:<input type="text" onChange={e => SetMember({ ...member, Email: e.target.value })} /><br />
            City:<input type="text" onChange={e => SetMember({ ...member, City: e.target.value })} /><br />
            <input type="button" value="Cancel" onClick={GoToAllMembers} />
            <input type="button" value="Save" onClick={NewMember} />
        </div>
    )
}