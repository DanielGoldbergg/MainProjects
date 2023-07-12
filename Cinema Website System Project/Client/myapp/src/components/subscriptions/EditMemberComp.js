import { useEffect, useState } from "react"
import { useHistory } from "react-router"
import { useLocation } from "react-router-dom"
import UtilsMembers from "../../utils/Movies/UtilsMembers"

export const EditMemberComp = (props) => {
    let loggedUser = JSON.parse(sessionStorage.getItem("user"))
    let history = useHistory()
    let location = useLocation()

    const [member, setMember] = useState({ Name: '', Email: '', City: '' })
    const [name, setName] = useState()


    useEffect(() => {
        const GetMemberById = async () => {
            let MemberFromDB = await UtilsMembers.GetMemberById(location.id) //<==== recive member info acording to id
            setMember(MemberFromDB)
            setName(MemberFromDB.Name)
        }
        GetMemberById()
    }, [location.id])
    const GoToAllMembers = () => {
        history.push("/main/SubscriptionManager")
    }
    const UpdateMember = async () => {
        await UtilsMembers.UpdateMemberById(location.id, member)
        history.push("/main/SubscriptionManager")
    }
    return (
        <div style={{ border: 'solid black 4px', borderRadius: '20px', width: "600px", marginLeft: "32%", marginBottom: "10px", padding: "15px", backgroundColor: "gray" }}>
            <h3> hi {loggedUser.name}</h3>
            <h2>Edit Member {name}</h2>
            Name:<input type="text" value={member.Name} onChange={e => setMember({ ...member, Name: e.target.value })} /><br />
            Email:<input type="text" value={member.Email} onChange={e => setMember({ ...member, Email: e.target.value })} /><br />
            City:<input type="text" value={member.City} onChange={e => setMember({ ...member, City: e.target.value })} /><br />
            <input type="button" value="Cancel" onClick={GoToAllMembers} />
            <input type="button" value="Update" onClick={UpdateMember} />
        </div>
    )

}