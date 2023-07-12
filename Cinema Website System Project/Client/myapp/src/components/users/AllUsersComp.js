import { useEffect, useState } from "react"
import UserComp from "./UserComp"
import UserLogin from "../../utils/Users/UserLogin"

export const AllUsersComp = (props) => {
    const [users, setUsers] = useState([])
    const [trigger, setTrigger] = useState(false)


    useEffect(() => {
        let componentMounted = true

        const createUsersComp = async () => {
            let AllUsers = await UserLogin.GetAllUsers()
            let users = AllUsers.map((user) => {
                return (<UserComp key={user._id} id={user._id} user={user} awaking={data => componentMounted && setTrigger(!trigger)} />)
            })

            componentMounted && setUsers(users)
        }
        createUsersComp()
        return () => {
            componentMounted = false;
        }
    }, [trigger])




    return (

        <div>
            {users}
        </div>
    )

}