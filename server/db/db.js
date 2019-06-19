const config = require('../../knexfile').development
const connection = require("./connection");
const utils = require('./utils')


function userExists(user_name, testDb) {
  const db = testDb || connection

  return db('users')
    .where('user_name', user_name)
    .then(users => users.length > 0)
}

module.exports = {
  userExists,
}