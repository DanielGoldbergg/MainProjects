import Dalrequest from '../DalhttpRequest/HttpRequest'



const GetSubscriptionsArr = async (id) => {

    let subscriptions = await Dalrequest.GetAll(`http://localhost:8001/api/subscriptions`)
    let subscriptionsWatched = []
    subscriptions.forEach(sub => {
        sub.Movies.forEach(movie => {
            if (movie.MovieId === id) {
                subscriptionsWatched = [...subscriptionsWatched, sub]
            }
        })
    });

    let newSubscriptions = subscriptionsWatched.map(sub => {
        let movie = sub.Movies.filter((movie) => {
            return movie.MovieId === id
        })
        let obj = { id: sub.MemberId, Date: movie[0].Date }
        return obj
    })


    let members = await Dalrequest.GetAll(`http://localhost:8001/api/members`)
    let newSubscriptionsArr = newSubscriptions.map((sub) => {
        let oneMemberArr = members.filter(user => user._id === sub.id)
        let obj = {
            Name: oneMemberArr[0].Name,
            date: sub.Date.slice(0, 10)
        }
        return obj
    })
    return newSubscriptionsArr
}




const DeleteMovieInSubscriptions = async (id) => {
    let subscriptions = await Dalrequest.GetAll(`http://localhost:8001/api/subscriptions`)
    subscriptions.forEach(async sub => {
        let Movies = sub.Movies.filter(movie => movie.movieId !== id);
        sub.Movies = Movies
        await Dalrequest.UpdateById("http://localhost:8001/api/subscriptions", sub._id, sub)
    });
    return subscriptions
}

const SubscriptionsWatchedUtils = {
    GetSubscriptionsArr, DeleteMovieInSubscriptions
}
export default SubscriptionsWatchedUtils