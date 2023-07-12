import { useState } from "react"
import UserLogin from "../../utils/Users/UserLogin"
export const CreateacountComp = (props) => {
    const [userData, setUser] = useState({ UserName: '', Password: '' })

    const CheckIfUserExsistAndUpdate = async () => {
        if (userData.Password !== "") {
            let UserExists = false

            let AllUsers = await UserLogin.GetAllUsers()
            AllUsers.forEach(async user => {
                if (user.UserName === userData.UserName) {
                    UserExists = true;
                    await UserLogin.UpDateUserInDbById(user._id, { ...userData })
                    props.history.push('/')
                    alert('Account has been created')
                }
            });
        }

    }


    return (
        <div>
            <h2>Create account</h2>
            <h6>*please make sure that the username exists</h6>
            <b> UserName :</b> <input type="text" onChange={(e) => setUser({ ...userData, UserName: e.target.value })} /><br />
            <b>Password :</b> <input type="text" onChange={(e) => { setUser({ ...userData, Password: e.target.value }) }} /><br />
            <input type='button' value='submit' onClick={CheckIfUserExsistAndUpdate} />



        </div>
    )
}