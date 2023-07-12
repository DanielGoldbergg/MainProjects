///requering mongoose///
const mongoose = require('mongoose');
//creating a Mongoose Schema
let usersSchema = new mongoose.Schema({
    UserName: String,
    Password: String

});
module.exports = mongoose.model('users', usersSchema);
