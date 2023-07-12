///requering mongoose///
const mongoose = require('mongoose')
//creating a Mongoose Schema
let subscribersSchema = new mongoose.Schema({
    MemberId: String,
    Movies: [{ MovieId: String, Date: Date }],





});
module.exports = mongoose.model('subscribers', subscribersSchema);