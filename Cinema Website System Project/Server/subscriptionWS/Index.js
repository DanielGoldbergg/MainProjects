const express = require('express');
const cors = require('cors');

const membersBL = require('./model/business logic/MemberBl')
const MovieBL = require('./model/business logic/MoviesBl')

const MemberController = require('./controller/MemberController');
const MovieController = require('./controller/MovieController');
const SubscriptionController = require('./controller/SubscriptionController');
require('./configs/Database');


const app = express();

app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api/members', MemberController);
app.use('/api/movies', MovieController);
app.use('/api/subscribers', SubscriptionController);


app.listen(8000, () => {

    // membersBL.addMembersToDB()
    // MovieBL.addMoviesToDB()


    console.log("the Server is Running on port 8000")
}
);

    // http://localhost:8000/api/students