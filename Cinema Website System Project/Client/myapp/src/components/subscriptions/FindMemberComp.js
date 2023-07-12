import { useState } from "react"

import UtilsMembers from "../../utils/Movies/UtilsMembers"

export const FindMemberComp = (props) => {
    const [Member, setMemberToFind] = useState('')

    const findMember = async () => {
        let AllMembers = await UtilsMembers.GetAllmembers()
        let MemberToFind = Member.toLocaleLowerCase()
        let newArrMembers = AllMembers.filter(member => member.Name.toLocaleLowerCase().includes(MemberToFind))
        props.ChangeMemberArr(newArrMembers)

    }
    return (
        <div>
            Find Member: <input type="text" value={Member} onChange={e => setMemberToFind(e.target.value)} />
            <input type="button" value="Find" onClick={findMember} />
        </div>
    )
}