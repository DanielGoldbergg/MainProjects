

import { Route, Switch, Link } from 'react-router-dom'

import UsersManagmentComp from './users/UsersManagmentComp'
import { MoviesManagementComp } from './movies/MoviesManagment'
import { SubscriptionsmanagementComp } from './subscriptions/SubscriptionsManagement'
import { useEffect, useState } from 'react'

export default function MainPageComp(props) {




    let loggedUser = JSON.parse(sessionStorage.getItem("user"))
    let [CleareTimeOut, setTimeOut] = useState()



    const Logout = () => {
        clearTimeout(CleareTimeOut)
        sessionStorage.removeItem("user")
        props.history.push('/')
    }


    useEffect(() => {
        let TimeOut = setTimeout(() => {
            alert("Out of time")
            sessionStorage.removeItem("user")
            props.history.push('/')

        }, loggedUser.SessionTimeOut * 60000)
        setTimeOut(TimeOut)

    }, [loggedUser.SessionTimeOut, props.history])





    const goToManageUser = () => {

        console.log('User loaded userManager ')
        props.history.push('/main/UserManager')

    }

    const goToMovies = () => {

        console.log('User loaded userManager ')
        props.history.push('/main/MoviesManagement')

    }

    const GoToSubscriptionsManagement = () => {
        props.history.push("/main/SubscriptionManager")
    }


    return (
        <div style={{ backgroundColor: '#312D2F' }}>
            <h5 style={{ border: '3px solid black', backgroundColor: 'gray' }}>logged in as:{loggedUser.name}. status:{loggedUser.permissions[0]}</h5>
            <h1>Main Page</h1>

            {loggedUser.permissions.includes("Admin") && <input type="button" value="Users managment" onClick={goToManageUser} />}
            {loggedUser.permissions.includes("View Movies") && <input type="button" value="Movies" onClick={goToMovies} />}
            {loggedUser.permissions.includes("View Subscriptions") && <input type="button" value="Subscriptions" onClick={GoToSubscriptionsManagement} />}
            <input type='button' value='Logout' onClick={Logout} />

            <Switch>

                <Route path="/main/UserManager" component={UsersManagmentComp} />
                <Route path="/main/MoviesManagement" component={MoviesManagementComp} />
                <Route path="/main/SubscriptionManager" component={SubscriptionsmanagementComp} />

            </Switch>

        </div>
    )
}