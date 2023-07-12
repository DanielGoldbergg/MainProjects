
import { Route, Switch } from "react-router-dom"
import { AllMoviesComp } from "./AllMoviesComp"
import { EditMovieComp } from "./EditMovieComp"
import { AddMoviesComp } from "./AddMoviesComp"

export const MoviesManagementComp = (props) => {
    let loggedUser = JSON.parse(sessionStorage.getItem("user"))

    const GoToAllMovies = () => {
        if (props.match.url === '/main/MoviesManagement' && props.match.isExact === true) {
            props.history.push('/main/MoviesManagement/:id')
        }
        else {
            props.history.push('/main/MoviesManagement')
        }
    }

    const GoToAddUserOption = () => {
        props.history.push('/main/moviesmanagement/:id/addmovies')
    }

    let AddMovie = loggedUser.permissions.includes("Create Movies") && <input type="button" value="Add movies" onClick={GoToAddUserOption} />
    return (
        <div style={{ border: '3px solid black', backgroundColor: '#404040' }} >
            <h2>movies management</h2>
            <h4> Logged as: {loggedUser.name}</h4>
            <h6>enjoy yourt say :)</h6>
            <input type="button" value="All movies" onClick={GoToAllMovies} />
            {AddMovie}
            <Switch>
                <Route exact path='/main/moviesmanagement' component={AllMoviesComp} />
                <Route exact path='/main/moviesmanagement/:id' component={AllMoviesComp} />
                <Route path='/main/moviesmanagement/:id/editmovie' component={EditMovieComp} />
                <Route path='/main/moviesmanagement/:id/addmovies' component={AddMoviesComp} />
            </Switch>
        </div>
    )
}