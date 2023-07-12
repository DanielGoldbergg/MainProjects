import { useEffect, useState } from "react"
import UtilsMovies from '../../utils/Movies/UtilsMovies'
import { AddMovieToSubscriptions } from '../../utils/Movies/AddMovieToSubscription'


export const SubscriptionComp = (props) => {
    const [movies, setMovies] = useState([])
    const [idMovie, setIdMovie] = useState('')
    const [DateMovie, setDateMovie] = useState('')

    useEffect(() => {
        let componentMounted = true;

        const CreateMoviesArrForSelection = async () => {
            let Allmovies = await UtilsMovies.GetAllMovies()
            let newMoviesArr = Allmovies.filter(movie => !props.Ids.includes(movie._id))
            if (newMoviesArr.length > 0 && componentMounted) {
                setMovies(newMoviesArr)
                setIdMovie(newMoviesArr[0]._id)
            }
            else {
                alert("There are no movies in the system")
                props.HideenAddsubscribeOption()
            }
        }
        CreateMoviesArrForSelection()

        return () => {
            componentMounted = false
        }
    }, [props.Ids, props])

    const subscribe = async () => {
        if (DateMovie === "") {
            alert("Enter a date")
        }
        else {
            await AddMovieToSubscriptions(props.idMember, idMovie, DateMovie)
            props.HideenAddsubscribeOption()
            props.awaking()
        }
    }
    let moviesOption = movies.map((movie) => {
        return (<option key={movie._id} value={movie._id} >{movie.Name}</option>)
    })

    return (
        <div style={{ border: 'solid 2px red', borderRadius: '20px', margin: "20px", backgroundColor: 'lightcyan' }}>
            <h3>Add  Movie</h3>
            <input style={{ width: "300px" }} type="date" onChange={e => setDateMovie(e.target.value)} min={new Date().toISOString().split("T")[0]} />
            <select value={idMovie} onChange={e => setIdMovie(e.target.value)}>
                {moviesOption}
            </select>
            <input type="button" value="subscribe" onClick={subscribe} />
        </div>
    )
}
