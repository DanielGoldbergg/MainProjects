import { useEffect, useState } from "react"
import PermissionsUtils from '../../utils/Users/UtilsJSONpermissions'
import UsersUtils from '../../utils/Users/UtilsJSONusers'
import { useHistory } from "react-router-dom"
import axios from "axios"

export default function UserComp(props) {

    let history = useHistory()
    const [Permissions, SetPermissions] = useState({ Permissions: [] })
    const [UserData, SetUserData] = useState({ FirstName: '', LastName: '', CreatedDate: '', SessionTimeOut: '' })
    useEffect(() => {
        let componentMounted = true;
        const GetUserData = async () => {
            let permissions = await PermissionsUtils.GetPermissionById(props.id)
            let dataOfUser = await UsersUtils.GetUserById(props.id)
            if (componentMounted) {
                SetPermissions(permissions)
                SetUserData(dataOfUser)
            }
        }
        GetUserData()

        return () => componentMounted = false
    }, [props.id])

    const GoToEditPage = () => {
        history.push({
            pathname: '/main/UserManager/edituser',
            id: props.id
        })

    }

    const DeleteUser = async () => {
        await PermissionsUtils.DeletePermissinoById(props.id)
        await UsersUtils.DeleteUserById(props.id)
        await axios.delete(`http://localhost:8001/api/users/${props.id}`)
        props.awaking()
    }

    return (
        <div style={{ border: '5px solid black', borderRadius: '20px', width: "600px", marginLeft: "32%", marginBottom: "10px", padding: "15px", backgroundColor: "gray" }} >
            <b>Name:</b> {UserData.FirstName} {UserData.LastName}<br />
            <b>userName:</b> {props.user.UserName}<br />
            <b> create Data</b> : {UserData.CreatedDate}<br />
            <b>sessionTimeOut:</b> {UserData.SessionTimeOut}<br />
            <b>permissions:</b> {Permissions.permissions}<br />
            <input type="button" value="Edit" onClick={GoToEditPage} />
            <input type="button" value="Delete" onClick={DeleteUser} />



        </div>
    )
}
