///requering mongoose///
const mongoose = require('mongoose')
//creating a Mongoose Schema
let studentsSchema = new mongoose.Schema({
    FullName: String,
    Email: String,
    Faculty: String,
    BirthDate: Date,
    Grades: [{ Gradedate: Date, Gradeheight: Number }],
});
module.exports = mongoose.model('Students', studentsSchema);









