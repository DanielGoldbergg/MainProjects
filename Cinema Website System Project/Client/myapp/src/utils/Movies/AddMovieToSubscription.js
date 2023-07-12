import DalRequest from '../DalhttpRequest/HttpRequest'

export const AddMovieToSubscriptions = async (idMember, idMovie, Date) => {


    let allSubscriptions = await DalRequest.GetAll(`http://localhost:8001/api/subscriptions`)
    let oneSubscription = allSubscriptions.filter(sub => {
        return sub.MemberId === idMember
    })


    if (oneSubscription.length === 0) {
        let newSubscription = {
            MemberId: idMember,
            Movies: { MovieId: idMovie, Date: Date }
        }

        let data = await DalRequest.Create(`http://localhost:8001/api/subscriptions`, newSubscription)
        return data
    }

    else {
        let newMoviesArr = oneSubscription[0].Movies;
        let newMovie = {
            MovieId: idMovie,
            Date: Date
        }
        newMoviesArr.push(newMovie)
        oneSubscription[0].Movies = newMoviesArr;
        let data = await DalRequest.UpdateById(`http://localhost:8001/api/subscriptions`, oneSubscription[0]._id, oneSubscription[0])
        return data
    }
}
