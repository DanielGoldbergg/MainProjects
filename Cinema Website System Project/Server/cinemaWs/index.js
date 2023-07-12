const express = require('express');
const cors = require('cors');


const userController = require('./controller/UserController');
const controllerForMembers = require('./accessToSubscribersWs/controllersToSubscribersWs/controllerToMember')
const controllerForMovies = require('./accessToSubscribersWs/controllersToSubscribersWs/controllerToMovies')
const dalUserJson = require('./accessToSubscribersWs/controllersToSubscribersWs/dalUserJsonController')
const dalPremissionsJson = require('./accessToSubscribersWs/controllersToSubscribersWs/dalPremissionController')
const dalSubscription = require('./accessToSubscribersWs/controllersToSubscribersWs/controllerToSubscription')
require('./configs/Database');


const app = express();

app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api/users', userController);
app.use('/api/members', controllerForMembers);
app.use('/api/movies', controllerForMovies);
app.use('/api/userJson', dalUserJson);
app.use('/api/premissionJson', dalPremissionsJson);
app.use('/api/subscriptions', dalSubscription);




app.listen(8001, () => {

    console.log("the Server is Running on port 8001")
}
)

    // http://localhost:8000/api/students