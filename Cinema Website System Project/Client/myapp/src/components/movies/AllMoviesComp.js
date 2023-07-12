import { useEffect, useState } from "react"
import { MovieComp } from "./MovieComp"
import UtilsMovies from "../../utils/Movies/UtilsMovies"
import { FindMovieComp } from "./FindMovieComp"


export const AllMoviesComp = (props) => {

    const [movies, setMovies] = useState([])
    const [trigger, setTrigger] = useState(false) // for a naw render when the user clicked delete button

    useEffect(() => {

        let componentMounted = true;
        const GetMoviesToState = async () => {
            if (props.match.params.id === ":id" || props.match.url === '/main/MoviesManagement') {
                let AllMovies = await UtilsMovies.GetAllMovies()
                componentMounted && setMovies(AllMovies)
            }
            else {
                let AllMovies = await UtilsMovies.GetMovieById(props.match.params.id)
                componentMounted && setMovies([AllMovies])
            }

        }
        GetMoviesToState()
        return () => {
            componentMounted = false;
        }

    }, [trigger, props.match.params.id, props.match.url])

    let moviesToRender = movies.map(movie => {
        return (<MovieComp key={movie._id} id={movie._id} movie={movie} awaking={(data) => setTrigger(!trigger)}  ></MovieComp>)
    })
    return (
        <div>
            <FindMovieComp ChangMovieArr={data => { setMovies(data) }} />
            <h2>all movies</h2>
            {moviesToRender}
        </div>)
}