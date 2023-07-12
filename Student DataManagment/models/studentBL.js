let studentModel = require('./studentModel'); // For access to the collection

// Returns information of all students (the entire "Students" collection)
let GetALLStudents = () => {
    return new Promise((resolve, reject) => {
        studentModel.find({}, (err, data) => {
            if (err) {
                reject(err);
            }
            else {
                resolve(data)
            }
        })
    })
}

// Returns information of one student (one Document)
let GetStudentById = (id) => {
    return new Promise((resolve, reject) => {
        studentModel.findById(id, (err, data) => {
            if (err) {
                reject(err);
            }
            else {
                resolve(data);
            }
        })
    })
}
// adds Document with student information to collection
let CrateStudent = (NewStudent) => {
    return new Promise((resolve, reject) => {
        let studentToAdd = new studentModel({
            FullName: NewStudent.FullName,
            Email: NewStudent.Email,
            Faculty: NewStudent.Faculty,
            BirthDate: NewStudent.BirthDate,
            Grades: NewStudent.Grades,
        })

        studentToAdd.save((err) => {
            if (err) {
                reject(err);
            }
            else {
                resolve(studentToAdd);
            }
        })
    })
}

// Edits student information by Id And returns status
let EditStudent = (id, TheNewStudent) => {
    return new Promise((resolve, reject) => {
        studentModel.findByIdAndUpdate(id, {
            FullName: TheNewStudent.FullName,
            Email: TheNewStudent.Email,
            Faculty: TheNewStudent.Faculty,
            BirthDate: TheNewStudent.BirthDate,
            Grades: TheNewStudent.Grades,
        }, (err) => {
            if (err) {
                reject(err);
            }
            else {
                resolve("Student is update")
            }
        })
    })
}
// Deletes information of one student in the collection
let DeleteStudent = (stdId) => {
    return new Promise((resolve, reject) => {
        studentModel.findByIdAndDelete(stdId, err => {
            if (err) {
                reject(err);
            }
            else {
                resolve("student Deleted")
            }
        })
    })
}

module.exports = { GetALLStudents, GetStudentById, EditStudent, CrateStudent, DeleteStudent, }