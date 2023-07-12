import { SubscriptionsWatchedComp } from "./SubscriptionsWatchedComp"
import Utils from "../../utils/Movies/UtilsSubscriptionsWatched"
import UtilsMovies from "../../utils/Movies/UtilsMovies"
import { useHistory } from "react-router"

export const MovieComp = (props) => {


    let history = useHistory()
    let loggedUser = JSON.parse(sessionStorage.getItem("user"))

    const GoToEditMovieOption = () => {
        if (history.location.pathname.length < 40) {
            history.push({
                pathname: '/main/moviesmanagement/:id/editmovie',
                id: props.id,
                EditFromOneMovie: false
            })
        }
        else {
            history.push({
                pathname: '/main/moviesmanagement/:id/editmovie',
                id: props.id,
                EditFromOneMovie: true
            })
        }
    }

    const DeleteMovie = async () => {
        await UtilsMovies.DeleteMovieFromMoviesColl(props.id)
        await Utils.DeleteMovieInSubscriptions(props.id)
        history.push('/main/MoviesManagement/:id')
        props.awaking()
    }

    return (
        <div style={{ border: '5px solid black', borderRadius: '20px', margin: '20px', backgroundColor: 'gray', width: "700px", marginLeft: '30%' }}>
            <h3 style={{ border: '2px solid #E5B961', backgroundColor: '#4A3842' }}> {props.movie.Name} , {props.movie.Premiered.slice(0, 4)} </h3> <br />
            <b>Genres:</b> {props.movie.Genres.join(', ')}<br />
            {loggedUser.permissions.includes("Update Movies") && <input type="button" value="Edit" onClick={GoToEditMovieOption} />}
            {loggedUser.permissions.includes("Delete Movies") && <input type="button" value="Delete" onClick={DeleteMovie} />}<br />
            <img style={{ border: '6px solid #E5B961' }} src={props.movie.Image} alt="" /><br />
            <SubscriptionsWatchedComp id={props.id} /> <br />
        </div>
    )
}