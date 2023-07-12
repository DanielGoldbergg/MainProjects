let studentModel = require("./studentModel");
let studentBL = require('./studentBL');


let updateOneGrade = async (studentId, GradeId, NewGrade) => {
    let data = await studentBL.GetStudentById(studentId);
    let GradesArr = data.Grades;

    for (let i = 0; i < GradesArr.length; i++) {
        if (GradesArr[i]._id == GradeId) {
            GradesArr[i] = NewGrade;
        }
    }
    data.Grades = GradesArr;

    let status = await studentBL.EditStudent(studentId, data);
    return status;
}


let AddGrade = async (studentId, NewGrade) => {
    console.log("jjejej");
    let data = await studentBL.GetStudentById(studentId);
    let GradesArr = data.Grades;
    GradesArr.push(NewGrade);
    data.Grades = GradesArr;

    let status = await studentBL.EditStudent(studentId, data);
    return status;
}

let GetGradesById = async (StudentId) => {
    let data = await studentBL.GetStudentById(StudentId);
    console.log(data)
    return data.Grades;
}

module.exports = { updateOneGrade, AddGrade, GetGradesById }