import { useState } from "react"

import UtilsMovies from "../../utils/Movies/UtilsMovies"

export const FindMovieComp = (props) => {
    const [FindMovie, setFindMovie] = useState('')

    const findMovie = async () => {
        let AllMovies = await UtilsMovies.GetAllMovies()
        let moviesToFind = FindMovie.toLocaleLowerCase()
        let newArrMovies = AllMovies.filter(movie => movie.Name.toLocaleLowerCase().includes(moviesToFind))
        props.ChangMovieArr(newArrMovies)

    }
    return (
        <div>
            Find Movie: <input type="text" value={FindMovie} onChange={e => setFindMovie(e.target.value)} />
            <input type="button" value="Find" onClick={findMovie} />
        </div>
    )
}