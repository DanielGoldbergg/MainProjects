

import { Route, Switch, Link } from 'react-router-dom'
import { LoginComp } from './log-in/LogInComp'
import { useHistory } from 'react-router'
import { CreateacountComp } from './log-in/CreateAcount'
import MainPageComp from './MainPageComp'

export const HostComp = (props) => {

    // let history = useHistory()
    // const displayLogin = () => {
    //     history.push('/login')
    // }

    let his
    return (
        <div style={{ backgroundColor: '#312D2F' }}>
            <h1>Movies subscription-website</h1>
            <Switch>
                <Route exact path="/" component={LoginComp} />
                <Route path="/createacoount" component={CreateacountComp} />
                <Route path="/main" component={MainPageComp} />
            </Switch>
        </div>
    )
}
