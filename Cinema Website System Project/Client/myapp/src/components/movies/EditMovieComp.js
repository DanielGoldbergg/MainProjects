import { useHistory } from "react-router"
import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import UtilsMovies from "../../utils/Movies/UtilsMovies"

export const EditMovieComp = (props) => {
    let location = useLocation()
    let history = useHistory()
    const [movie, setMovie] = useState({ Name: '', Genres: '', Premiered: '', Image: '' })
    const [dataSessions] = useState(JSON.parse(sessionStorage.getItem("user")))
    const [movieName, setMovieName] = useState()

    useEffect(() => {
        const GetMovieById = async () => {
            let movie = await UtilsMovies.GetMovieById(location.id)
            let Premiered = movie.Premiered;
            setMovie({ ...movie, Premiered: Premiered })
            setMovieName(movie.Name)
        }
        GetMovieById()
    }, [location.id])

    const updateMovie = async () => {
        if (movie.Premiered === '') {
            alert("Entar a date")
        }
        else {
            await UtilsMovies.UpdateMovieById(location.id, movie)
            history.push(`/main/MoviesManagement/${location.id}`)

        }
    }
    const Cancel = async () => {
        await UtilsMovies.UpdateMovieById(location.id, movie)
        history.push(`/main/MoviesManagement`)
    }




    return (
        <div style={{ border: 'solid black 4px', borderRadius: '20px', width: "600px", marginLeft: "32%", marginBottom: "10px", padding: "15px", backgroundColor: "gray" }}>
            <h3>Hi {dataSessions.name}</h3>
            <h2>Edit movie {movieName}</h2>
            <b>Name:</b><input type="text" value={movie.Name} onChange={e => { setMovie({ ...movie, Name: e.target.value }) }} /> <br />
            <b>Genres:</b><input type="text" value={movie.Genres} onChange={e => { setMovie({ ...movie, Genres: [e.target.value] }) }} /><br />
            <b>image url:</b><input type="text" value={movie.Image} onChange={e => { setMovie({ ...movie, Image: e.target.value }) }} /><br />
            <b>Premiererd:</b> <input type="date" value={movie.Premiered} onChange={e => { setMovie({ ...movie, Premiered: e.target.value }) }} /><br />
            <input type="button" value="Cancel" onClick={Cancel} />
            <input type="button" value="Update" onClick={updateMovie} />
        </div>
    )
}