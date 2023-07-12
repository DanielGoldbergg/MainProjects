const express = require('express');
const cors = require('cors');

const studentController = require('./controller/studentController');

require('./configs/database');


const app = express();
app.use(cors());


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api/students', studentController);


app.listen(8000,
    console.log("the Server is Running on port 8000"));

    // http://localhost:8000/api/students