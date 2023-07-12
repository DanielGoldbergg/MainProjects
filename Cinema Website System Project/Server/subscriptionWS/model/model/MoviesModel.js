///requering mongoose///
const mongoose = require('mongoose')
//creating a Mongoose Schema
let moviesSchema = new mongoose.Schema({
    Name: String,
    Genres: [String],
    Image: String,
    Premiered: Date

});
module.exports = mongoose.model('movies', moviesSchema);



