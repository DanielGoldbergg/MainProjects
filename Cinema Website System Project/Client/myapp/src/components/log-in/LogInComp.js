import { useLayoutEffect, useState } from "react"
import { Link } from "react-router-dom"
import UserLogin from "../../utils/Users/UserLogin"
import axios from 'axios'

export const LoginComp = (props) => {

    const [username, setUsernaem] = useState('')
    const [password, setpassword] = useState('')
    const [isUser, setIsUser] = useState(false)
    const [isAdmin, setIsAdmin] = useState(false)


    const logIn = async () => {
        let users = await UserLogin.GetAllUsers()
        users.forEach(async user => {
            if (user.UserName === username && user.Password === password) {
                setIsUser(false)
                let PermossionsById = await axios.get(`http://localhost:8001/api/premissionJson/${user._id}`)
                let UserdataById = await axios.get(`http://localhost:8001/api/userJson/${user._id}`)
                sessionStorage.setItem("user", JSON.stringify({ name: UserdataById.data.FirstName + ' ' + UserdataById.data.LastName, SessionTimeOut: UserdataById.data.SessionTimeOut, permissions: PermossionsById.data.permissions }))
                props.history.push('/main')
            }
            else {
                setIsUser(true)
            }
        })
        if (isUser == true) {
            alert('The password is wrong')
            setIsUser(false)
        }
    }

    return (
        <div style={{ border: '2px solid red' }}>
            username: <input type="text" onChange={e => setUsernaem(e.target.value)} /><br />
            password:<input type="text" onChange={e => setpassword(e.target.value)} /><br />

            <input type='button' value='log in' onClick={logIn} /><br />

            <Link to='/createacoount'> create acoount </Link>
        </div>
    )
}