const jsonFile = require('jsonfile')
const jsonPremissionsFunction = require('./dalReadAndWrite')
const url = './json/premissions.json'

const getAllPremissions = async () => {
    let data = await jsonPremissionsFunction.getAllusersJson(url);
    return data
}

const getPremissionsById = async (id) => {
    let data = await jsonPremissionsFunction.getAllusersJson(url);
    let premission = data.premissions.find(premission => premission._id == id)
    return premission
}


const addPremissions = async (newPremissions) => {
    let allPremissions = await jsonPremissionsFunction.getAllusersJson(url);
    allPremissions.premissions.push(newPremissions);
    let data = await jsonPremissionsFunction.WriteToFile(url, allPremissions);
    return data.premissions[data.premissions.length - 1]
}

const updatePremissions = async (id, updateData) => {
    let allPremissions = await jsonPremissionsFunction.getAllusersJson(url);
    let index = allPremissions.premissions.findIndex(premission => premission._id == id)
    allPremissions.premissions[index] = updateData
    let data = await jsonPremissionsFunction.WriteToFile(url, allPremissions)
    return data.premissions;
}

const deletePremission = async (id) => {
    let allPremissions = await jsonPremissionsFunction.getAllusersJson(url)
    let premissionsToFilter = allPremissions.premissions.filter(Permission => Permission.id !== id)
    allPremissions.premissions = premissionsToFilter
    let data = jsonPremissionsFunction.WriteToFile(url, allPremissions);
    return data;

}


module.exports = { getAllPremissions, getPremissionsById, addPremissions, updatePremissions, deletePremission }