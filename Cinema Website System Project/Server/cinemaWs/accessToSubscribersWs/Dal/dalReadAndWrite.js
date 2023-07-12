let jsonFile = require('jsonfile')

const getAllusersJson = (Url) => {
    return new Promise((resolve, reject) => {
        jsonFile.readFile(Url, (err, obj) => {
            if (err) {
                reject(err)
            }
            else {
                resolve(obj)
            }
        })
    })
}

const WriteToFile = (Url, obj) => {
    return new Promise((resolve, rejct) => {
        jsonFile.writeFile(Url, obj, err => {
            if (err) {
                rejct(err)
            }
            else {
                resolve(obj)
            }
        })
    })
}

module.exports = { getAllusersJson, WriteToFile }