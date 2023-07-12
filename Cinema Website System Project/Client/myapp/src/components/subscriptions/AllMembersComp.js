import { useEffect, useState } from "react"
import UtilsMembers from "../../utils/Movies/UtilsMembers"
import { MemberComp } from "./MemberComp"

export const AllMembersComp = (props) => {
    const [trigger, setTrigger] = useState(false) // for a naw render when the user clicked delete button
    const [members, setMembers] = useState([])
    useEffect(() => {

        let componentMounted = true;

        const GetAllMembers = async () => {
            let membersFromDb = await UtilsMembers.GetAllmembers()
            if (componentMounted) {
                setMembers(membersFromDb)
            }
        }
        GetAllMembers()
        return () => {
            componentMounted = false;
        }
    }, [trigger])

    let membersToRender = members.map(member => {
        return (<MemberComp key={member._id} member={member} awaking={data => { setTrigger(!trigger) }} />)
    })
    return (
        <div>
            <h3>all member</h3>
            {membersToRender}
        </div>
    )
}