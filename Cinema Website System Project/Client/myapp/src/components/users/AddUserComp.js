import UtilsJsonUsers from "../../utils/Users/UtilsJSONusers"
import UtilsJSONpermissions from '../../utils/Users/UtilsJSONpermissions'
import UserLogin from "../../utils/Users/UserLogin"
import { useState } from "react"


export const AddUserComp = (props) => {

    const [userName, SetUsername] = useState('')
    const [userData, SetUserData] = useState({})
    const [userPermissions, setPermissions] = useState([])
    const [dataSessions] = useState(JSON.parse(sessionStorage.getItem("user")))


    // Does not allow the entry of an existing username

    const SaveData = async (e) => {
        e.preventDefault();
        let isUserNameExists = false
        let AllUsers = await UserLogin.GetAllUsers()
        AllUsers.forEach(user => {
            if (user.UserName === userName) {
                alert("Username already exists")
                isUserNameExists = true
            }
        });

        if (isUserNameExists === false) {
            let userFromDB = await UserLogin.CreateUserData({ UserName: userName })
            let Id = userFromDB._id;
            let nowDate = new Date();
            let date = nowDate.getFullYear() + '/' + (nowDate.getMonth() + 1) + '/' + nowDate.getDate();
            SetUserData({ ...userData, CreatedDate: date, _id: Id })
            await UtilsJSONpermissions.CreatePermission({ _id: Id, permissions: userPermissions })
            await UtilsJsonUsers.CreateUserData({ ...userData, CreatedDate: date, _id: Id })
            props.history.push("/main/UserManager")  // back to allusers page
        }

    }

    const ChangePermissionsSub = (e) => {
        if (e.target.value === "View Subscriptions" && !userPermissions.includes("View Subscriptions")) {
            setPermissions([...userPermissions, e.target.value])
        }
        else if (e.target.value === "View Subscriptions") {
            if (!userPermissions.includes("Create Subscriptions") &&
                !userPermissions.includes("Update Subscriptions") &&
                !userPermissions.includes("Delete Subscriptions")) {
                DeletePermission(e.target.value)
            }
        }
        else {
            if (userPermissions.includes(e.target.value)) {
                DeletePermission(e.target.value)
            }
            else if (userPermissions.includes("View Subscriptions")) {
                setPermissions([...userPermissions, e.target.value])
            }
            else {
                setPermissions([...userPermissions, "View Subscriptions", e.target.value])
            }
        }
    }

    const ChangePermissionsMovies = (e) => {
        if (e.target.value === "View Movies" && !userPermissions.includes("View Movies")) {
            setPermissions([...userPermissions, e.target.value])
        }
        else if (e.target.value === "View Movies") {
            if (!userPermissions.includes("Create Movies") &&
                !userPermissions.includes("Update Movies") &&
                !userPermissions.includes("Delete Movies")) {
                DeletePermission(e.target.value)
            }
        }
        else {
            if (userPermissions.includes(e.target.value)) {
                DeletePermission(e.target.value)
            }
            else if (userPermissions.includes("View Movies")) {
                setPermissions([...userPermissions, e.target.value])
            }
            else {
                setPermissions([...userPermissions, "View Movies", e.target.value])
            }
        }
    }

    const DeletePermission = (permissions) => {

        let newPermmissionsArr = userPermissions.filter(per => {
            return (per !== permissions)
        })
        setPermissions(newPermmissionsArr)
    }

    const Cancel = () => {
        props.history.push("/main/UserManager")
    }
    return (
        <div style={{ border: 'solid black 4px', borderRadius: '20px', width: "600px", marginLeft: "32%", marginBottom: "10px", padding: "15px", backgroundColor: "gray" }}>
            <h3> hi {dataSessions.name}</h3>
            <h2>Add New User</h2>
            First Name:<input type="text" onChange={e => { SetUserData({ ...userData, FirstName: e.target.value }) }} /><br />
            Last Name: <input type="text" onChange={e => { SetUserData({ ...userData, LastName: e.target.value }) }} /><br />
            UserName: <input type="text" onChange={e => { SetUsername(e.target.value) }} /><br />
            Session Time Out: <input type="number" onChange={e => { SetUserData({ ...userData, SessionTimeOut: e.target.value }) }} /><br />
            <h2>Movies:</h2>
            View Movies <input type="checkbox" value="View Movies" checked={userPermissions.includes("View Movies")} onChange={e => { ChangePermissionsMovies(e) }} /><br />
            Create Movies <input type="checkbox" value="Create Movies" checked={userPermissions.includes("Create Movies")} onChange={e => { ChangePermissionsMovies(e) }} /><br />
            Update Movies <input type="checkbox" value="Update Movies" checked={userPermissions.includes("Update Movies")} onChange={e => { ChangePermissionsMovies(e) }} /><br />
            Delete Movies <input type="checkbox" value="Delete Movies" checked={userPermissions.includes("Delete Movies")} onChange={e => { ChangePermissionsMovies(e) }} /><br />
            <h2>Subscriptions:</h2>
            View Subscriptions <input type="checkbox" value="View Subscriptions" checked={userPermissions.includes("View Subscriptions")} onChange={e => { ChangePermissionsSub(e) }} /> <br />
            Create Subscriptions <input type="checkbox" value="Create Subscriptions" checked={userPermissions.includes("Create Subscriptions")} onChange={e => { ChangePermissionsSub(e) }} /><br />
            Update Subscriptions<input type="checkbox" value="Update Subscriptions" checked={userPermissions.includes("Update Subscriptions")} onChange={e => { ChangePermissionsSub(e) }} /><br />
            Delete Subscriptions <input type="checkbox" value="Delete Subscriptions" checked={userPermissions.includes("Delete Subscriptions")} onChange={e => { ChangePermissionsSub(e) }} /><br />
            <input type="button" value="Cancel" onClick={Cancel} />
            <input type="submit" value="Save" onClick={SaveData} />
        </div>
    )
}