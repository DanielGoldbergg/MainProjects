import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import UtilsJsonUsers from "../../utils/Users/UtilsJSONusers"
import UtilsJSONpermissions from '../../utils/Users/UtilsJSONpermissions'
import UserLogin from "../../utils/Users/UserLogin"

export const EditUserComp = (props) => {
    let location = useLocation()

    const [userData, SetUserData] = useState({ FirstName: "", LastName: "", SessionTimeOut: '', CreatedDate: "", id: "" },)
    const [OriginalUserName, setOriginalUserName] = useState("")
    const [userPermissions, setPermissions] = useState([])
    const [userDataDB, SetUsername] = useState({ UserName: '', password: '' })
    const [dataSession] = useState(JSON.parse(sessionStorage.getItem("user")))
    const [name, setName] = useState()

    useEffect(() => {
        const GetUserData = async () => {
            let newUserdata = await UtilsJsonUsers.GetUserById(location.id)
            let newUserPermissinos = await UtilsJSONpermissions.GetPermissionById(location.id)
            let userName = await UserLogin.GetUserById(location.id)
            SetUsername(userName)
            setOriginalUserName(userName.UserName)
            newUserPermissinos.permissions && setPermissions(newUserPermissinos.permissions)
            SetUserData(newUserdata)
            setName(`${newUserdata.FirstName} ${newUserdata.LastName}`)
        }
        GetUserData()
    }, [location.id])


    const UpdateData = async (e) => {
        e.preventDefault();
        let doesUserExist = false
        let AllUsers = await UserLogin.GetAllUsers()
        AllUsers.forEach(user => {
            if (user.UserName === userDataDB.UserName && userDataDB.UserName !== OriginalUserName) {
                alert("Username is already in use")
                doesUserExist = true
            }
        });
        if (doesUserExist === false) {
            let id = userDataDB._id
            await UtilsJsonUsers.UpDateUserDataById(id, userData)
            await UtilsJSONpermissions.UpDatePermissionById(id, { _id: id, permissions: userPermissions })
            await UserLogin.UpDateUserInDbById(id, userDataDB)
            props.history.push("/main/UserManager")

        }
    }



    const ChangePermissionsSub = (e) => {
        if (e.target.value === "view Subscriptions" && !userPermissions.includes("view Subscriptions")) {
            setPermissions([...userPermissions, e.target.value])
        }
        else if (e.target.value === "view Subscriptions") {
            if (!userPermissions.includes("Create Subscriptions") &&
                !userPermissions.includes("Update Subscriptions") &&
                !userPermissions.includes("Delete Subscriptions")) {
                DeletePremission(e.target.value)

            }
        }
        else {
            if (userPermissions.includes(e.target.value)) {
                DeletePremission(e.target.value)
            }
            else if (userPermissions.includes("view Subscriptions")) {
                setPermissions([...userPermissions, e.target.value])
            }
            else {
                setPermissions([...userPermissions, "view Subscriptions", e.target.value])
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
                DeletePremission(e.target.value)
            }
        }
        else {
            if (userPermissions.includes(e.target.value)) {
                DeletePremission(e.target.value)
            }
            else if (userPermissions.includes("View Movies")) {
                setPermissions([...userPermissions, e.target.value])
            }
            else {
                setPermissions([...userPermissions, "View Movies", e.target.value])
            }
        }
    }



    const DeletePremission = (permissions) => {

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
            <h3>  Hi {dataSession.name}</h3>
            <h2>Edit User {name} </h2>
            First Name:<input type="text" value={userData.FirstName} onChange={e => { SetUserData({ ...userData, FirstName: e.target.value }) }} /><br />
            Last Name: <input type="text" value={userData.LastName} onChange={e => { SetUserData({ ...userData, LastName: e.target.value }) }} /><br />
            UserName: <input type="text" value={userDataDB.UserName} onChange={e => { SetUsername({ ...userDataDB, UserName: e.target.value }) }} /><br />
            Created Date : {userData.createdDate}<br />
            Session Time Out: <input type="number" value={userData.SessionTimeOut} onChange={e => { SetUserData({ ...userData, SessionTimeOut: e.target.value }) }} /><br />
            <h2>Movies:</h2>
            View Movies <input type="checkbox" value="View Movies" checked={userPermissions.includes("View Movies")} onChange={ChangePermissionsMovies} /><br />
            Create Movies <input type="checkbox" value="Create Movies" checked={userPermissions.includes("Create Movies")} onChange={ChangePermissionsMovies} /><br />
            Update Movies <input type="checkbox" value="Update Movies" checked={userPermissions.includes("Update Movies")} onChange={ChangePermissionsMovies} /><br />
            Delete Movies <input type="checkbox" value="Delete Movies" checked={userPermissions.includes("Delete Movies")} onChange={ChangePermissionsMovies} /><br />
            <h2> Subscriptions:</h2>
            View Subscriptions <input type="checkbox" value="View Subscriptions" checked={userPermissions.includes("view Subscriptions")} onChange={ChangePermissionsSub} /> <br />
            Create Subscriptions <input type="checkbox" value="Create Subscriptions" checked={userPermissions.includes("Create Subscriptions")} onChange={ChangePermissionsSub} /><br />
            Update Subscriptions<input type="checkbox" value="Update Subscriptions" checked={userPermissions.includes("Update Subscriptions")} onChange={ChangePermissionsSub} /> <br />
            Delete Subscriptions <input type="checkbox" value="Delete Subscriptions" checked={userPermissions.includes("Delete Subscriptions")} onChange={ChangePermissionsSub} /><br />

            <input type="button" value="Cancel" onClick={Cancel} />
            <input type="submit" value="update" onClick={UpdateData} />

        </div >
    )

}
