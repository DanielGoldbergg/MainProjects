import { useEffect, useState } from "react"
import Utils from '../../utils/Movies/UtilsSubscriptionsWatched'
import { Link } from "react-router-dom"

export const SubscriptionsWatchedComp = (props) => {
    const [SubscriberWatched, setsub] = useState([])
    useEffect(() => {

        let componentMounted = true;
        const GetWatchedSubscriptions = async () => {
            let SubscriptionWatchedBy = await Utils.GetSubscriptionsArr(props.id)
            if (componentMounted) {
                setsub(SubscriptionWatchedBy)
            }
        }
        GetWatchedSubscriptions()

        return () => {
            componentMounted = false;
        }
    }, [props.id])

    let SubscribeToRender = SubscriberWatched.map((sub, index) => {
        return (<li key={index}> <Link to="/main/SubscriptionManager"> {sub.Name} </Link> - {sub.date} </li>)
    })
    return (
        <div style={{ border: "solid 4px #E5B961", borderRadius: '20px', margin: '15px', backgroundColor: "#4A3842" }}>
            <u><h3>Subscriptions Watched</h3></u>
            <ul>
                {SubscribeToRender}
            </ul>
        </div>
    )
}