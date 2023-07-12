///requering mongoose///
const mongoose = require('mongoose');
//creating a Mongoose Schema
let membersSchema = new mongoose.Schema({
    Name: String,
    Email: String,
    City: String

});
module.exports = mongoose.model('members', membersSchema);



