import { useState } from 'react'
import UtilsMovies from "../../utils/Movies/UtilsMovies"

export const AddMoviesComp = (props) => {

    const [movie, setMovie] = useState({ Name: '', Image: '', Genres: '', Premiered: '' })
    const [dataSessions] = useState(JSON.parse(sessionStorage.getItem("user"))) // For the username in storage

    const createMovie = async () => {
        if (movie.Premiered === '') {
            alert("Enter a date")
        }
        else {
            await UtilsMovies.CreateMovie(movie)
            props.history.push('/main/MoviesManagement')
        }
    }
    const Cancel = () => {
        props.history.push('/main/MoviesManagement')
    }

    return (
        <div style={{ border: 'solid black 4px', borderRadius: '20px', width: "600px", marginLeft: "32%", marginBottom: "10px", padding: "15px", backgroundColor: "gray" }}>
            <h3> hi {dataSessions.name}</h3>
            <h2>Add your new movie</h2>
            <h6>Follow the next simple steps :)</h6>
            <b>Name:</b><input type="text" onChange={e => { setMovie({ ...movie, Name: e.target.value }) }} /> <br />
            <b>Genres:</b><input type="text" onChange={e => { setMovie({ ...movie, Genres: [e.target.value] }) }} /><br />
            <b>image url:</b><input type="text" onChange={e => { setMovie({ ...movie, Image: e.target.value }) }} />  <br />
            <b>Premiererd:</b> <input type="date" onChange={e => { setMovie({ ...movie, Premiered: e.target.value }) }} /><br />
            <h6>*Note:Make sure that the "Url" is right or it wont work as intended.</h6>
            <input type="button" value="Cancel" onClick={Cancel} />
            <input type="button" value="Save" onClick={createMovie} />
        </div>
    )
}