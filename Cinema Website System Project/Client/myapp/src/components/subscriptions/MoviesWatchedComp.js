import { useEffect, useState } from "react"
import Utils from '../../utils/Movies/GetMoviesOfMemberUtils'
import { Link } from "react-router-dom"
import { SubscriptionComp } from "./SubscriptionComp"

export const MoviesWatchedComp = (props) => {
    const [movies, setMovies] = useState([])


    const [IdsArr, SetIds] = useState([])

    const [isSubWatchedRender, setAddWatchedRender] = useState(false)
    const [trigger, setTrigger] = useState(false)
    useEffect(() => {
        let componentMounted = true;

        const createMoviesList = async () => {
            let MoviesList = await Utils.GetMoviesOfmember(props.id)
            if (MoviesList.length > 0) {
                let moviesList = MoviesList.map((movie, i) => {
                    return (<li key={i}> <Link to={`/main/MoviesManagement/${movie.id}`} > {movie.movie} </Link> - {movie.date} </li>)

                })
                componentMounted && setMovies(moviesList)
                let Ids = MoviesList.map(movie => movie.id)
                componentMounted && SetIds(Ids)
            }
        }
        createMoviesList()

        return () => {
            componentMounted = false
        }
    }, [trigger, props.id])

    const DisplaySubscribeOption = () => {
        setAddWatchedRender(!isSubWatchedRender)
    }

    let subscribe = isSubWatchedRender && <SubscriptionComp Ids={IdsArr} idMember={props.id} HideenAddsubscribeOption={data => { setAddWatchedRender(!isSubWatchedRender) }} awaking={data => { setTrigger(!trigger) }} />
    return (
        <div style={{ border: '4px #312D2F solid', borderRadius: '10px', margin: "10px", backgroundColor: '#4A3842' }} >
            <u> <h3>Movies Watched</h3></u>
            <input type="button" value="Add a movie to subscription" onClick={DisplaySubscribeOption} /><br />
            {subscribe}
            {movies}
        </div>
    )
}