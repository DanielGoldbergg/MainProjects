import DalRequest from '../DalhttpRequest/HttpRequest'


const GetMoviesOfmember = async (id) => {

    let allSubscriptions = await DalRequest.GetAll(`http://localhost:8001/api/subscriptions`)
    let SubscribeMember = allSubscriptions.filter(sub => {
        return sub.MemberId === id
    })


    if (SubscribeMember.length > 0) {
        let AllMovies = await DalRequest.GetAll(`http://localhost:8001/api/movies`)
        let MoviesWatched = []


        SubscribeMember[0].Movies.forEach((movie) => {
            let ArrOfOneMovie = AllMovies.filter(mov => { return (mov._id === movie.MovieId) })
            console.log(ArrOfOneMovie);
            let obj = {
                id: ArrOfOneMovie[0]._id,
                movie: ArrOfOneMovie[0].Name,
                date: movie.Date.slice(0, 10)
            }
            MoviesWatched.push(obj)
        })
        return (MoviesWatched);
    }
    else {

        return (SubscribeMember)
    }

}
const MoviesWatched = {
    GetMoviesOfmember
}
export default MoviesWatched